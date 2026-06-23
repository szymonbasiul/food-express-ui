import MobileBottomNav from "../../components/MobileBottomNav";
import Link from "next/link";

const pizzas = [
  { name: "Margherita", desc: "Tomato, mozzarella, fresh basil", price: "$14.99", originalPrice: "$17.99", popular: true },
  { name: "Pepperoni", desc: "Spicy pepperoni, tomato, mozzarella", price: "$16.99" },
  { name: "BBQ Chicken", desc: "BBQ sauce, chicken, cheddar, onion", price: "$17.99" },
  { name: "Quattro Formaggi", desc: "Four cheese blend, truffle oil", price: "$15.99" },
  { name: "Prosciutto e Rucola", desc: "Prosciutto, rucola, parmesan", price: "$19.99", badge: "Chef's Pick" },
  { name: "Diavola", desc: "Spicy salami, chili, mozzarella", price: "$16.49" },
];

export default function MobileMenuPizzaPage() {
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
            <h1 className="font-black text-gray-900">Pizza Menu</h1>
            <p className="text-xs text-gray-500">Mario&apos;s Pizza Palace &middot; {pizzas.length} items</p>
          </div>
          <Link href="/mobile/cart" className="relative">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
          </Link>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {[
            { label: "All", href: "/mobile/menu-all", active: false },
            { label: "Pizza", href: "/mobile/menu-pizza", active: true },
            { label: "Pasta", href: "/mobile/menu-all", active: false },
            { label: "Drinks", href: "/mobile/menu-all", active: false },
            { label: "Desserts", href: "/mobile/menu-all", active: false },
          ].map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition
                ${tab.active ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-600"}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Category banner */}
      <div className="mx-4 mt-4 bg-linear-to-r from-red-500 to-orange-500 rounded-2xl p-4 text-white flex items-center gap-3">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
          <span className="text-white font-black text-lg">FE</span>
        </div>
        <div>
          <p className="font-black">Wood-Fired Pizzas</p>
          <p className="text-xs opacity-80">Neapolitan style &middot; Fresh ingredients daily</p>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="flex flex-col gap-3">
          {pizzas.map((item) => (
            <Link key={item.name} href="/mobile/product-details" className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="flex items-center gap-3 p-3">
                <div className="w-16 h-16 bg-linear-to-br from-red-100 to-orange-200 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-white/60 font-black text-sm">FE</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                    {item.popular && (
                      <span className="text-xs bg-orange-100 text-orange-600 font-bold px-1.5 py-0.5 rounded-full">Popular</span>
                    )}
                    {item.badge && (
                      <span className="text-xs bg-orange-100 text-orange-600 font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{item.desc}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <p className="text-sm font-black text-gray-900">{item.price}</p>
                    {item.originalPrice && <p className="text-xs text-gray-400 line-through">{item.originalPrice}</p>}
                  </div>
                </div>
                <button className="w-9 h-9 bg-orange-500 rounded-full text-white font-bold flex items-center justify-center shrink-0 text-xl hover:bg-orange-600 transition">
                  +
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <MobileBottomNav active="home" cartCount={3} />
    </div>
  );
}
