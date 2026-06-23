import MobileBottomNav from "../../components/MobileBottomNav";
import Link from "next/link";

const recentSearches = ["Pizza Margherita", "Sushi near me", "Burger King", "Thai food"];
const popular = [
  { emoji: "", label: "Pizza" },
  { emoji: "", label: "Burgers" },
  { emoji: "", label: "Sushi" },
  { emoji: "", label: "Tacos" },
  { emoji: "", label: "Ramen" },
  { emoji: "", label: "Salads" },
  { emoji: "", label: "Desserts" },
  { emoji: "", label: "Drinks" },
];

const results = [
  { emoji: "", name: "Mario's Pizza Palace", tag: "Italian · 20-30 min · 4.8", href: "/mobile/restaurant-details" },
  { emoji: "", name: "Pizza Roma", tag: "Italian · 25-35 min · 4.5", href: "/mobile/restaurant-details" },
  { emoji: "", name: "Napoletana Express", tag: "Italian · 30-45 min · 4.7", href: "/mobile/restaurant-details" },
];

export default function MobileSearchPage() {
  return (
    <div className="w-96 mx-auto min-h-screen bg-gray-50 pb-24">
      {/* Search header */}
      <div className="bg-white px-4 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Link href="/mobile/home" className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              defaultValue="pizza"
              autoFocus
              className="w-full pl-9 pr-10 py-2.5 bg-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Search restaurants or dishes..."
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">âś•</button>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Recent searches */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-bold text-gray-900">Recent searches</p>
            <button className="text-xs text-orange-500 font-medium">Clear all</button>
          </div>
          <div className="flex flex-col gap-2">
            {recentSearches.map((s) => (
              <button key={s} className="flex items-center gap-3 py-2 text-sm text-gray-700 hover:text-orange-600 transition">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Search results */}
        <div className="mb-5">
          <p className="text-sm font-bold text-gray-900 mb-3">
            Results for <span className="text-orange-500">&quot;pizza&quot;</span>
          </p>
          <div className="flex flex-col gap-3">
            {results.map((r) => (
              <Link key={r.name} href={r.href} className="bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 p-3 hover:shadow-md transition">
                <div className="w-14 h-14 bg-linear-to-br from-red-100 to-orange-200 rounded-xl flex items-center justify-center text-3xl shrink-0">
                  {r.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{r.tag}</p>
                </div>
                <svg className="w-5 h-5 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular categories */}
        <div>
          <p className="text-sm font-bold text-gray-900 mb-3">Popular categories</p>
          <div className="grid grid-cols-4 gap-2">
            {popular.map((cat) => (
              <Link key={cat.label} href="/mobile/restaurant-list" className="bg-white rounded-2xl p-3 flex flex-col items-center gap-1 shadow-sm border border-gray-100 hover:bg-orange-50 transition">
                <span className="text-2xl">{cat.emoji}</span>
                <span className="text-xs font-medium text-gray-700">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <MobileBottomNav active="search" cartCount={3} />
    </div>
  );
}
