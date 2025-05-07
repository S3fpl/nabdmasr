import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function deleteDonation(id: string) {
    try {
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

        // Delete donation record
        await prisma.donation.delete({
            where: { id },
        });

        return NextResponse.json(
            { message: 'Donation deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error deleting donation:', error);
        return NextResponse.json(
            { error: 'Failed to delete donation' },
            { status: 500 }
        );
    }
} 