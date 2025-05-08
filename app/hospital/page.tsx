"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import type { LatLngTuple } from "leaflet";
import {
    Phone,
    MapPin,
    Clock,
    Globe,
    Search,
    Droplet,
    Heart,
    AlertTriangle,
    Users,
    Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { createPortal } from "react-dom";

// Dynamically import the map component with no SSR
const MapWithNoSSR = dynamic(
    () => import("@/components/Map"),
    {
        ssr: false,
        loading: () => (
            <div className="h-[500px] rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <p className="text-gray-400">Loading map...</p>
            </div>
        ),
    }
);

interface BloodStock {
    type: string;
    units: number;
    lastUpdated: string;
}

interface Location {
    id: number;
    name: string;
    type: string;
    address: string;
    phone: string;
    website: string;
    hours: string;
    bloodTypes: string[];
    coordinates: LatLngTuple;
    bloodStock: BloodStock[];
}

// Mock data - Replace with actual API data
const locations: Location[] = [
    {
        id: 1,
        name: "Alexandria Medical Center",
        type: "hospital",
        address: "123 El-Gaish Road, Sidi Gaber, Alexandria",
        phone: "+20 3 123 4567",
        website: "www.alexmedical.com",
        hours: "24/7",
        bloodTypes: ["A+", "B+", "O+", "AB+"],
        coordinates: [31.2157, 29.9553] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 15, lastUpdated: "2024-03-20 10:30" },
            { type: "B+", units: 8, lastUpdated: "2024-03-20 09:15" },
            { type: "O+", units: 20, lastUpdated: "2024-03-20 11:45" },
            { type: "AB+", units: 5, lastUpdated: "2024-03-20 08:30" }
        ]
    },
    {
        id: 2,
        name: "Alexandria Blood Bank",
        type: "blood-bank",
        address: "45 El-Horreya Ave, Alexandria",
        phone: "+20 3 987 6543",
        website: "www.alexbloodbank.com",
        hours: "8:00 AM - 8:00 PM",
        bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        coordinates: [31.2000, 29.9167] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 25, lastUpdated: "2024-03-20 12:00" },
            { type: "A-", units: 12, lastUpdated: "2024-03-20 11:30" },
            { type: "B+", units: 18, lastUpdated: "2024-03-20 10:45" },
            { type: "B-", units: 10, lastUpdated: "2024-03-20 09:30" },
            { type: "O+", units: 30, lastUpdated: "2024-03-20 12:15" },
            { type: "O-", units: 15, lastUpdated: "2024-03-20 11:00" },
            { type: "AB+", units: 8, lastUpdated: "2024-03-20 10:15" },
            { type: "AB-", units: 5, lastUpdated: "2024-03-20 09:45" }
        ]
    },
    {
        id: 3,
        name: "Smouha Medical Complex",
        type: "hospital",
        address: "78 Smouha Road, Alexandria",
        phone: "+20 3 456 7890",
        website: "www.smouhamed.com",
        hours: "24/7",
        bloodTypes: ["A+", "B+", "O+", "AB+", "O-"],
        coordinates: [31.1833, 29.9500] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 12, lastUpdated: "2024-03-20 11:15" },
            { type: "B+", units: 7, lastUpdated: "2024-03-20 10:30" },
            { type: "O+", units: 18, lastUpdated: "2024-03-20 12:00" },
            { type: "AB+", units: 4, lastUpdated: "2024-03-20 09:15" },
            { type: "O-", units: 6, lastUpdated: "2024-03-20 10:00" }
        ]
    },
    {
        id: 4,
        name: "Agami Blood Center",
        type: "blood-bank",
        address: "15 Agami Road, Alexandria",
        phone: "+20 3 234 5678",
        website: "www.agamiblood.com",
        hours: "9:00 AM - 9:00 PM",
        bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        coordinates: [31.1500, 29.8500] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 20, lastUpdated: "2024-03-20 12:30" },
            { type: "A-", units: 10, lastUpdated: "2024-03-20 11:45" },
            { type: "B+", units: 15, lastUpdated: "2024-03-20 12:15" },
            { type: "B-", units: 8, lastUpdated: "2024-03-20 11:30" },
            { type: "O+", units: 25, lastUpdated: "2024-03-20 12:45" },
            { type: "O-", units: 12, lastUpdated: "2024-03-20 12:00" },
            { type: "AB+", units: 6, lastUpdated: "2024-03-20 11:15" },
            { type: "AB-", units: 4, lastUpdated: "2024-03-20 10:45" }
        ]
    },
    {
        id: 5,
        name: "Maamoura Medical Center",
        type: "hospital",
        address: "25 Maamoura Beach Road, Alexandria",
        phone: "+20 3 345 6789",
        website: "www.maamouramedical.com",
        hours: "24/7",
        bloodTypes: ["A+", "B+", "O+", "AB+", "A-", "O-"],
        coordinates: [31.2500, 29.9500] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 18, lastUpdated: "2024-03-20 13:00" },
            { type: "A-", units: 9, lastUpdated: "2024-03-20 12:30" },
            { type: "B+", units: 14, lastUpdated: "2024-03-20 13:15" },
            { type: "O+", units: 22, lastUpdated: "2024-03-20 13:30" },
            { type: "O-", units: 11, lastUpdated: "2024-03-20 13:00" },
            { type: "AB+", units: 7, lastUpdated: "2024-03-20 12:45" }
        ]
    },
    {
        id: 6,
        name: "Miami Blood Bank",
        type: "blood-bank",
        address: "10 Miami Street, Alexandria",
        phone: "+20 3 456 7891",
        website: "www.miamiblood.com",
        hours: "8:00 AM - 10:00 PM",
        bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        coordinates: [31.2300, 29.9700] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 28, lastUpdated: "2024-03-20 14:00" },
            { type: "A-", units: 15, lastUpdated: "2024-03-20 13:30" },
            { type: "B+", units: 20, lastUpdated: "2024-03-20 14:15" },
            { type: "B-", units: 12, lastUpdated: "2024-03-20 13:45" },
            { type: "O+", units: 32, lastUpdated: "2024-03-20 14:30" },
            { type: "O-", units: 18, lastUpdated: "2024-03-20 14:00" },
            { type: "AB+", units: 9, lastUpdated: "2024-03-20 13:45" },
            { type: "AB-", units: 6, lastUpdated: "2024-03-20 13:30" }
        ]
    },
    {
        id: 7,
        name: "Glim Blood Center",
        type: "blood-bank",
        address: "5 Glim Street, Alexandria",
        phone: "+20 3 567 8901",
        website: "www.glimblood.com",
        hours: "9:00 AM - 9:00 PM",
        bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        coordinates: [31.2100, 29.9300] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 22, lastUpdated: "2024-03-20 15:00" },
            { type: "A-", units: 13, lastUpdated: "2024-03-20 14:30" },
            { type: "B+", units: 17, lastUpdated: "2024-03-20 15:15" },
            { type: "B-", units: 9, lastUpdated: "2024-03-20 14:45" },
            { type: "O+", units: 28, lastUpdated: "2024-03-20 15:30" },
            { type: "O-", units: 14, lastUpdated: "2024-03-20 15:00" },
            { type: "AB+", units: 8, lastUpdated: "2024-03-20 14:45" },
            { type: "AB-", units: 5, lastUpdated: "2024-03-20 14:30" }
        ]
    },
    {
        id: 8,
        name: "Sidi Bishr Medical Center",
        type: "hospital",
        address: "30 Sidi Bishr Road, Alexandria",
        phone: "+20 3 678 9012",
        website: "www.sidibishrmed.com",
        hours: "24/7",
        bloodTypes: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-"],
        coordinates: [31.2700, 29.9600] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 16, lastUpdated: "2024-03-20 16:00" },
            { type: "A-", units: 8, lastUpdated: "2024-03-20 15:30" },
            { type: "B+", units: 12, lastUpdated: "2024-03-20 16:15" },
            { type: "B-", units: 6, lastUpdated: "2024-03-20 15:45" },
            { type: "O+", units: 24, lastUpdated: "2024-03-20 16:30" },
            { type: "O-", units: 10, lastUpdated: "2024-03-20 16:00" },
            { type: "AB+", units: 5, lastUpdated: "2024-03-20 15:45" }
        ]
    },
    {
        id: 9,
        name: "Miami Medical Complex",
        type: "hospital",
        address: "8 Miami Street, Alexandria",
        phone: "+20 3 789 0123",
        website: "www.miamimed.com",
        hours: "24/7",
        bloodTypes: ["A+", "B+", "O+", "AB+", "A-", "O-"],
        coordinates: [31.2400, 29.9800] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 19, lastUpdated: "2024-03-20 17:00" },
            { type: "A-", units: 10, lastUpdated: "2024-03-20 16:30" },
            { type: "B+", units: 15, lastUpdated: "2024-03-20 17:15" },
            { type: "O+", units: 26, lastUpdated: "2024-03-20 17:30" },
            { type: "O-", units: 12, lastUpdated: "2024-03-20 17:00" },
            { type: "AB+", units: 6, lastUpdated: "2024-03-20 16:45" }
        ]
    },
    {
        id: 10,
        name: "Louran Blood Center",
        type: "blood-bank",
        address: "12 Louran Street, Alexandria",
        phone: "+20 3 890 1234",
        website: "www.louranblood.com",
        hours: "8:00 AM - 8:00 PM",
        bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        coordinates: [31.2200, 29.9400] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 24, lastUpdated: "2024-03-20 18:00" },
            { type: "A-", units: 14, lastUpdated: "2024-03-20 17:30" },
            { type: "B+", units: 19, lastUpdated: "2024-03-20 18:15" },
            { type: "B-", units: 11, lastUpdated: "2024-03-20 17:45" },
            { type: "O+", units: 30, lastUpdated: "2024-03-20 18:30" },
            { type: "O-", units: 16, lastUpdated: "2024-03-20 18:00" },
            { type: "AB+", units: 9, lastUpdated: "2024-03-20 17:45" },
            { type: "AB-", units: 6, lastUpdated: "2024-03-20 17:30" }
        ]
    },
    {
        id: 11,
        name: "Rushdy Medical Center",
        type: "hospital",
        address: "15 Rushdy Street, Alexandria",
        phone: "+20 3 901 2345",
        website: "www.rushdymedical.com",
        hours: "24/7",
        bloodTypes: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-"],
        coordinates: [31.2300, 29.9500] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 20, lastUpdated: "2024-03-20 19:00" },
            { type: "A-", units: 12, lastUpdated: "2024-03-20 18:30" },
            { type: "B+", units: 15, lastUpdated: "2024-03-20 19:15" },
            { type: "B-", units: 8, lastUpdated: "2024-03-20 18:45" },
            { type: "O+", units: 25, lastUpdated: "2024-03-20 19:30" },
            { type: "O-", units: 13, lastUpdated: "2024-03-20 19:00" },
            { type: "AB+", units: 7, lastUpdated: "2024-03-20 18:45" }
        ]
    },
    {
        id: 12,
        name: "Rushdy Blood Center",
        type: "blood-bank",
        address: "8 Rushdy Street, Alexandria",
        phone: "+20 3 012 3456",
        website: "www.rushdyblood.com",
        hours: "8:00 AM - 8:00 PM",
        bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        coordinates: [31.2350, 29.9450] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 30, lastUpdated: "2024-03-20 20:00" },
            { type: "A-", units: 18, lastUpdated: "2024-03-20 19:30" },
            { type: "B+", units: 22, lastUpdated: "2024-03-20 20:15" },
            { type: "B-", units: 14, lastUpdated: "2024-03-20 19:45" },
            { type: "O+", units: 35, lastUpdated: "2024-03-20 20:30" },
            { type: "O-", units: 20, lastUpdated: "2024-03-20 20:00" },
            { type: "AB+", units: 12, lastUpdated: "2024-03-20 19:45" },
            { type: "AB-", units: 8, lastUpdated: "2024-03-20 19:30" }
        ]
    },
    {
        id: 13,
        name: "Saba Pasha Medical Complex",
        type: "hospital",
        address: "20 Saba Pasha Road, Alexandria",
        phone: "+20 3 123 4567",
        website: "www.sabapashamed.com",
        hours: "24/7",
        bloodTypes: ["A+", "B+", "O+", "AB+", "A-", "O-"],
        coordinates: [31.2400, 29.9200] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 22, lastUpdated: "2024-03-20 21:00" },
            { type: "A-", units: 11, lastUpdated: "2024-03-20 20:30" },
            { type: "B+", units: 18, lastUpdated: "2024-03-20 21:15" },
            { type: "O+", units: 28, lastUpdated: "2024-03-20 21:30" },
            { type: "O-", units: 14, lastUpdated: "2024-03-20 21:00" },
            { type: "AB+", units: 8, lastUpdated: "2024-03-20 20:45" }
        ]
    },
    {
        id: 14,
        name: "Saba Pasha Blood Bank",
        type: "blood-bank",
        address: "12 Saba Pasha Road, Alexandria",
        phone: "+20 3 234 5678",
        website: "www.sabapashablood.com",
        hours: "9:00 AM - 9:00 PM",
        bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        coordinates: [31.2450, 29.9150] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 28, lastUpdated: "2024-03-20 22:00" },
            { type: "A-", units: 16, lastUpdated: "2024-03-20 21:30" },
            { type: "B+", units: 20, lastUpdated: "2024-03-20 22:15" },
            { type: "B-", units: 12, lastUpdated: "2024-03-20 21:45" },
            { type: "O+", units: 32, lastUpdated: "2024-03-20 22:30" },
            { type: "O-", units: 18, lastUpdated: "2024-03-20 22:00" },
            { type: "AB+", units: 10, lastUpdated: "2024-03-20 21:45" },
            { type: "AB-", units: 7, lastUpdated: "2024-03-20 21:30" }
        ]
    },
    {
        id: 15,
        name: "Glim Medical Center",
        type: "hospital",
        address: "18 Glim Street, Alexandria",
        phone: "+20 3 345 6789",
        website: "www.glimmedical.com",
        hours: "24/7",
        bloodTypes: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-"],
        coordinates: [31.2100, 29.9300] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 19, lastUpdated: "2024-03-20 23:00" },
            { type: "A-", units: 10, lastUpdated: "2024-03-20 22:30" },
            { type: "B+", units: 14, lastUpdated: "2024-03-20 23:15" },
            { type: "B-", units: 7, lastUpdated: "2024-03-20 22:45" },
            { type: "O+", units: 26, lastUpdated: "2024-03-20 23:30" },
            { type: "O-", units: 12, lastUpdated: "2024-03-20 23:00" },
            { type: "AB+", units: 6, lastUpdated: "2024-03-20 22:45" }
        ]
    },
    {
        id: 16,
        name: "Miami Medical Center",
        type: "hospital",
        address: "25 Miami Street, Alexandria",
        phone: "+20 3 456 7890",
        website: "www.miamimed.com",
        hours: "24/7",
        bloodTypes: ["A+", "B+", "O+", "AB+", "A-", "O-"],
        coordinates: [31.2400, 29.9700] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 21, lastUpdated: "2024-03-21 00:00" },
            { type: "A-", units: 11, lastUpdated: "2024-03-20 23:30" },
            { type: "B+", units: 17, lastUpdated: "2024-03-21 00:15" },
            { type: "O+", units: 27, lastUpdated: "2024-03-21 00:30" },
            { type: "O-", units: 13, lastUpdated: "2024-03-21 00:00" },
            { type: "AB+", units: 7, lastUpdated: "2024-03-20 23:45" }
        ]
    },
    {
        id: 17,
        name: "Miami Blood Center",
        type: "blood-bank",
        address: "15 Miami Street, Alexandria",
        phone: "+20 3 567 8901",
        website: "www.miamiblood.com",
        hours: "8:00 AM - 8:00 PM",
        bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        coordinates: [31.2450, 29.9650] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 29, lastUpdated: "2024-03-21 01:00" },
            { type: "A-", units: 17, lastUpdated: "2024-03-21 00:30" },
            { type: "B+", units: 21, lastUpdated: "2024-03-21 01:15" },
            { type: "B-", units: 13, lastUpdated: "2024-03-21 00:45" },
            { type: "O+", units: 34, lastUpdated: "2024-03-21 01:30" },
            { type: "O-", units: 19, lastUpdated: "2024-03-21 01:00" },
            { type: "AB+", units: 11, lastUpdated: "2024-03-21 00:45" },
            { type: "AB-", units: 7, lastUpdated: "2024-03-21 00:30" }
        ]
    },
    {
        id: 18,
        name: "Louran Medical Complex",
        type: "hospital",
        address: "30 Louran Street, Alexandria",
        phone: "+20 3 678 9012",
        website: "www.louranmed.com",
        hours: "24/7",
        bloodTypes: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-"],
        coordinates: [31.2200, 29.9400] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 23, lastUpdated: "2024-03-21 02:00" },
            { type: "A-", units: 12, lastUpdated: "2024-03-21 01:30" },
            { type: "B+", units: 16, lastUpdated: "2024-03-21 02:15" },
            { type: "B-", units: 8, lastUpdated: "2024-03-21 01:45" },
            { type: "O+", units: 29, lastUpdated: "2024-03-21 02:30" },
            { type: "O-", units: 14, lastUpdated: "2024-03-21 02:00" },
            { type: "AB+", units: 8, lastUpdated: "2024-03-21 01:45" }
        ]
    },
    {
        id: 19,
        name: "Louran Blood Bank",
        type: "blood-bank",
        address: "22 Louran Street, Alexandria",
        phone: "+20 3 789 0123",
        website: "www.louranblood.com",
        hours: "9:00 AM - 9:00 PM",
        bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        coordinates: [31.2250, 29.9350] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 31, lastUpdated: "2024-03-21 03:00" },
            { type: "A-", units: 19, lastUpdated: "2024-03-21 02:30" },
            { type: "B+", units: 23, lastUpdated: "2024-03-21 03:15" },
            { type: "B-", units: 15, lastUpdated: "2024-03-21 02:45" },
            { type: "O+", units: 36, lastUpdated: "2024-03-21 03:30" },
            { type: "O-", units: 21, lastUpdated: "2024-03-21 03:00" },
            { type: "AB+", units: 13, lastUpdated: "2024-03-21 02:45" },
            { type: "AB-", units: 9, lastUpdated: "2024-03-21 02:30" }
        ]
    },
    {
        id: 20,
        name: "Sidi Gaber Medical Center",
        type: "hospital",
        address: "35 El-Gaish Road, Sidi Gaber, Alexandria",
        phone: "+20 3 890 1234",
        website: "www.sidigabermed.com",
        hours: "24/7",
        bloodTypes: ["A+", "B+", "O+", "AB+", "A-", "O-"],
        coordinates: [31.2157, 29.9553] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 24, lastUpdated: "2024-03-21 04:00" },
            { type: "A-", units: 13, lastUpdated: "2024-03-21 03:30" },
            { type: "B+", units: 19, lastUpdated: "2024-03-21 04:15" },
            { type: "O+", units: 30, lastUpdated: "2024-03-21 04:30" },
            { type: "O-", units: 15, lastUpdated: "2024-03-21 04:00" },
            { type: "AB+", units: 9, lastUpdated: "2024-03-21 03:45" }
        ]
    },
    {
        id: 21,
        name: "Sidi Gaber Blood Center",
        type: "blood-bank",
        address: "28 El-Gaish Road, Sidi Gaber, Alexandria",
        phone: "+20 3 901 2345",
        website: "www.sidigaberblood.com",
        hours: "8:00 AM - 8:00 PM",
        bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        coordinates: [31.2200, 29.9500] as LatLngTuple,
        bloodStock: [
            { type: "A+", units: 33, lastUpdated: "2024-03-21 05:00" },
            { type: "A-", units: 20, lastUpdated: "2024-03-21 04:30" },
            { type: "B+", units: 25, lastUpdated: "2024-03-21 05:15" },
            { type: "B-", units: 16, lastUpdated: "2024-03-21 04:45" },
            { type: "O+", units: 38, lastUpdated: "2024-03-21 05:30" },
            { type: "O-", units: 22, lastUpdated: "2024-03-21 05:00" },
            { type: "AB+", units: 14, lastUpdated: "2024-03-21 04:45" },
            { type: "AB-", units: 10, lastUpdated: "2024-03-21 04:30" }
        ]
    }
];

