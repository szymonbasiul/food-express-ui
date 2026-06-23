import MobileBottomNav from "../../components/MobileBottomNav";
import Link from "next/link";

const categories = [
  { label: "Pizza", href: "/mobile/menu-pizza", color: "from-red-400 to-orange-500", initial: "P" },
  { label: "Burgers", href: "/mobile/restaurant-list", color: "from-yellow-400 to-amber-500", initial: "B" },
  { label: "Sushi", href: "/mobile/restaurant-list", color: "from-blue-400 to-indigo-500", initial: "S" },
  { label: "Mexican", href: "/mobile/restaurant-list", color: "from-green-400 to-teal-500", initial: "M" },
  { label: "Healthy", href: "/mobile/restaurant-list", color: "from-teal-400 to-green-500", initial: "H" },
  { label: "Desserts", href: "/mobile/restaurant-list", color: "from-pink-400 to-rose-500", initial: "D" },
];

const restaurants = [
  { name: "Mario's Pizza Palace", tag: "Italian · 20-30 min", rating: "4.8", imageColor: "from-red-400 to-orange-500", href: "/mobile/restaurant-details" },
  { name: "Burger Republic", tag: "American · 15-25 min", rating: "4.6", imageColor: "from-yellow-400 to-amber-500", href: "/mobile/restaurant-details" },
  { name: "Tokyo Garden", tag: "Japanese · 30-45 min", rating: "4.9", imageColor: "from-blue-400 to-indigo-500", href: "/mobile/restaurant-details" },
];

const StarSVG = () => (
  <svg className="w-3.5 h-3.5 text-yellow-400 fill-current shrink-0" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function MobileHomePage() {
  return (
    <div className="w-96 mx-auto min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-linear-to-br from-orange-500 to-red-600 px-5 pt-12 pb-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm opacity-80">Deliver to</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <svg className="w-4 h-4 opacity-90" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">Warsaw, PL</span>
              <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/mobile/cart" className="relative p-2 bg-white/20 rounded-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
            </Link>
            <Link href="/mobile/profile" className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">JD</Link>
          </div>
        </div>

        <h1 className="text-2xl font-black mt-2">Good evening, John!</h1>
        <p className="text-sm opacity-80 mt-1">What are you craving today?</p>

        {/* Search bar */}
        <Link href="/mobile/search" className="flex items-center gap-3 mt-4 bg-white rounded-2xl px-4 py-3 shadow-sm">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-gray-400 text-sm">Search restaurants or dishes...</span>
        </Link>
      </div>

      <div className="px-5 py-5">
        {/* Promo banner */}
        <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-2xl p-4 text-white mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs opacity-80 font-medium">Limited offer</p>
            <p className="font-black text-base mt-0.5">20% off with FOOD20</p>
            <p className="text-xs opacity-70 mt-0.5">Valid on $25+ orders · Today only</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
            <span className="text-white font-black text-lg">FE</span>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <p className="font-bold text-gray-900">Categories</p>
            <Link href="/mobile/restaurant-list" className="text-xs text-orange-500 font-semibold">See all</Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <Link key={cat.label} href={cat.href} className="flex flex-col items-center gap-1.5 shrink-0">
                <div className={`w-14 h-14 bg-linear-to-br ${cat.color} rounded-2xl shadow-sm flex items-center justify-center`}>
                  <span className="text-white font-black text-lg">{cat.initial}</span>
                </div>
                <span className="text-xs font-medium text-gray-700">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured restaurants */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="font-bold text-gray-900">Top Restaurants</p>
            <Link href="/mobile/restaurant-list" className="text-xs text-orange-500 font-semibold">See all</Link>
          </div>
          <div className="flex flex-col gap-3">
            {restaurants.map((r) => (
              <Link key={r.name} href={r.href} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex hover:shadow-md transition">
                <div className={`w-24 bg-linear-to-br ${r.imageColor} flex items-center justify-center shrink-0`}>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white font-black text-sm">FE</span>
                  </div>
                </div>
                <div className="flex-1 p-3">
                  <p className="font-bold text-sm text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{r.tag}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <StarSVG />
                    <span className="text-xs font-bold text-gray-800">{r.rating}</span>
                    <span className="text-xs text-gray-400 ml-1">Free delivery</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <MobileBottomNav active="home" cartCount={3} />
    </div>
  );
}
