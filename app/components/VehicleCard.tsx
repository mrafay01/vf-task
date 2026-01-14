"use client";

import Image from "next/image";

interface Vehicle {
  id: string | number;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image?: string;
}

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 group cursor-pointer">
      <div className="relative h-48 overflow-hidden bg-surface">
        <Image
          src={vehicle.image || "/placeholder.svg"}
          alt={vehicle.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-text-secondary">From</p>
            <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
              PKR {vehicle.price.toLocaleString()}
            </h3>
            <p className="text-sm text-text-secondary mb-2">Total price</p>
          </div>

          <div className="space-y-1 text-right">
            <p className="text-sm text-text-secondary">
              <span className="font-medium">Make:</span> {vehicle.make}
            </p>
            <p className="text-sm text-text-secondary">
              <span className="font-medium">Model:</span> {vehicle.model}
            </p>
            <p className="text-sm text-text-secondary">
              <span className="font-medium">Year:</span> {vehicle.year}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <h3 className="text-xl font-bold text-primary">
            {vehicle.title}
            <p className="text-sm text-text-secondary">1500 cc</p>
          </h3>
        </div>
      </div>
    </div>
  );
}
