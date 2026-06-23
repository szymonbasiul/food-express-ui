import Header from "../../components/Header";
import FilterPanel from "../../components/FilterPanel";
import RestaurantCard from "../../components/RestaurantCard";
import Link from "next/link";

const restaurants = [
  { name: "Burger Republic", cuisine: "American", rating: 4.6, reviewCount: 890, deliveryTime: "15-25 min", deliveryFee: "Free", tags: ["Burgers", "Fries"], imageColor: "from-yellow-400 to-amber-500", priceRange: "$" },
  { name: "Dragon Palace", cuisine: "Chinese", rating: 4.4, reviewCount: 780, deliveryTime: "25-40 min", deliveryFee: "$1.49", tags: ["Noodles", "Dim Sum"], imageColor: "from-red-500 to-pink-600", priceRange: "$" },
  { name: "El Rancho", cuisine: "Mexican", rating: 4.6, reviewCount: 920, deliveryTime: "20-30 min", deliveryFee: "$1.99", tags: ["Tacos", "Burritos"], imageColor: "from-orange-400 to-yellow-500", priceRange: "$" },
];

export default function PriceFilterPage() {
  const priceRanges = [
    { label: "$", desc: "Under $10", count: 42, active: true },
    { label: "$$", desc: "$10–$25", count: 58, active: false },
    { label: "$$$", desc: "$25–$50", count: 28, active: false },
    { label: "$$$$", desc: "Over $50", count: 14, active: false },
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
          <span className="text-gray-900 font-medium">Budget-friendly ($)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-900">Filter by Price Range</h1>
          <p className="text-gray-500 text-sm mt-1">Find restaurants that fit your budget</p>
        </div>

        {/* Price range cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              className={`p-4 rounded-2xl border-2 text-left transition
                ${range.active ? "border-orange-500 bg-orange-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
            >
              <p className={`text-2xl font-black ${range.active ? "text-orange-500" : "text-gray-700"}`}>
                {range.label}
              </p>
              <p className="text-sm text-gray-500 mt-1">{range.desc}</p>
              <p className="text-xs font-semibold text-gray-400 mt-2">{range.count} restaurants</p>
            </button>
          ))}
        </div>

        <div className="flex gap-6">
          <div className="w-60 shrink-0">
            <FilterPanel activePrice="$" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-bold text-gray-900">42 budget-friendly</span> restaurants near you
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {restaurants.map((r) => <RestaurantCard key={r.name} {...r} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
