import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Validation schema for donation creation
const createDonationSchema = z.object({
  donorId: z.string(),
  bloodType: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  donationDate: z.string().datetime(),
  location: z.string(),
  status: z.enum(['SCHEDULED', 'COMPLETED', 'CANCELLED']),
  notes: z.string().optional(),
});

export async function createDonation(data: unknown) {
  try {
    // Validate input data
    const validatedData = createDonationSchema.parse(data);

    // Create donation record
    const donation = await prisma.donation.create({
      data: {
        ...validatedData,
        donationDate: new Date(validatedData.donationDate),
      },
      include: {
        donor: true,
      },
    });

    return NextResponse.json(donation, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Error creating donation:', error);
    return NextResponse.json(
      { error: 'Failed to create donation' },
      { status: 500 }
    );
  }
} 