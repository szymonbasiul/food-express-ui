import MobileBottomNav from "../../components/MobileBottomNav";
import Link from "next/link";

const StarSVG = () => (
  <svg className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function MobileProductDetailsPage() {
  const extras = [
    { label: "Extra Mozzarella", price: "+$1.50", selected: true },
    { label: "Spicy Salami", price: "+$2.00", selected: false },
    { label: "Truffle Oil", price: "+$2.50", selected: false },
    { label: "Fresh Basil", price: "Free", selected: true },
  ];

  return (
    <div className="w-96 mx-auto min-h-screen bg-white flex flex-col">
      {/* Product image */}
      <div className="relative h-64 bg-linear-to-br from-red-100 to-orange-200 flex items-center justify-center">
        <div className="w-32 h-32 bg-white/20 rounded-3xl flex items-center justify-center">
          <span className="text-white font-black text-5xl">FE</span>
        </div>
        <Link href="/mobile/menu-pizza" className="absolute top-12 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <button className="absolute top-12 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Popular
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50 rounded-t-3xl -mt-5">
        <div className="px-5 pt-5">
          {/* Product info */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <h1 className="text-xl font-black text-gray-900">Margherita Pizza</h1>
              <p className="text-sm text-gray-500 mt-0.5">Mario&apos;s Pizza Palace</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xl font-black text-orange-500">$14.99</p>
              <p className="text-xs text-gray-400 line-through">$17.99</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <StarSVG /> 4.9 (234)
            </span>
            <span>620 kcal</span>
            <span>Serves 2-3</span>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Classic Neapolitan pizza with San Marzano tomato sauce, fresh buffalo mozzarella, and fragrant basil. Baked in wood-fired oven.
          </p>

          {/* Size selector */}
          <div className="mb-5">
            <p className="font-bold text-gray-900 mb-2 text-sm">Size <span className="text-red-500 text-xs">Required</span></p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Small", size: "26cm", price: "", selected: false },
                { label: "Medium", size: "32cm", price: "+$2", selected: true },
                { label: "Large", size: "40cm", price: "+$4", selected: false },
              ].map((opt) => (
                <button
                  key={opt.label}
                  className={`py-2.5 rounded-xl text-center border-2 transition
                    ${opt.selected ? "border-orange-500 bg-orange-50" : "border-gray-200 bg-white"}`}
                >
                  <p className={`text-xs font-bold ${opt.selected ? "text-orange-600" : "text-gray-700"}`}>{opt.label}</p>
                  <p className="text-xs text-gray-400">{opt.size}</p>
                  {opt.price && <p className={`text-xs font-semibold ${opt.selected ? "text-orange-500" : "text-gray-500"}`}>{opt.price}</p>}
                </button>
              ))}
            </div>
          </div>

          {/* Extras */}
          <div className="mb-6">
            <p className="font-bold text-gray-900 mb-2 text-sm">Extra toppings <span className="text-gray-400 text-xs font-normal">(optional)</span></p>
            <div className="flex flex-col gap-2">
              {extras.map((opt) => (
                <label
                  key={opt.label}
                  className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition
                    ${opt.selected ? "border-orange-300 bg-orange-50" : "border-gray-100 bg-white"}`}
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${opt.selected ? "bg-orange-500 border-orange-500" : "border-gray-300"}`}>
                    {opt.selected && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                  <span className="flex-1 text-sm font-medium text-gray-800">{opt.label}</span>
                  <span className="text-xs font-semibold text-orange-500">{opt.price}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white border-t border-gray-100 px-5 py-4 flex items-center gap-4">
        <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-3 py-2">
          <button className="w-7 h-7 rounded-xl bg-white text-gray-700 font-bold flex items-center justify-center shadow-sm text-lg">&minus;</button>
          <span className="font-black text-gray-900 w-4 text-center">1</span>
          <button className="w-7 h-7 rounded-xl bg-orange-500 text-white font-bold flex items-center justify-center">+</button>
        </div>
        <Link href="/mobile/cart" className="flex-1 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl text-center transition">
          Add to Cart &middot; $16.49
        </Link>
      </div>

      <MobileBottomNav active="cart" cartCount={3} />
    </div>
  );
}
