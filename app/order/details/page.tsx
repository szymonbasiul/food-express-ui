import Header from "../../components/Header";
import Link from "next/link";

export default function OrderDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="orders" />

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/home">Home</Link><span>/</span>
          <Link href="/order/history">My Orders</Link><span>/</span>
          <span className="text-gray-900 font-medium">#FE-2024-7801</span>
        </div>

        {/* Order header */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-600 bg-green-50 text-xs font-bold px-2.5 py-1 rounded-full">âś“ Delivered</span>
              </div>
              <h1 className="text-xl font-black text-gray-900 mt-2">Order #FE-2024-7801</h1>
              <p className="text-gray-500 text-sm mt-1">Yesterday, December 21 · 1:30 PM</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-gray-900">$28.97</p>
              <p className="text-xs text-gray-500 mt-0.5">Paid via Visa •••• 4242</p>
            </div>
          </div>
        </div>

        {/* Restaurant & items */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-2xl">FE</div>
            <div>
              <p className="font-bold text-gray-900">Burger Republic</p>
              <p className="text-sm text-gray-500">ul. Nowy Ĺšwiat 22, Warsaw</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { emoji: "", name: "Double Stack Burger", customization: "Extra sauce, no pickles", qty: 1, price: 17.99 },
              { emoji: "", name: "Large Fries", customization: "Extra crispy", qty: 1, price: 5.49 },
              { emoji: "", name: "Vanilla Shake", customization: "", qty: 1, price: 6.49 },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-xl shrink-0">{item.emoji}</div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-gray-900">{item.name}</p>
                  {item.customization && <p className="text-xs text-gray-500">{item.customization}</p>}
                  <p className="text-xs text-gray-400">Qty: {item.qty}</p>
                </div>
                <p className="font-semibold text-gray-900">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery info */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-bold text-gray-900 mb-3">Delivery Address</h3>
            <div className="flex items-start gap-2">
              <span>FE</span>
              <div>
                <p className="font-semibold text-sm text-gray-800">Home</p>
                <p className="text-sm text-gray-600">ul. Mokotowska 12/5, 00-641 Warsaw</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-bold text-gray-900 mb-3">Delivery Timeline</h3>
            <div className="flex flex-col gap-2">
              {[
                { label: "Ordered", time: "1:30 PM" },
                { label: "Picked up", time: "1:48 PM" },
                { label: "Delivered", time: "2:02 PM" },
              ].map((t) => (
                <div key={t.label} className="flex justify-between text-sm">
                  <span className="text-gray-500">{t.label}</span>
                  <span className="font-semibold text-gray-800">{t.time}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm text-green-600 font-semibold mt-1">
                <span>Total time</span>
                <span>32 minutes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment breakdown */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
          <h3 className="font-bold text-gray-900 mb-3">Payment Breakdown</h3>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>$29.97</span></div>
            <div className="flex justify-between text-gray-600"><span>Delivery fee</span><span>Free</span></div>
            <div className="flex justify-between text-gray-600"><span>Service fee</span><span>$1.00</span></div>
            <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100"><span>Total</span><span>$28.97</span></div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition">
            FE
          </button>
          <button className="flex-1 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition">
            Rate Order
          </button>
          <button className="flex-1 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition">
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
}
