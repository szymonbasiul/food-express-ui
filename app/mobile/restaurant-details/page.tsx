import MobileBottomNav from "../../components/MobileBottomNav";
import Link from "next/link";

const StarSVG = () => (
  <svg className="w-3.5 h-3.5 text-yellow-400 fill-current shrink-0" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const menuItems = [
  { name: "Margherita Pizza", desc: "Tomato, mozzarella, fresh basil", price: "$14.99", popular: true, color: "from-red-100 to-orange-100" },
  { name: "Pepperoni Pizza", desc: "Spicy pepperoni, mozzarella", price: "$16.99", color: "from-orange-100 to-amber-100" },
  { name: "Garlic Bread", desc: "Extra butter, herbs", price: "$4.99", color: "from-amber-100 to-yellow-100" },
  { name: "Tiramisu", desc: "Classic Italian dessert", price: "$8.99", color: "from-pink-100 to-rose-100" },
];

export default function MobileRestaurantDetailsPage() {
  return (
    <div className="w-96 mx-auto min-h-screen bg-gray-50 pb-24">
      {/* Hero image */}
      <div className="relative h-56 bg-linear-to-br from-red-400 to-orange-500 flex items-center justify-center">
        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
          <span className="text-white font-black text-3xl">FE</span>
        </div>
        <Link href="/mobile/restaurant-list" className="absolute top-12 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <button className="absolute top-12 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* Restaurant info */}
      <div className="bg-white rounded-t-3xl -mt-5 px-5 pt-5 pb-3">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-black text-gray-900">Mario&apos;s Pizza Palace</h1>
            <p className="text-sm text-gray-500 mt-0.5">Italian · Pizza · Pasta · $$</p>
          </div>
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full shrink-0">Open</span>
        </div>

        <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <StarSVG />
            <span className="font-bold">4.8</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            20-30 min
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" />
            </svg>
            Free delivery
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
          {[
            { label: "All", href: "/mobile/menu-all" },
            { label: "Pizza", href: "/mobile/menu-pizza" },
            { label: "Pasta", href: "/mobile/menu-all" },
            { label: "Drinks", href: "/mobile/menu-all" },
            { label: "Desserts", href: "/mobile/menu-all" },
          ].map((tab, i) => (
            <Link
              key={tab.label}
              href={tab.href}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition
                ${i === 0 ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-600"}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Popular items */}
      <div className="px-5 mt-3">
        <p className="font-bold text-gray-900 mb-3">Popular Items</p>
        <div className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <Link key={item.name} href="/mobile/product-details" className="bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 p-3 hover:shadow-md transition">
              <div className={`w-14 h-14 bg-linear-to-br ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                <span className="text-white/60 font-black text-xs">FE</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                  {item.popular && <span className="text-xs text-orange-500 font-bold">Popular</span>}
                </div>
                <p className="text-xs text-gray-500 mt-0.5 truncate">{item.desc}</p>
                <p className="text-sm font-bold text-orange-500 mt-1">{item.price}</p>
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
