import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface DonationQueryParams {
    page?: string;
    limit?: string;
    bloodType?: string;
    status?: string;
    startDate?: string;
    endDate?: string;
}

export async function getDonations(searchParams: URLSearchParams) {
    try {
        // Extract query parameters with proper typing
        const {
            page = '1',
            limit = '10',
            bloodType,
            status,
            startDate,
            endDate
        } = Object.fromEntries(searchParams) as DonationQueryParams;

        // Build where clause for filtering
        const where: Record<string, unknown> = {};

        if (bloodType) {
            where.bloodType = bloodType;
        }

        if (status) {
            where.status = status;
        }

        if (startDate || endDate) {
            where.donationDate = {
                ...(startDate && { gte: new Date(startDate) }),
                ...(endDate && { lte: new Date(endDate) })
            };
        }

        // Calculate pagination
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const take = parseInt(limit);

        // Get total count for pagination
        const total = await prisma.donation.count({ where });

        // Get donations with pagination and filtering
        const donations = await prisma.donation.findMany({
            where,
            skip,
            take,
            include: {
                donor: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true
                    }
                }
            },
            orderBy: {
                donationDate: 'desc'
            }
        });

        return NextResponse.json({
            donations,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages: Math.ceil(total / parseInt(limit))
            }
        });
    } catch (error) {
        console.error('Error fetching donations:', error);
        return NextResponse.json(
            { error: 'Failed to fetch donations' },
            { status: 500 }
        );
    }
} 