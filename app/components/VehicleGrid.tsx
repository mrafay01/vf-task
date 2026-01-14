"use client"

import { useSearchParams } from "next/navigation"
import { useMemo, useRef } from "react"
import FilterBar from "./FilterBar"
import VehicleCard from "./VehicleCard"

interface Vehicle {
  id: string | number
  title: string
  make: string
  model: string
  year: number
  price: number
  image?: string
}

export default function VehicleGrid({ vehicles }: { vehicles: Vehicle[] }) {
  const searchParams = useSearchParams()
  const scrollRef = useRef<HTMLDivElement>(null)

  const filters = useMemo(
    () => ({
      keyword: searchParams.get("keyword") || "",
      make: searchParams.get("make") || "",
      model: searchParams.get("model") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
    }),
    [searchParams],
  )

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' })
  }

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle: Vehicle) => {
      const matchesKeyword =
        filters.keyword === "" || vehicle.title.toLowerCase().includes(filters.keyword.toLowerCase())
      const matchesMake = filters.make === "" || vehicle.make.toLowerCase().includes(filters.make.toLowerCase())
      const matchesModel = filters.model === "" || vehicle.model.toLowerCase().includes(filters.model.toLowerCase())
      const matchesPrice =
        (filters.minPrice === "" || vehicle.price >= Number.parseInt(filters.minPrice)) &&
        (filters.maxPrice === "" || vehicle.price <= Number.parseInt(filters.maxPrice))
      return matchesKeyword && matchesMake && matchesModel && matchesPrice
    })
  }, [vehicles, filters])

  return (
    <div className="space-y-8">
      <FilterBar />

      {filteredVehicles.length > 0 && (
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute w-10 left-0 top-1/2 -translate-y-1/2 z-10 bg-background border border-border rounded-full p-2 shadow-md hover:bg-surface transition-colors"
            aria-label="Scroll left"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredVehicles.map((vehicle: Vehicle) => (
              <div key={vehicle.id} className="shrink-0 w-80">
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute w-10 right-0 top-1/2 -translate-y-1/2 z-10 bg-background border border-border rounded-full p-2 shadow-md hover:bg-surface transition-colors"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      )}

      {filteredVehicles.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-lg text-text-secondary">No vehicles match your filters.</p>
        </div>
      )}

      {filteredVehicles.length > 0 && (
        <div className="text-center pt-8">
          <p className="text-sm text-text-secondary">
            Showing <span className="font-bold text-foreground">{filteredVehicles.length}</span> vehicle
            {filteredVehicles.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}
    </div>
  )
}
