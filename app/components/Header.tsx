import Link from "next/link";

type HeaderProps = {
  searchValue?: string;
  cartCount?: number;
  activePage?: string;
};

export default function Header({ searchValue = "", cartCount = 3, activePage = "home" }: HeaderProps) {
  const navLinks = [
    { href: "/home", label: "Home", key: "home" },
    { href: "/restaurants", label: "Restaurants", key: "restaurants" },
    { href: "/order/history", label: "My Orders", key: "orders" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-6">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center">
            <span className="text-white font-black text-sm">FE</span>
          </div>
          <span className="font-black text-lg text-gray-900">
            Food<span className="text-orange-500">Express</span>
          </span>
        </Link>

        {/* Delivery address */}
        <div className="hidden md:flex items-center gap-1.5 text-sm text-gray-500 cursor-pointer hover:text-gray-700">
          <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium text-gray-800">Warsaw, PL</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              defaultValue={searchValue}
              placeholder="Search restaurants or dishes..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 focus:bg-white transition"
            />
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition
                ${activePage === link.key
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-auto lg:ml-0">
          {/* Cart */}
          <Link href="/cart/items" className="relative p-2 rounded-xl hover:bg-gray-50 transition">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User avatar */}
          <Link href="/profile" className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-gray-50 transition">
            <div className="w-7 h-7 rounded-full bg-linear-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">JD</span>
            </div>
            <span className="hidden lg:block text-sm font-medium text-gray-700">John D.</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
