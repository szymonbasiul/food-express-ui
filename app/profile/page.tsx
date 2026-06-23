import Header from "../components/Header";
import Link from "next/link";

export default function ProfilePage() {
  const stats = [
    { label: "Orders", val: "47" },
    { label: "Saved", val: "12" },
    { label: "Reviews", val: "8" },
    { label: "Points", val: "940" },
  ];

  const recentOrders = [
    { emoji: "", name: "Mario's Pizza Palace", date: "Today", amount: "$37.24", status: "On the way" },
    { emoji: "", name: "Burger Republic", date: "Yesterday", amount: "$28.97", status: "Delivered" },
    { emoji: "", name: "Tokyo Garden", date: "Dec 20", amount: "$42.50", status: "Delivered" },
  ];

  const favoriteRestaurants = [
    { emoji: "", name: "Mario's Pizza Palace", tag: "Italian · 4.8", orders: "14 orders" },
    { emoji: "", name: "Tokyo Garden", tag: "Japanese · 4.9", orders: "8 orders" },
    { emoji: "", name: "Burger Republic", tag: "American · 4.6", orders: "6 orders" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="home" />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Profile card */}
          <div className="col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
              {/* Avatar */}
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-orange-400 to-red-500 flex items-center justify-center mx-auto">
                  <span className="text-white font-black text-3xl">JD</span>
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-md hover:bg-orange-600 transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
              <h2 className="text-xl font-black text-gray-900">John Doe</h2>
              <p className="text-gray-500 text-sm mt-0.5">john.doe@example.com</p>
              <p className="text-gray-400 text-xs mt-0.5">+48 600 123 456</p>

              {/* Loyalty badge */}
              <div className="mt-4 bg-linear-to-r from-orange-500 to-red-500 rounded-xl px-4 py-3 text-white">
                <p className="text-xs font-semibold opacity-80">Loyalty Level</p>
                <p className="font-black text-lg">Gold Member</p>
                <p className="text-xs opacity-80 mt-0.5">940 / 1000 points to Platinum</p>
                <div className="mt-2 bg-white/20 rounded-full h-1.5">
                  <div className="bg-white rounded-full h-full" style={{ width: "94%" }} />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xl font-black text-gray-900">{stat.val}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Nav links */}
              <div className="mt-5 flex flex-col gap-1">
                {[
                  { label: "Account Settings", href: "/settings" },
                  { label: "Order History", href: "/order/history" },
                  { label: "Saved Addresses", href: "/settings" },
                  { label: "Payment Methods", href: "/settings" },
                  { label: "Notifications", href: "/settings" },
                  { label: "Sign Out", href: "/login" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="col-span-2 flex flex-col gap-5">
            {/* Recent orders */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Recent Orders</h3>
                <Link href="/order/history" className="text-sm text-orange-500 font-medium hover:text-orange-600">View all â†’</Link>
              </div>
              <div className="flex flex-col gap-3">
                {recentOrders.map((order) => (
                  <div key={order.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">{order.emoji}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-900">{order.name}</p>
                      <p className="text-xs text-gray-500">{order.date} · {order.amount}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${order.status === "Delivered" ? "text-green-600 bg-green-100" : "text-blue-600 bg-blue-100"}`}>
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite restaurants */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Favorite Restaurants</h3>
                <Link href="/restaurants" className="text-sm text-orange-500 font-medium hover:text-orange-600">Explore more â†’</Link>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {favoriteRestaurants.map((r) => (
                  <Link key={r.name} href="/restaurant/overview" className="group bg-gray-50 rounded-xl p-4 hover:bg-orange-50 transition">
                    <div className="text-3xl mb-2">{r.emoji}</div>
                    <p className="font-semibold text-sm text-gray-900 group-hover:text-orange-600 transition">{r.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{r.tag}</p>
                    <p className="text-xs text-orange-500 mt-1 font-medium">{r.orders}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Referral */}
            <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-black text-lg">Refer a friend, earn $10</p>
                  <p className="text-sm opacity-80 mt-1">Share your code and both of you get $10 credit</p>
                  <div className="mt-3 bg-white/20 rounded-xl px-4 py-2 inline-flex items-center gap-3">
                    <span className="font-black tracking-widest">JOHN-XK92</span>
                    <button className="text-xs bg-white/30 px-2 py-1 rounded-lg hover:bg-white/40 transition">Copy</button>
                  </div>
                </div>
                <div className="text-6xl">FE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
