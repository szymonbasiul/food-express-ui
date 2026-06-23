import Header from "../../components/Header";
import FilterPanel from "../../components/FilterPanel";
import RestaurantCard from "../../components/RestaurantCard";
import Link from "next/link";

const restaurants = [
  { name: "Mario's Pizza Palace", cuisine: "Italian", rating: 4.8, reviewCount: 1240, deliveryTime: "20-30 min", deliveryFee: "$2.99", tags: ["Pizza", "Pasta"], imageColor: "from-red-400 to-orange-500", featured: true, priceRange: "$$" },
  { name: "Pasta Bella", cuisine: "Italian", rating: 4.3, reviewCount: 340, deliveryTime: "25-35 min", deliveryFee: "$2.29", tags: ["Pasta", "Wine"], imageColor: "from-amber-400 to-orange-500", priceRange: "$$" },
  { name: "Trattoria Roma", cuisine: "Italian", rating: 4.6, reviewCount: 560, deliveryTime: "30-40 min", deliveryFee: "$1.99", tags: ["Risotto", "Tiramisu"], imageColor: "from-orange-400 to-red-400", priceRange: "$$$" },
];

const cuisines = [
  { label: "Italian", count: 24 },
  { label: "American", count: 18 },
  { label: "Japanese", count: 12 },
  { label: "Mexican", count: 9 },
  { label: "Indian", count: 15 },
  { label: "Thai", count: 7 },
  { label: "Chinese", count: 20 },
  { label: "Mediterranean", count: 11 },
];

export default function CuisineFilterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="restaurants" />

      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/home">Home</Link>
          <span>/</span>
          <Link href="/restaurants">Restaurants</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Italian Cuisine</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-10">
        {/* Cuisine header */}
        <div className="mb-6 bg-linear-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-white flex items-center justify-between">
          <div>
            <p className="text-sm opacity-80 font-medium">Filtered by</p>
            <h1 className="text-2xl font-black mt-0.5">Italian Cuisine</h1>
            <p className="text-sm opacity-80 mt-1">24 restaurants available</p>
          </div>
          <button className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-white/30 transition">
            Clear filter
          </button>
        </div>

        {/* Cuisine chips */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {cuisines.map((c) => (
            <button
              key={c.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition
                ${c.label === "Italian" ? "bg-orange-500 text-white" : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`}
            >
              {c.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${c.label === "Italian" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                {c.count}
              </span>
            </button>
          ))}
        </div>

        <div className="flex gap-6">
          <div className="w-60 shrink-0">
            <FilterPanel activeCuisine="Italian" />
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {restaurants.map((r) => <RestaurantCard key={r.name} {...r} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
