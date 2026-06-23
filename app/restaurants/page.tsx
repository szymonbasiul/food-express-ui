import Header from "../components/Header";
import FilterPanel from "../components/FilterPanel";
import RestaurantCard from "../components/RestaurantCard";
import Link from "next/link";

const restaurants = [
  { name: "Mario's Pizza Palace", cuisine: "Italian", rating: 4.8, reviewCount: 1240, deliveryTime: "20-30 min", deliveryFee: "$2.99", tags: ["Pizza", "Pasta", "Italian"], imageColor: "from-red-400 to-orange-500", featured: true, priceRange: "$$" },
  { name: "Burger Republic", cuisine: "American", rating: 4.6, reviewCount: 890, deliveryTime: "15-25 min", deliveryFee: "Free", tags: ["Burgers", "Fries", "Shakes"], imageColor: "from-yellow-400 to-amber-500", priceRange: "$" },
  { name: "Tokyo Garden", cuisine: "Japanese", rating: 4.9, reviewCount: 2100, deliveryTime: "30-45 min", deliveryFee: "$1.99", tags: ["Sushi", "Ramen", "Japanese"], imageColor: "from-blue-400 to-indigo-500", featured: true, priceRange: "$$$" },
  { name: "Spice Route", cuisine: "Indian", rating: 4.7, reviewCount: 654, deliveryTime: "25-35 min", deliveryFee: "$2.49", tags: ["Curry", "Naan", "Indian"], imageColor: "from-yellow-500 to-orange-600", priceRange: "$$" },
  { name: "Verde Kitchen", cuisine: "Mediterranean", rating: 4.5, reviewCount: 432, deliveryTime: "20-30 min", deliveryFee: "Free", tags: ["Salads", "Healthy", "Wraps"], imageColor: "from-green-400 to-emerald-500", priceRange: "$$" },
  { name: "Dragon Palace", cuisine: "Chinese", rating: 4.4, reviewCount: 780, deliveryTime: "25-40 min", deliveryFee: "$1.49", tags: ["Dim Sum", "Noodles", "Chinese"], imageColor: "from-red-500 to-pink-600", priceRange: "$" },
  { name: "El Rancho", cuisine: "Mexican", rating: 4.6, reviewCount: 920, deliveryTime: "20-30 min", deliveryFee: "$1.99", tags: ["Tacos", "Burritos", "Mexican"], imageColor: "from-orange-400 to-yellow-500", priceRange: "$" },
  { name: "The Grill House", cuisine: "BBQ", rating: 4.7, reviewCount: 1050, deliveryTime: "30-45 min", deliveryFee: "$3.49", tags: ["BBQ", "Steaks", "Ribs"], imageColor: "from-red-600 to-orange-700", priceRange: "$$$" },
  { name: "Pasta Bella", cuisine: "Italian", rating: 4.3, reviewCount: 340, deliveryTime: "25-35 min", deliveryFee: "$2.29", tags: ["Pasta", "Italian", "Wine"], imageColor: "from-amber-400 to-orange-500", priceRange: "$$" },
];

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="restaurants" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/home" className="hover:text-gray-700">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Restaurants</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-black text-gray-900">All Restaurants</h1>
            <p className="text-gray-500 text-sm mt-1">Showing 9 of 142 restaurants near you</p>
          </div>
          <div className="flex gap-2">
            <Link href="/restaurants/cuisine-filter" className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-xl bg-white hover:bg-gray-50 text-gray-700 transition">
              Cuisine
            </Link>
            <Link href="/restaurants/price-filter" className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-xl bg-white hover:bg-gray-50 text-gray-700 transition">
              Price
            </Link>
            <Link href="/restaurants/rating-filter" className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-xl bg-white hover:bg-gray-50 text-gray-700 transition">
              Rating
            </Link>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filter sidebar */}
          <div className="w-60 shrink-0">
            <FilterPanel />
          </div>

          {/* Restaurant grid */}
          <div className="flex-1">
            {/* Active filters */}
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              <span className="text-sm text-gray-500">Active filters:</span>
              {["Open now", "Free delivery"].map((f) => (
                <span key={f} className="flex items-center gap-1 bg-orange-100 text-orange-700 text-xs px-2.5 py-1 rounded-full font-medium">
                  {f}
                  <button className="hover:text-orange-900">✕</button>
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {restaurants.map((r) => (
                <RestaurantCard key={r.name} {...r} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <button className="w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center justify-center">←</button>
              {[1, 2, 3, "...", 16].map((p, i) => (
                <button
                  key={i}
                  className={`w-9 h-9 rounded-lg text-sm font-medium transition ${p === 1 ? "bg-orange-500 text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                >
                  {p}
                </button>
              ))}
              <button className="w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center justify-center">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
