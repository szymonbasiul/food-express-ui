import Link from "next/link";

type SidebarProps = {
  activeCategory?: string;
};

const categories = [
  { key: "all", label: "All", href: "/restaurant/menu-all", color: "bg-gray-400" },
  { key: "pizza", label: "Pizza", href: "/restaurant/menu-pizza", color: "bg-red-400" },
  { key: "burgers", label: "Burgers", href: "/restaurant/menu-burgers", color: "bg-amber-400" },
  { key: "sushi", label: "Sushi", href: "/restaurant/menu-sushi", color: "bg-indigo-400" },
  { key: "desserts", label: "Desserts", href: "/restaurant/menu-desserts", color: "bg-pink-400" },
  { key: "drinks", label: "Drinks", href: "/restaurant/menu-drinks", color: "bg-blue-400" },
];

const navItems = [
  {
    href: "/home",
    label: "Home",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: "/restaurants",
    label: "Explore",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    href: "/order/history",
    label: "My Orders",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    href: "/profile",
    label: "Profile",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    href: "/settings",
    label: "Settings",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Sidebar({ activeCategory = "all" }: SidebarProps) {
  return (
    <aside className="w-56 shrink-0 flex flex-col gap-6">
      {/* Navigation */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Navigation</p>
        <nav className="flex flex-col gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition"
            >
              <span className="shrink-0">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Categories */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Categories</p>
        <nav className="flex flex-col gap-0.5">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              href={cat.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition
                ${activeCategory === cat.key
                  ? "bg-orange-500 text-white"
                  : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"}`}
            >
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${activeCategory === cat.key ? "bg-white/70" : cat.color}`} />
              {cat.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Promo banner */}
      <div className="rounded-2xl bg-linear-to-br from-orange-500 to-red-500 p-4 text-white">
        <p className="text-xs font-semibold opacity-80 uppercase tracking-wide">Limited offer</p>
        <p className="text-base font-black mt-1 leading-tight">Get 20% off your next order</p>
        <div className="mt-3 bg-white/20 rounded-lg px-3 py-1.5 text-xs font-bold text-center tracking-widest">
          FOOD20
        </div>
      </div>
    </aside>
  );
}
