import MobileBottomNav from "../../components/MobileBottomNav";
import Link from "next/link";

const allItems = [
  { emoji: "🍕", name: "Margherita Pizza", desc: "Tomato, mozzarella, basil", price: "$14.99", category: "Pizza", popular: true },
  { emoji: "🍕", name: "Pepperoni Pizza", desc: "Spicy pepperoni, mozzarella", price: "$16.99", category: "Pizza" },
  { emoji: "🥖", name: "Garlic Bread", desc: "Extra butter, fresh herbs", price: "$4.99", category: "Sides" },
  { emoji: "🥗", name: "Caesar Salad", desc: "Romaine, croutons, parmesan", price: "$8.99", category: "Salads" },
  { emoji: "🍰", name: "Tiramisu", desc: "Classic Italian, mascarpone", price: "$8.99", category: "Desserts", badge: "New" },
  { emoji: "💧", name: "San Pellegrino", desc: "Sparkling water 750ml", price: "$2.49", category: "Drinks" },
];

export default function MobileMenuAllPage() {
  return (
    <div className="w-96 mx-auto min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-3 border-b border-gray-100 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-3">
          <Link href="/mobile/restaurant-details" className="text-gray-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="flex-1">
            <h1 className="font-black text-gray-900">Mario&apos;s Pizza Palace</h1>
            <p className="text-xs text-gray-500">Full Menu</p>
          </div>
          <Link href="/mobile/cart" className="relative">
            <span className="text-2xl">🛒</span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
          </Link>
        </div>
        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {["All", "Pizza", "Sides", "Salads", "Desserts", "Drinks"].map((tab, i) => (
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
        {/* Search in menu */}
        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
          <input placeholder="Search menu..." className="w-full pl-9 pr-4 py-2.5 bg-white rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" />
        </div>

        <div className="flex flex-col gap-3">
          {allItems.map((item) => (
            <Link key={item.name} href="/mobile/product-details" className="bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 p-3 hover:shadow-md transition">
              <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center text-3xl shrink-0">{item.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                  {item.popular && <span className="text-xs text-orange-500">🔥</span>}
                  {item.badge && <span className="text-xs bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                </div>
                <p className="text-xs text-gray-500 mt-0.5 truncate">{item.desc}</p>
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-sm font-bold text-gray-900">{item.price}</p>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{item.category}</span>
                </div>
              </div>
              <button className="w-8 h-8 bg-orange-500 rounded-full text-white font-bold flex items-center justify-center shrink-0 text-lg">
                +
              </button>
            </Link>
          ))}
        </div>
      </div>

      <MobileBottomNav active="home" cartCount={3} />
    </div>
  );
}
