import Link from "next/link";

type MobileBottomNavProps = {
  active?: "home" | "search" | "orders" | "cart" | "profile";
  cartCount?: number;
};

export default function MobileBottomNav({ active = "home", cartCount = 3 }: MobileBottomNavProps) {
  const items = [
    {
      key: "home",
      href: "/mobile/home",
      label: "Home",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      key: "search",
      href: "/mobile/search",
      label: "Search",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      key: "orders",
      href: "/mobile/order-tracking",
      label: "Orders",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      key: "cart",
      href: "/mobile/cart",
      label: "Cart",
      badge: cartCount,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      key: "profile",
      href: "/mobile/profile",
      label: "Profile",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
      <div className="flex items-center justify-around px-2 py-2 max-w-sm mx-auto">
        {items.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition
              ${active === item.key ? "text-orange-500" : "text-gray-400 hover:text-gray-600"}`}
          >
            {active === item.key && (
              <div className="absolute inset-0 bg-orange-50 rounded-xl" />
            )}
            <div className="relative">
              {item.icon}
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="relative text-[10px] font-semibold">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
