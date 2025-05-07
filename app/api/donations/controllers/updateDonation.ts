import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Validation schema for donation update
const updateDonationSchema = z.object({
  bloodType: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
  donationDate: z.string().datetime().optional(),
  location: z.string().optional(),
  status: z.enum(['SCHEDULED', 'COMPLETED', 'CANCELLED']).optional(),
  notes: z.string().optional(),
});

export async function updateDonation(id: string, data: unknown) {
  try {
    // Validate input data
    const validatedData = updateDonationSchema.parse(data);

    // Check if donation exists
    const existingDonation = await prisma.donation.findUnique({
      where: { id },
    });

    if (!existingDonation) {
      return NextResponse.json(
        { error: 'Donation not found' },
        { status: 404 }
      );
    }

    // Update donation record
    const donation = await prisma.donation.update({
      where: { id },
      data: {
        ...validatedData,
        donationDate: validatedData.donationDate ? new Date(validatedData.donationDate) : undefined,
      },
      include: {
        donor: true,
      },
    });

    return NextResponse.json(donation);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Error updating donation:', error);
    return NextResponse.json(
      { error: 'Failed to update donation' },
      { status: 500 }
    );
  }
} 