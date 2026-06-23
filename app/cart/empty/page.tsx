import Header from "../../components/Header";
import Link from "next/link";

export default function CartEmptyPage() {
  const suggestions = [
    { emoji: "🍕", name: "Mario's Pizza Palace", tag: "Italian · 20-30 min", href: "/restaurant/menu-pizza" },
    { emoji: "🍔", name: "Burger Republic", tag: "American · 15-25 min", href: "/restaurant/menu-burgers" },
    { emoji: "🍣", name: "Tokyo Garden", tag: "Japanese · 30-45 min", href: "/restaurant/menu-sushi" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="home" cartCount={0} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            {/* Empty state */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl">🛒</span>
              </div>
              <h1 className="text-2xl font-black text-gray-900">Your cart is empty</h1>
              <p className="text-gray-500 mt-2 max-w-sm">
                Looks like you haven&apos;t added anything yet. Browse our restaurants and find something delicious!
              </p>
              <Link
                href="/restaurants"
                className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition"
              >
                Browse Restaurants
              </Link>
            </div>

            {/* Suggestions */}
            <div className="mt-6">
              <h2 className="font-bold text-gray-900 mb-4">Popular near you</h2>
              <div className="flex flex-col gap-3">
                {suggestions.map((r) => (
                  <Link key={r.name} href={r.href} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 hover:shadow-md transition">
                    <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-3xl shrink-0">
                      {r.emoji}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{r.name}</p>
                      <p className="text-sm text-gray-500">{r.tag}</p>
                    </div>
                    <div className="text-orange-500 font-bold text-sm">Order →</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Cart placeholder */}
          <div className="col-span-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <div className="text-5xl opacity-30">🛒</div>
                <p className="text-sm text-gray-400">No items yet</p>
              </div>
              <div className="border-t border-gray-100 pt-4 flex flex-col gap-2 text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Subtotal</span><span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span><span>-</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100">
                  <span>Total</span><span>$0.00</span>
                </div>
              </div>
              <button disabled className="w-full mt-4 py-3 bg-gray-200 text-gray-400 font-bold rounded-xl cursor-not-allowed text-sm">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
