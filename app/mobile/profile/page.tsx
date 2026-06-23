import MobileBottomNav from "../../components/MobileBottomNav";
import Link from "next/link";

const menuItems = [
  { label: "My Orders", sub: "47 orders", href: "/order/history", color: "bg-orange-100", iconColor: "text-orange-500" },
  { label: "Saved Addresses", sub: "2 addresses", href: "/settings", color: "bg-blue-100", iconColor: "text-blue-500" },
  { label: "Payment Methods", sub: "Visa •••• 4242", href: "/settings", color: "bg-green-100", iconColor: "text-green-500" },
  { label: "Notifications", sub: "All enabled", href: "/settings", color: "bg-purple-100", iconColor: "text-purple-500" },
  { label: "Favourites", sub: "12 restaurants", href: "/restaurants", color: "bg-red-100", iconColor: "text-red-500" },
  { label: "Promotions & Offers", sub: "2 active codes", href: "/cart/discount", color: "bg-amber-100", iconColor: "text-amber-500" },
  { label: "Settings", sub: "Account, privacy", href: "/settings", color: "bg-gray-100", iconColor: "text-gray-500" },
  { label: "Help & Support", sub: "24/7 chat support", href: "/settings", color: "bg-teal-100", iconColor: "text-teal-500" },
];

export default function MobileProfilePage() {
  return (
    <div className="w-96 mx-auto min-h-screen bg-gray-50 pb-24">
      {/* Profile header */}
      <div className="bg-linear-to-br from-orange-500 to-red-600 px-5 pt-12 pb-8 text-white">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
            <span className="text-white font-black text-2xl">JD</span>
          </div>
          <div>
            <h1 className="text-xl font-black">John Doe</h1>
            <p className="text-sm opacity-80">john.doe@example.com</p>
            <p className="text-xs opacity-60 mt-0.5">+48 600 123 456</p>
          </div>
          <Link href="/settings" className="ml-auto w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </Link>
        </div>

        {/* Loyalty card */}
        <div className="mt-5 bg-white/15 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs opacity-70 font-semibold uppercase tracking-wide">Loyalty</p>
              <p className="font-black text-lg mt-0.5">Gold Member</p>
              <p className="text-xs opacity-70 mt-0.5">940 / 1000 pts to Platinum</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black">940</p>
              <p className="text-xs opacity-70">points</p>
            </div>
          </div>
          <div className="mt-3 bg-white/20 rounded-full h-2">
            <div className="bg-white rounded-full h-2 w-[94%]" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 -mt-4 mb-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm grid grid-cols-4 divide-x divide-gray-100">
          {[
            { val: "47", label: "Orders" },
            { val: "12", label: "Saved" },
            { val: "8", label: "Reviews" },
            { val: "940", label: "Points" },
          ].map((stat) => (
            <div key={stat.label} className="py-4 text-center">
              <p className="text-lg font-black text-gray-900">{stat.val}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="px-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {menuItems.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition ${i > 0 ? "border-t border-gray-50" : ""}`}
            >
              <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                <span className={`font-black text-xs ${item.iconColor}`}>FE</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-900">{item.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
              </div>
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Sign out */}
        <Link href="/login" className="block mt-4 w-full py-3 text-center text-red-500 font-semibold text-sm bg-white rounded-2xl border border-red-100 hover:bg-red-50 transition">
          Sign Out
        </Link>
      </div>

      <MobileBottomNav active="profile" cartCount={3} />
    </div>
  );
}
