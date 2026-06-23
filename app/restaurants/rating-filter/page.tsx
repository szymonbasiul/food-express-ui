import Header from "../../components/Header";
import FilterPanel from "../../components/FilterPanel";
import RestaurantCard from "../../components/RestaurantCard";
import Link from "next/link";

const restaurants = [
  { name: "Tokyo Garden", cuisine: "Japanese", rating: 4.9, reviewCount: 2100, deliveryTime: "30-45 min", deliveryFee: "$1.99", tags: ["Sushi", "Ramen"], imageColor: "from-blue-400 to-indigo-500", featured: true, priceRange: "$$$" },
  { name: "Mario's Pizza Palace", cuisine: "Italian", rating: 4.8, reviewCount: 1240, deliveryTime: "20-30 min", deliveryFee: "$2.99", tags: ["Pizza", "Pasta"], imageColor: "from-red-400 to-orange-500", priceRange: "$$" },
  { name: "Spice Route", cuisine: "Indian", rating: 4.7, reviewCount: 654, deliveryTime: "25-35 min", deliveryFee: "$2.49", tags: ["Curry", "Naan"], imageColor: "from-yellow-500 to-orange-600", priceRange: "$$" },
];

export default function RatingFilterPage() {
  const ratingOptions = [
    { min: 4.5, label: "4.5 & above", stars: "★★★★★", count: 32 },
    { min: 4.0, label: "4.0 & above", stars: "★★★★☆", count: 78, active: true },
    { min: 3.5, label: "3.5 & above", stars: "★★★½☆", count: 124 },
    { min: 3.0, label: "3.0 & above", stars: "★★★☆☆", count: 156 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="restaurants" />

      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/home">Home</Link>
          <span>/</span>
          <Link href="/restaurants">Restaurants</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Top Rated (4.5+)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-900">Filter by Rating</h1>
          <p className="text-gray-500 text-sm mt-1">Only showing the best-rated restaurants</p>
        </div>

        {/* Rating options */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {ratingOptions.map((opt) => (
            <button
              key={opt.min}
              className={`p-4 rounded-2xl border-2 text-left transition
                ${opt.active ? "border-orange-500 bg-orange-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
            >
              <p className="text-yellow-400 text-lg">{opt.stars}</p>
              <p className={`font-bold mt-1 ${opt.active ? "text-orange-600" : "text-gray-800"}`}>{opt.label}</p>
              <p className="text-xs text-gray-400 mt-1">{opt.count} restaurants</p>
            </button>
          ))}
        </div>

        <div className="flex gap-6">
          <div className="w-60 shrink-0">
            <FilterPanel activeRating="4.0+" />
          </div>
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">
                <span className="font-bold text-gray-900">32 top-rated</span> restaurants with 4.5+ stars
              </p>
              <select className="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:border-orange-400">
                <option>Sort: Highest rated</option>
                <option>Sort: Most reviewed</option>
                <option>Sort: Delivery time</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {restaurants.map((r) => <RestaurantCard key={r.name} {...r} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
