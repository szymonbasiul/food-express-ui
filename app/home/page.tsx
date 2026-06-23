import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import Link from "next/link";

const categories = [
  { label: "Pizza", href: "/restaurant/menu-pizza", color: "from-red-400 to-orange-500", initial: "P" },
  { label: "Burgers", href: "/restaurant/menu-burgers", color: "from-yellow-400 to-amber-500", initial: "B" },
  { label: "Sushi", href: "/restaurant/menu-sushi", color: "from-blue-400 to-indigo-500", initial: "S" },
  { label: "Mexican", href: "/restaurants/cuisine-filter", color: "from-green-400 to-teal-500", initial: "M" },
  { label: "Asian", href: "/restaurants/cuisine-filter", color: "from-purple-400 to-violet-500", initial: "A" },
  { label: "Healthy", href: "/restaurants/cuisine-filter", color: "from-teal-400 to-green-500", initial: "H" },
  { label: "Desserts", href: "/restaurant/menu-desserts", color: "from-pink-400 to-rose-500", initial: "D" },
  { label: "Chicken", href: "/restaurants/cuisine-filter", color: "from-amber-400 to-orange-400", initial: "C" },
];

const restaurants = [
  { name: "Mario's Pizza Palace", cuisine: "Italian", rating: 4.8, reviewCount: 1240, deliveryTime: "20-30 min", deliveryFee: "$2.99", tags: ["Pizza", "Pasta", "Italian"], imageColor: "from-red-400 to-orange-500", featured: true, priceRange: "$$" },
  { name: "Burger Republic", cuisine: "American", rating: 4.6, reviewCount: 890, deliveryTime: "15-25 min", deliveryFee: "Free", tags: ["Burgers", "Fries", "Shakes"], imageColor: "from-yellow-400 to-amber-500", priceRange: "$" },
  { name: "Tokyo Garden", cuisine: "Japanese", rating: 4.9, reviewCount: 2100, deliveryTime: "30-45 min", deliveryFee: "$1.99", tags: ["Sushi", "Ramen", "Japanese"], imageColor: "from-blue-400 to-indigo-500", featured: true, priceRange: "$$$" },
  { name: "Spice Route", cuisine: "Indian", rating: 4.7, reviewCount: 654, deliveryTime: "25-35 min", deliveryFee: "$2.49", tags: ["Curry", "Naan", "Indian"], imageColor: "from-yellow-500 to-orange-600", priceRange: "$$" },
  { name: "Verde Kitchen", cuisine: "Mediterranean", rating: 4.5, reviewCount: 432, deliveryTime: "20-30 min", deliveryFee: "Free", tags: ["Salads", "Healthy", "Wraps"], imageColor: "from-green-400 to-emerald-500", priceRange: "$$" },
  { name: "Dragon Palace", cuisine: "Chinese", rating: 4.4, reviewCount: 780, deliveryTime: "25-40 min", deliveryFee: "$1.49", tags: ["Dim Sum", "Noodles", "Chinese"], imageColor: "from-red-500 to-pink-600", priceRange: "$" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="home" />

      {/* Hero */}
      <div className="bg-linear-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 flex items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              Free delivery on your first order!
            </div>
            <h1 className="text-5xl font-black leading-tight">
              Hungry? We&apos;ve got<br />you covered.
            </h1>
            <p className="text-white/80 mt-4 text-lg">
              Order from 500+ restaurants in Warsaw. Delivered in under 30 minutes.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/restaurants" className="px-6 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition">
                Order Now
              </Link>
              <Link href="/home-search" className="px-6 py-3 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition">
                Search Dishes
              </Link>
            </div>
            <div className="mt-8 flex gap-8 text-sm">
              {[["500+", "Restaurants"], ["30min", "Avg. delivery"], ["4.8", "App rating"]].map(([val, label]) => (
                <div key={label}>
                  <p className="text-2xl font-black">{val}</p>
                  <p className="text-white/70">{label}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Hero visual — FE logo */}
          <div className="hidden lg:flex w-48 h-48 shrink-0 bg-white/15 rounded-3xl items-center justify-center">
            <div className="w-28 h-28 bg-white/20 rounded-2xl flex items-center justify-center">
              <span className="text-white font-black text-4xl tracking-tight">FE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Categories */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-black text-gray-900">What are you craving?</h2>
            <Link href="/restaurants" className="text-sm text-orange-500 font-semibold hover:text-orange-600 flex items-center gap-1">
              View all
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="rounded-2xl p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer bg-white border border-gray-100 shadow-sm"
              >
                <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${cat.color} flex items-center justify-center`}>
                  <span className="text-white font-black text-sm">{cat.initial}</span>
                </div>
                <span className="text-xs font-semibold text-gray-700">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Promo banner */}
        <div className="mb-10 bg-linear-to-r from-orange-500 to-red-500 rounded-3xl p-6 flex items-center justify-between text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Limited time offer</p>
            <p className="text-2xl font-black mt-1">Get 20% off with code FOOD20</p>
            <p className="text-sm opacity-80 mt-1">Valid on orders above $25 · Expires tonight</p>
            <Link href="/cart/items" className="inline-block mt-4 px-5 py-2.5 bg-white text-orange-600 text-sm font-bold rounded-xl hover:bg-orange-50 transition">
              Use Code Now
            </Link>
          </div>
          <div className="hidden md:flex w-24 h-24 bg-white/20 rounded-2xl items-center justify-center shrink-0">
            <span className="text-white font-black text-3xl">FE</span>
          </div>
        </div>

        {/* Featured restaurants */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-black text-gray-900">Featured Restaurants</h2>
            <Link href="/restaurants" className="text-sm text-orange-500 font-semibold hover:text-orange-600 flex items-center gap-1">
              See all
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {restaurants.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
