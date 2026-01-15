import VehicleGrid from "./components/VehicleGrid"


const Data = [
  {
    id: 1,
    image: "/civic.webp",
    title: "Honda Civic 2021",
    make: "Honda",
    model: "Civic",
    price: 8900000,
    year: 2021,
  },
   {
    id: 2,
    image: "/vitz.webp",
    title: "Toyota Vitz 2017",
    make: "Toyota",
    model: "Vitz",
    price: 1800000,
    year: 2017,
  },
  {
    id: 3,
    image: "/corolla.webp",
    title: "Toyota Corolla 2019",
    make: "Toyota",
    model: "Corolla",
    price: 3100000,
    year: 2019,
  },
  {
    id: 4,
    image: "/fit.webp",
    title: "Honda Fit 2020",
    make: "Honda",
    model: "Fit",
    price: 2500000,
    year: 2020,
  },
  {
    id: 5,
    image: "/santro.webp",
    title: "Hyundai Santro 2010",
    make: "Hyundai",
    model: "Santro",
    price: 1200000,
    year: 2010,
  },
  {
    id: 6,
    image: "/cultus.webp",
    title: "Suzuki Cultus 2021",
    make: "Suzuki",
    model: "Cultus",
    price: 2000000,
    year: 2021,
  },
  {
    id: 7,
    image: "/sonata.webp",
    title: "Hyundai Sonata 2024",
    make: "Hyundai",
    model: "Sonata",
    price: 8000000,
    year: 2024,
  },
  {
    id: 8,
    image: "/elantra.webp",
    title: "Hyundai Elantra 2025",
    make: "Hyundai",
    model: "Elantra",
    price: 7500000,
    year: 2025,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Header  */}
      <header className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-2">Vision Finance Task</h1>
            <p className="text-lg text-text-secondary">The Layout should be same as of Auto Trader, However, The Theme should be inspired from PakWheels</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <VehicleGrid vehicles={Data} />
      </main>
    </div>
  )
}
