import Link from "next/link";

type RestaurantCardProps = {
  id?: number;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  deliveryFee: string;
  minOrder?: string;
  tags?: string[];
  imageColor?: string;
  featured?: boolean;
  priceRange?: string;
};

export default function RestaurantCard({
  id = 1,
  name,
  cuisine,
  rating,
  reviewCount,
  deliveryTime,
  deliveryFee,
  minOrder = "$15",
  tags = [],
  imageColor = "from-orange-400 to-red-500",
  featured = false,
  priceRange = "$$",
}: RestaurantCardProps) {
  return (
    <Link href="/restaurant/overview" className="group block">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Image — clean gradient with FE logo */}
        <div className={`relative h-44 bg-linear-to-br ${imageColor} flex items-center justify-center`}>
          {featured && (
            <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              Featured
            </div>
          )}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-bold text-gray-800">{rating}</span>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
            <span className="text-white font-black text-lg tracking-tight">FE</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-bold text-gray-900 text-base group-hover:text-orange-600 transition">{name}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{cuisine} · {priceRange}</p>
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {deliveryTime}
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" />
              </svg>
              {deliveryFee}
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <span className="text-gray-400">({reviewCount})</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