const HospitalPage = () => {
    const [selectedType, setSelectedType] = useState("all");
    const [selectedBloodType, setSelectedBloodType] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestionsPosition, setSuggestionsPosition] = useState({ top: 0, left: 0, width: 0 });
    const mapSectionRef = useRef<HTMLDivElement>(null);

    // Function to scroll to map section
    const scrollToMap = () => {
        mapSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Function to update suggestions position
    const updateSuggestionsPosition = () => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            const rect = searchInput.getBoundingClientRect();
            setSuggestionsPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width
            });
        }
    };

    // Update position on scroll and resize
    useEffect(() => {
        if (showSuggestions) {
            window.addEventListener('scroll', updateSuggestionsPosition);
            window.addEventListener('resize', updateSuggestionsPosition);
            updateSuggestionsPosition();
        }
        return () => {
            window.removeEventListener('scroll', updateSuggestionsPosition);
            window.removeEventListener('resize', updateSuggestionsPosition);
        };
    }, [showSuggestions]);

    const filteredLocations = locations.filter((location) => {
        const matchesType =
            selectedType === "all" || location.type === selectedType;
        const matchesBloodType =
            selectedBloodType === "all" ||
            location.bloodTypes.includes(selectedBloodType);
        const matchesSearch =
            location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            location.address.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesBloodType && matchesSearch;
    });

    const searchSuggestions = locations.filter((location) => {
        if (!searchQuery) return false;
        return (
            location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            location.address.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }).slice(0, 5); // Limit to 5 suggestions

    const getStockStatus = (units: number) => {
        if (units <= 5) return "text-red-400";
        if (units <= 10) return "text-yellow-400";
        return "text-green-400";
    };

    return (
        <div className="min-h-screen text-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-10" />
                <div className="absolute inset-0 bg-cover bg-center" />
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent ">
                        Find Medical Help in Alexandria
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Locate hospitals and blood banks near you. Get real-time information
                        about blood availability and emergency services.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                            <Phone className="w-5 h-5 mr-2" />
                            Emergency Contact
                        </Button>
                        <Button
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                            onClick={scrollToMap}
                        >
                            <MapPin className="w-5 h-5 mr-2" />
                            Find Nearest
                        </Button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 ">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <Heart className="w-6 h-6 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">24/7</h3>
                                    <p className="text-gray-400">Emergency Service</p>
                                </div>
                            </div>
                        </div>
                        <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <Users className="w-6 h-6 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">50+</h3>
                                    <p className="text-gray-400">Medical Centers</p>
                                </div>
                            </div>
                        </div>
                        <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <Droplet className="w-6 h-6 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">1000+</h3>
                                    <p className="text-gray-400">Blood Units Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-red-500/20 rounded-lg">
                                    <Activity className="w-6 h-6 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">24h</h3>
                                    <p className="text-gray-400">Response Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    id="search-input"
                                    type="text"
                                    placeholder="Search by name or address..."
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setShowSuggestions(true);
                                        updateSuggestionsPosition();
                                    }}
                                    onFocus={() => {
                                        setShowSuggestions(true);
                                        updateSuggestionsPosition();
                                    }}
                                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                                />
                            </div>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-red-500"
                            >
                                <option value="all">All Types</option>
                                <option value="hospital">Hospitals</option>
                                <option value="blood-bank">Blood Banks</option>
                            </select>
                            <select
                                value={selectedBloodType}
                                onChange={(e) => setSelectedBloodType(e.target.value)}
                                className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-red-500"
                            >
                                <option value="all">All Blood Types</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Portal for Search Suggestions */}
            {showSuggestions && searchQuery && searchSuggestions.length > 0 && createPortal(
                <div
                    style={{
                        position: 'absolute',
                        top: `${suggestionsPosition.top}px`,
                        left: `${suggestionsPosition.left}px`,
                        width: `${suggestionsPosition.width}px`,
                        zIndex: 9999
                    }}
                    className="mt-2 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 overflow-hidden shadow-xl text-white"
                >
                    {searchSuggestions.map((location) => (
                        <div
                            key={location.id}
                            className="p-3 hover:bg-white/10 cursor-pointer transition-colors"
                            onClick={() => {
                                setSearchQuery(location.name);
                                setSelectedLocation(location);
                                setShowSuggestions(false);
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-red-400" />
                                <div>
                                    <p className="font-medium text-white">{location.name}</p>
                                    <p className="text-sm text-gray-300">{location.address}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>,
                document.body
            )}

            {/* Map and List View */}
            <div className="py-16" ref={mapSectionRef}>
                <div className="max-w-7xl mx-auto px-4">
                    {/* Map and Selected Location */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Map */}
                        <div className="h-[500px] rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 relative z-0">
                            <MapWithNoSSR
                                locations={filteredLocations}
                                selectedLocation={selectedLocation}
                                onLocationSelect={setSelectedLocation}
                            />
                        </div>

                        {/* Selected Location Details */}
                        <div className="h-[500px]">
                            {selectedLocation ? (
                                <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10 h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <h3 className="text-2xl font-semibold">
                                                    {selectedLocation.name}
                                                </h3>
                                                <span className="px-3 py-1 rounded-full text-sm bg-red-500/20 text-red-300">
                                                    {selectedLocation.type === "hospital"
                                                        ? "Hospital"
                                                        : "Blood Bank"}
                                                </span>
                                            </div>
                                            <div className="space-y-3 text-gray-300">
                                                <p className="flex items-center gap-2">
                                                    <MapPin className="w-5 h-5" />
                                                    {selectedLocation.address}
                                                </p>
                                                <p className="flex items-center gap-2">
                                                    <Phone className="w-5 h-5" />
                                                    {selectedLocation.phone}
                                                </p>
                                                <p className="flex items-center gap-2">
                                                    <Clock className="w-5 h-5" />
                                                    {selectedLocation.hours}
                                                </p>
                                                <p className="flex items-center gap-2">
                                                    <Globe className="w-5 h-5" />
                                                    {selectedLocation.website}
                                                </p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="border-white/30 text-white hover:bg-white/10"
                                            onClick={() =>
                                                (window.location.href = `tel:${selectedLocation.phone}`)
                                            }
                                        >
                                            <Phone className="w-4 h-4 mr-2" />
                                            Call Now
                                        </Button>
                                    </div>

                                    {/* Blood Stock Information */}
                                    <div className="mt-6">
                                        <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                                            <Droplet className="w-5 h-5" />
                                            Blood Stock Status
                                        </h4>
                                        <div className="grid grid-cols-4 gap-3">
                                            {selectedLocation.bloodStock.map((stock) => (
                                                <div
                                                    key={stock.type}
                                                    className="backdrop-blur-sm bg-white/5 rounded-lg p-3"
                                                >
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-sm font-medium">
                                                            {stock.type}
                                                        </span>
                                                        <span
                                                            className={clsx(
                                                                "text-sm font-bold",
                                                                getStockStatus(stock.units)
                                                            )}
                                                        >
                                                            {stock.units} units
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-400">
                                                        Updated:{" "}
                                                        {new Date(stock.lastUpdated).toLocaleTimeString()}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10 h-full flex items-center justify-center">
                                    <div className="text-center text-gray-400">
                                        <MapPin className="w-12 h-12 mx-auto mb-4" />
                                        <p className="text-lg">
                                            Select a location on the map to view details
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* All Locations List */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold mb-6">All Locations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredLocations.map((location) => (
                                <div
                                    key={location.id}
                                    className={clsx(
                                        "backdrop-blur-xl bg-white/5 rounded-xl p-4 border border-white/10",
                                        "transition-all duration-300 hover:scale-[1.02] hover:bg-white/10",
                                        "cursor-pointer",
                                        selectedLocation?.id === location.id &&
                                        "ring-2 ring-red-500"
                                    )}
                                    onClick={() => setSelectedLocation(location)}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <h4 className="text-lg font-semibold">{location.name}</h4>
                                        <span className="px-2 py-0.5 rounded-full text-xs bg-red-500/20 text-red-300">
                                            {location.type === "hospital" ? "Hospital" : "Blood Bank"}
                                        </span>
                                    </div>
                                    <div className="space-y-2 text-sm text-gray-300">
                                        <p className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {location.address}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            {location.phone}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Emergency Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="backdrop-blur-xl bg-red-500/10 rounded-2xl p-8 border border-red-500/20">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-4">Emergency Services</h2>
                                <p className="text-gray-300 mb-6">
                                    Need immediate medical assistance? Our emergency services are
                                    available 24/7. Don&apos;t hesitate to call.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <AlertTriangle className="w-6 h-6 text-red-400" />
                                        <div>
                                            <h3 className="font-semibold">Emergency Hotline</h3>
                                            <p className="text-gray-400">123 - Available 24/7</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="w-6 h-6 text-red-400" />
                                        <div>
                                            <h3 className="font-semibold">Ambulance Service</h3>
                                            <p className="text-gray-400">122 - Immediate Response</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call Emergency
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                                    onClick={scrollToMap}
                                >
                                    <MapPin className="w-5 h-5 mr-2" />
                                    Get Directions
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalPage;
