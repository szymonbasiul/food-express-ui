import Link from "next/link";

type FoodCardProps = {
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  calories?: number;
  imageColor?: string;
  imageEmoji?: string;
  badge?: string;
  popular?: boolean;
};

export default function FoodCard({
  name,
  description,
  price,
  originalPrice,
  calories,
  imageColor = "from-orange-100 to-amber-100",
  badge,
  popular = false,
}: FoodCardProps) {
  return (
    <Link href="/product/details" className="group block">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
        {/* Image — clean gradient */}
        <div className={`relative h-36 bg-linear-to-br ${imageColor} flex items-center justify-center`}>
          <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center">
            <span className="text-white font-black text-sm">FE</span>
          </div>
          {badge && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {badge}
            </div>
          )}
          {popular && (
            <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Popular
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3">
          <h4 className="font-semibold text-gray-900 text-sm group-hover:text-orange-600 transition">{name}</h4>
          {description && (
            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{description}</p>
          )}
          {calories && (
            <p className="text-xs text-gray-400 mt-1">{calories} kcal</p>
          )}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-gray-900">${price.toFixed(2)}</span>
              {originalPrice && (
                <span className="text-xs text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
              )}
            </div>
            <button className="w-7 h-7 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition text-sm font-bold">
              +
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
