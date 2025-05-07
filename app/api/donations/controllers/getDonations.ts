import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function getDonations(searchParams: URLSearchParams) {
    try {
        // Extract query parameters
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const bloodType = searchParams.get('bloodType');
        const status = searchParams.get('status');
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');

        // Build where clause
        const where: any = {};
        if (bloodType) where.bloodType = bloodType;
        if (status) where.status = status;
        if (startDate || endDate) {
            where.donationDate = {};
            if (startDate) where.donationDate.gte = new Date(startDate);
            if (endDate) where.donationDate.lte = new Date(endDate);
        }

        // Get total count for pagination
        const total = await prisma.donation.count({ where });

        // Get donations with pagination
        const donations = await prisma.donation.findMany({
            where,
            include: {
                donor: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true,
                    },
                },
            },
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
                donationDate: 'desc',
            },
        });

        return NextResponse.json({
            donations,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error('Error fetching donations:', error);
        return NextResponse.json(
            { error: 'Failed to fetch donations' },
            { status: 500 }
        );
    }
} 