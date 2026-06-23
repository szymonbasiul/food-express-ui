import Header from "../../components/Header";
import Link from "next/link";

const orders = [
  {
    id: "FE-2024-7842",
    restaurant: "Mario's Pizza Palace",
    emoji: "🍕",
    date: "Today, 7:15 PM",
    items: ["Margherita Pizza", "Garlic Bread", "Tiramisu"],
    total: 37.24,
    status: "On the way",
    statusColor: "text-blue-600 bg-blue-50",
  },
  {
    id: "FE-2024-7801",
    restaurant: "Burger Republic",
    emoji: "🍔",
    date: "Yesterday, 1:30 PM",
    items: ["Double Stack Burger", "Fries", "Shake"],
    total: 28.97,
    status: "Delivered",
    statusColor: "text-green-600 bg-green-50",
  },
  {
    id: "FE-2024-7756",
    restaurant: "Tokyo Garden",
    emoji: "🍣",
    date: "Dec 20, 8:00 PM",
    items: ["Dragon Roll", "Salmon Nigiri", "Miso Soup"],
    total: 42.50,
    status: "Delivered",
    statusColor: "text-green-600 bg-green-50",
  },
  {
    id: "FE-2024-7712",
    restaurant: "Spice Route",
    emoji: "🍛",
    date: "Dec 18, 7:45 PM",
    items: ["Butter Chicken", "Garlic Naan", "Mango Lassi"],
    total: 32.15,
    status: "Delivered",
    statusColor: "text-green-600 bg-green-50",
  },
  {
    id: "FE-2024-7680",
    restaurant: "Verde Kitchen",
    emoji: "🥗",
    date: "Dec 15, 12:30 PM",
    items: ["Caesar Salad", "Hummus Bowl", "Lemonade"],
    total: 24.99,
    status: "Cancelled",
    statusColor: "text-red-600 bg-red-50",
  },
];

export default function OrderHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="orders" />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-black text-gray-900">My Orders</h1>
            <p className="text-gray-500 text-sm mt-1">{orders.length} orders total</p>
          </div>
          <div className="flex gap-2">
            {["All", "Active", "Completed", "Cancelled"].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition
                  ${i === 0 ? "bg-orange-500 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl shrink-0">
                  {order.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-gray-900">{order.restaurant}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{order.date} · #{order.id}</p>
                  <p className="text-sm text-gray-600 mt-2 truncate">
                    {order.items.join(", ")}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-gray-900">${order.total.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                {order.status === "On the way" ? (
                  <Link href="/order/tracking" className="flex-1 py-2 bg-orange-500 text-white text-sm font-bold rounded-xl text-center hover:bg-orange-600 transition">
                    Track Order 🗺️
                  </Link>
                ) : order.status === "Delivered" ? (
                  <>
                    <button className="flex-1 py-2 bg-orange-50 text-orange-600 text-sm font-bold rounded-xl text-center hover:bg-orange-100 transition">
                      Reorder
                    </button>
                    <Link href="/order/details" className="flex-1 py-2 border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl text-center hover:bg-gray-50 transition">
                      View Details
                    </Link>
                  </>
                ) : (
                  <Link href="/order/details" className="flex-1 py-2 border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl text-center hover:bg-gray-50 transition">
                    View Details
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
