"use client"

import { useSearchParams, useRouter } from "next/navigation"

export default function FilterBar() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const keyword = searchParams.get("keyword") || ""
  const make = searchParams.get("make") || ""
  const model = searchParams.get("model") || ""
  const minPrice = searchParams.get("minPrice") || ""
  const maxPrice = searchParams.get("maxPrice") || ""

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(name, value)
    } else {
      params.delete(name)
    }
    router.replace(`?${params.toString()}`)
  }

  const handleReset = () => {
    router.replace("/")
  }

  return (
    <div className="bg-background border border-border rounded-lg p-6 shadow-sm mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Find what Suits you Best!</h2>
        <button onClick={handleReset} className="text-sm font-medium text-accent hover:text-primary transition-colors">
          Reset Filters
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <input
          type="text"
          name="keyword"
          placeholder="Search keyword"
          value={keyword}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
        <input
          type="text"
          name="make"
          placeholder="Make (e.g, Honda)"
          value={make}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
        <input
          type="text"
          name="model"
          placeholder="Model (e.g, Civic)"
          value={model}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>
    </div>
  )
}
