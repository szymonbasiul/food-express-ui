import Header from "../../components/Header";
import Link from "next/link";

const orderItems = [
  { name: "Margherita Pizza (Medium)", quantity: 1, price: 16.99, emoji: "🍕" },
  { name: "Garlic Bread", quantity: 2, price: 4.99, emoji: "🥖" },
  { name: "Tiramisu", quantity: 1, price: 8.99, emoji: "🍰" },
  { name: "San Pellegrino 750ml", quantity: 2, price: 2.49, emoji: "💧" },
];

export default function CheckoutReviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="home" cartCount={4} />

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Progress */}
        <div className="flex items-center gap-3 mb-8">
          {[
            { step: 1, label: "Delivery", done: true },
            { step: 2, label: "Payment", done: true },
            { step: 3, label: "Review", active: true },
          ].map((s, i) => (
            <div key={s.step} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${s.active ? "bg-orange-500 text-white" : "bg-green-500 text-white"}`}>
                  {s.active ? s.step : "✓"}
                </div>
                <span className={`text-sm font-medium ${s.active ? "text-orange-600" : "text-green-600"}`}>{s.label}</span>
              </div>
              {i < 2 && <div className="flex-1 h-px bg-green-300 w-16" />}
            </div>
          ))}
        </div>

        <h1 className="text-xl font-black text-gray-900 mb-6">Review Your Order</h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 flex flex-col gap-4">
            {/* Restaurant */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4">Items from Mario&apos;s Pizza Palace</h3>
              <div className="flex flex-col gap-3">
                {orderItems.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-xl shrink-0">{item.emoji}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900">Delivery Address</h3>
                <Link href="/checkout/address" className="text-sm text-orange-500 font-medium hover:text-orange-600">Change</Link>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p className="font-semibold text-sm text-gray-900">Home</p>
                  <p className="text-sm text-gray-600">ul. Mokotowska 12/5, 00-641 Warsaw</p>
                  <p className="text-xs text-gray-400 mt-1">Ring doorbell twice. Leave at the door if no answer.</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-xl">⏱️</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Estimated delivery</p>
                  <p className="text-sm text-gray-600">20–35 minutes · Today, 7:45 – 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900">Payment</h3>
                <Link href="/checkout/payment" className="text-sm text-orange-500 font-medium hover:text-orange-600">Change</Link>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <div className="w-10 h-7 rounded bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">VISA</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Visa •••• 4242</p>
                  <p className="text-xs text-gray-500">Expires 12/26</p>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 text-sm text-orange-800">
              <p>By placing this order you agree to our <span className="font-semibold underline cursor-pointer">Terms of Service</span>. You can cancel your order within 2 minutes of placing it.</p>
            </div>
          </div>

          {/* Order total */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Payment Summary</h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between text-gray-600"><span>Subtotal (4 items)</span><span>$40.94</span></div>
                <div className="flex justify-between text-gray-600"><span>Delivery fee</span><span>$2.99</span></div>
                <div className="flex justify-between text-green-600 font-medium"><span>Discount (FOOD20)</span><span>-$6.69</span></div>
              </div>
              <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between font-black text-gray-900 text-xl">
                <span>Total</span>
                <span>$37.24</span>
              </div>
              <Link href="/order/confirmation" className="block w-full mt-5 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-center transition text-base">
                Place Order · $37.24 🍕
              </Link>
              <p className="text-xs text-gray-400 text-center mt-3">You&apos;ll be charged $37.24 to your Visa ending in 4242</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
