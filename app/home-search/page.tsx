import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import FoodCard from "../components/FoodCard";

const searchResults = [
  { name: "Mario's Pizza Palace", cuisine: "Italian", rating: 4.8, reviewCount: 1240, deliveryTime: "20-30 min", deliveryFee: "$2.99", tags: ["Pizza", "Pasta"], imageColor: "from-red-400 to-orange-500", priceRange: "$$" },
  { name: "Pizza Roma", cuisine: "Italian", rating: 4.5, reviewCount: 560, deliveryTime: "25-35 min", deliveryFee: "$1.99", tags: ["Pizza", "Italian"], imageColor: "from-orange-400 to-amber-500", priceRange: "$$" },
];

const dishResults = [
  { name: "Margherita Pizza", description: "Fresh tomato sauce, mozzarella, basil", price: 14.99, calories: 620, imageEmoji: "🍕", imageColor: "from-red-100 to-orange-100" },
  { name: "Pepperoni Pizza", description: "Tomato, mozzarella, spicy pepperoni", price: 16.99, calories: 740, imageEmoji: "🍕", imageColor: "from-orange-100 to-red-100", popular: true },
  { name: "BBQ Chicken Pizza", description: "BBQ sauce, chicken, red onion, cheddar", price: 17.99, calories: 810, imageEmoji: "🍕", imageColor: "from-amber-100 to-yellow-100" },
  { name: "Quattro Formaggi", description: "Four cheese blend, white sauce", price: 15.99, calories: 680, imageEmoji: "🍕", imageColor: "from-yellow-100 to-amber-100" },
];

const recentSearches = ["Pizza", "Sushi near me", "Burger King", "Thai food"];
const popularSearches = ["Pizza Margherita", "Ramen", "Tacos", "Pad Thai", "Fish & Chips", "Cheesecake"];

export default function HomeSearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchValue="pizza" activePage="home" />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar / filters */}
          <div className="col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <p className="font-bold text-gray-900 mb-4">Filters</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Cuisine", opts: ["Italian", "American", "Japanese", "Mexican"] },
                  { label: "Price range", opts: ["$", "$$", "$$$"] },
                ].map((section) => (
                  <div key={section.label}>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{section.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {section.opts.map((opt, i) => (
                        <button
                          key={opt}
                          className={`px-3 py-1 rounded-lg text-xs font-medium ${i === 0 ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-600"}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular searches */}
            <div className="mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <p className="font-bold text-gray-900 mb-3">Trending</p>
              <div className="flex flex-col gap-2">
                {popularSearches.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-orange-500 transition">
                    <span className="text-orange-400">🔥</span>{s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main results */}
          <div className="col-span-9">
            {/* Search bar */}
            <div className="relative mb-6">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                defaultValue="pizza"
                className="w-full pl-12 pr-12 py-3.5 text-base bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">✕</button>
            </div>

            {/* Recent searches */}
            <div className="mb-5 flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-500">Recent:</span>
              {recentSearches.map((s) => (
                <button key={s} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-orange-100 hover:text-orange-600 transition">
                  {s}
                </button>
              ))}
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-500 mb-5">
              Showing <span className="font-bold text-gray-900">24 results</span> for &quot;pizza&quot;
            </p>

            {/* Tabs */}
            <div className="flex gap-1 mb-6 bg-gray-100 rounded-xl p-1 w-fit">
              {["All", "Restaurants", "Dishes"].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${i === 0 ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Restaurant results */}
            <h3 className="font-bold text-gray-900 mb-3">Restaurants</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {searchResults.map((r) => <RestaurantCard key={r.name} {...r} />)}
            </div>

            {/* Dish results */}
            <h3 className="font-bold text-gray-900 mb-3">Dishes</h3>
            <div className="grid grid-cols-4 gap-4">
              {dishResults.map((d) => <FoodCard key={d.name} {...d} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
