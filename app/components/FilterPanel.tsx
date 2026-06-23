type FilterPanelProps = {
  activeCuisine?: string;
  activePrice?: string;
  activeRating?: string;
  sortBy?: string;
};

const cuisines = ["All", "Italian", "American", "Japanese", "Mexican", "Indian", "Thai", "Chinese"];
const priceRanges = ["All", "$", "$$", "$$$", "$$$$"];
const ratings = ["All", "4.5+", "4.0+", "3.5+"];
const sortOptions = ["Relevance", "Rating", "Delivery Time", "Price: Low to High"];

export default function FilterPanel({
  activeCuisine = "All",
  activePrice = "All",
  activeRating = "All",
  sortBy = "Relevance",
}: FilterPanelProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-5">
      {/* Sort */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Sort By</p>
        <div className="flex flex-wrap gap-2">
          {sortOptions.map((opt) => (
            <button
              key={opt}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition
                ${sortBy === opt
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Cuisine */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Cuisine</p>
        <div className="flex flex-wrap gap-2">
          {cuisines.map((c) => (
            <button
              key={c}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition
                ${activeCuisine === c
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Price Range</p>
        <div className="flex gap-2">
          {priceRanges.map((p) => (
            <button
              key={p}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition
                ${activePrice === p
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Min. Rating</p>
        <div className="flex gap-2">
          {ratings.map((r) => (
            <button
              key={r}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition
                ${activeRating === r
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {r === "All" ? r : (
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {r}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Delivery */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Delivery Options</p>
        <div className="flex flex-col gap-2">
          {["Free delivery", "Under 30 min", "Open now"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded accent-orange-500" />
              <span className="text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="w-full py-2.5 bg-orange-500 text-white text-sm font-bold rounded-xl hover:bg-orange-600 transition">
        Apply Filters
      </button>
      <button className="w-full py-2 text-gray-500 text-sm hover:text-gray-700 transition">
        Clear all filters
      </button>
    </div>
  );
}
