import Link from "next/link";

export default function MobileFiltersPage() {
  const cuisines = ["All", "Italian", "American", "Japanese", "Mexican", "Indian", "Chinese", "Thai"];
  const priceRanges = ["$", "$$", "$$$", "$$$$"];
  const ratings = ["4.5+", "4.0+", "3.5+"];

  return (
    <div className="w-96 mx-auto min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4 border-b border-gray-100">
        <Link href="/mobile/restaurant-list" className="text-gray-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Link>
        <h1 className="text-base font-black text-gray-900">Filters</h1>
        <button className="text-sm text-orange-500 font-semibold">Reset</button>
      </div>

      {/* Filter content */}
      <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-6">
        {/* Sort */}
        <div>
          <p className="text-sm font-bold text-gray-900 mb-3">Sort by</p>
          <div className="flex flex-col gap-2">
            {["Relevance", "Rating: Highest", "Delivery time", "Price: Low to High"].map((opt, i) => (
              <label key={opt} className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer ${i === 0 ? "border-orange-400 bg-orange-50" : "border-gray-100"}`}>
                <input type="radio" name="sort" defaultChecked={i === 0} className="accent-orange-500" />
                <span className="text-sm font-medium text-gray-800">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Cuisine */}
        <div>
          <p className="text-sm font-bold text-gray-900 mb-3">Cuisine</p>
          <div className="flex flex-wrap gap-2">
            {cuisines.map((c, i) => (
              <button
                key={c}
                className={`px-4 py-2 rounded-full text-sm font-medium transition border
                  ${i === 1 ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 text-gray-700"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <p className="text-sm font-bold text-gray-900 mb-3">Price range</p>
          <div className="flex gap-2">
            {priceRanges.map((p, i) => (
              <button
                key={p}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-2 transition
                  ${i === 1 ? "border-orange-500 bg-orange-50 text-orange-600" : "border-gray-200 text-gray-700"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div>
          <p className="text-sm font-bold text-gray-900 mb-3">Minimum rating</p>
          <div className="flex gap-2">
            {ratings.map((r, i) => (
              <button
                key={r}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition
                  ${i === 0 ? "border-orange-500 bg-orange-50 text-orange-600" : "border-gray-200 text-gray-700"}`}
              >
                ★ {r}
              </button>
            ))}
          </div>
        </div>

        {/* Options */}
        <div>
          <p className="text-sm font-bold text-gray-900 mb-3">Options</p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Free delivery", checked: true },
              { label: "Under 30 minutes", checked: false },
              { label: "Open now", checked: true },
              { label: "New restaurants", checked: false },
            ].map((opt) => (
              <label key={opt.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl cursor-pointer">
                <span className="text-sm font-medium text-gray-800">{opt.label}</span>
                <div className={`relative w-11 h-6 rounded-full transition ${opt.checked ? "bg-orange-500" : "bg-gray-300"}`}>
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${opt.checked ? "translate-x-5" : "translate-x-0.5"}`} />
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Apply button */}
      <div className="p-5 border-t border-gray-100">
        <Link href="/mobile/restaurant-list" className="block w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl text-center text-base transition">
          Show 42 Restaurants
        </Link>
      </div>
    </div>
  );
}
