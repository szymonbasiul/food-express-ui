import MobileBottomNav from "../../components/MobileBottomNav";
import Link from "next/link";

const StarSVG = () => (
  <svg className="w-3.5 h-3.5 text-yellow-400 fill-current shrink-0" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const restaurants = [
  { name: "Mario's Pizza Palace", tag: "Italian", time: "20-30 min", fee: "Free", rating: "4.8", color: "from-red-400 to-orange-500" },
  { name: "Burger Republic", tag: "American", time: "15-25 min", fee: "$1.99", rating: "4.6", color: "from-yellow-400 to-amber-500" },
  { name: "Tokyo Garden", tag: "Japanese", time: "30-45 min", fee: "$2.99", rating: "4.9", color: "from-blue-400 to-indigo-500" },
  { name: "Spice Route", tag: "Indian", time: "25-35 min", fee: "$1.99", rating: "4.7", color: "from-yellow-500 to-orange-600" },
  { name: "Verde Kitchen", tag: "Mediterranean", time: "20-30 min", fee: "Free", rating: "4.5", color: "from-green-400 to-emerald-500" },
  { name: "Dragon Palace", tag: "Chinese", time: "25-40 min", fee: "$1.49", rating: "4.4", color: "from-red-500 to-pink-600" },
];

export default function MobileRestaurantListPage() {
  return (
    <div className="w-96 mx-auto min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-black text-gray-900">Restaurants</h1>
          <Link href="/mobile/filters" className="flex items-center gap-1.5 text-sm font-semibold text-orange-500 bg-orange-50 px-3 py-1.5 rounded-xl">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </Link>
        </div>
        {/* Sort tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {["All", "Top Rated", "Fastest", "Free delivery", "New"].map((tab, i) => (
            <button
              key={tab}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition
                ${i === 0 ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-600"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4">
        <p className="text-xs text-gray-500 mb-3">{restaurants.length} restaurants near you</p>
        <div className="flex flex-col gap-3">
          {restaurants.map((r) => (
            <Link key={r.name} href="/mobile/restaurant-details" className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition">
              {/* Image — gradient with FE logo */}
              <div className={`h-36 bg-linear-to-br ${r.color} flex items-center justify-center relative`}>
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">FE</span>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-0.5 flex items-center gap-1 text-xs font-bold">
                  <StarSVG />
                  {r.rating}
                </div>
              </div>
              <div className="p-3">
                <p className="font-bold text-gray-900">{r.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{r.tag}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {r.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" />
                    </svg>
                    {r.fee}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <MobileBottomNav active="home" cartCount={3} />
    </div>
  );
}
