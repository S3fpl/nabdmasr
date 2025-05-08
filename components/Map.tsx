import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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
    bloodStock: {
        type: string;
        units: number;
        lastUpdated: string;
    }[];
}

interface MapProps {
    locations: Location[];
    selectedLocation: Location | null;
    onLocationSelect: (location: Location) => void;
}

// Custom marker icon
const createCustomIcon = (type: string) => {
    return L.divIcon({
        className: "custom-marker",
        html: `
            <div style="
                background-color: ${type === "hospital" ? "#ef4444" : "#dc2626"};
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                border: 2px solid white;
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            ">
                ${type === "hospital" ? "H" : "B"}
            </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });
};

const Map: React.FC<MapProps> = ({ locations, selectedLocation, onLocationSelect }) => {
    return (
        <MapContainer
            center={[31.2157, 29.9553]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
                <Marker
                    key={location.id}
                    position={location.coordinates}
                    icon={createCustomIcon(location.type)}
                    eventHandlers={{
                        click: () => onLocationSelect(location),
                    }}
                >
                    <Popup>
                        <div className="text-black">
                            <h3 className="font-bold">{location.name}</h3>
                            <p>{location.address}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map; 