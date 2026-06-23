import Header from "../../components/Header";
import Link from "next/link";

const savedCards = [
  { id: 1, brand: "Visa", last4: "4242", expiry: "12/26", default: true },
  { id: 2, brand: "Mastercard", last4: "5555", expiry: "08/25", default: false },
];

export default function CheckoutPaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="home" cartCount={4} />

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Progress */}
        <div className="flex items-center gap-3 mb-8">
          {[
            { step: 1, label: "Delivery", active: false, done: true },
            { step: 2, label: "Payment", active: true, done: false },
            { step: 3, label: "Review", active: false, done: false },
          ].map((s, i) => (
            <div key={s.step} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${s.active ? "bg-orange-500 text-white" : s.done ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}>
                  {s.done ? "✓" : s.step}
                </div>
                <span className={`text-sm font-medium ${s.active ? "text-orange-600" : s.done ? "text-green-600" : "text-gray-400"}`}>{s.label}</span>
              </div>
              {i < 2 && <div className="flex-1 h-px bg-gray-200 w-16" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 flex flex-col gap-4">
            <h1 className="text-xl font-black text-gray-900">Payment Method</h1>

            {/* Payment method tabs */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex gap-2 mb-5">
                {["Credit Card", "Apple Pay", "Google Pay", "Cash on Delivery"].map((method, i) => (
                  <button
                    key={method}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold transition border
                      ${i === 0 ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}
                  >
                    {method}
                  </button>
                ))}
              </div>

              {/* Saved cards */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Saved Cards</p>
                <div className="flex flex-col gap-2">
                  {savedCards.map((card) => (
                    <label
                      key={card.id}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition
                        ${card.default ? "border-orange-400 bg-orange-50" : "border-gray-100 hover:border-gray-200"}`}
                    >
                      <input type="radio" name="card" defaultChecked={card.default} className="accent-orange-500" />
                      <div className={`w-10 h-7 rounded flex items-center justify-center text-white text-xs font-bold
                        ${card.brand === "Visa" ? "bg-blue-600" : "bg-red-500"}`}>
                        {card.brand === "Visa" ? "VISA" : "MC"}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-gray-900">{card.brand} •••• {card.last4}</p>
                        <p className="text-xs text-gray-500">Expires {card.expiry}</p>
                      </div>
                      {card.default && <span className="text-xs bg-orange-100 text-orange-600 font-medium px-2 py-0.5 rounded-full">Default</span>}
                    </label>
                  ))}
                </div>
              </div>

              {/* New card form */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Add New Card</p>
                <div className="flex flex-col gap-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Card number</label>
                    <div className="relative">
                      <input placeholder="1234 5678 9012 3456" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 pr-12" />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">💳</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">Expiry date</label>
                      <input placeholder="MM / YY" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">CVV</label>
                      <input placeholder="•••" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Cardholder name</label>
                    <input placeholder="John Doe" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded accent-orange-500" />
                    <span className="text-sm text-gray-600">Save this card for future orders</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Security note */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
              <span className="text-xl">🔒</span>
              <p className="text-xs text-gray-600">Your payment info is encrypted with 256-bit SSL. We never store your full card details.</p>
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
              <div className="bg-gray-50 rounded-xl p-3 mb-4 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <span>📍</span>
                  <div>
                    <p className="font-medium">Home</p>
                    <p className="text-xs text-gray-500">ul. Mokotowska 12/5, Warsaw</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>$40.94</span></div>
                <div className="flex justify-between text-gray-600"><span>Delivery</span><span>$2.99</span></div>
                <div className="flex justify-between text-green-600"><span>Discount</span><span>-$6.69</span></div>
                <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100"><span>Total</span><span>$37.24</span></div>
              </div>
              <Link href="/checkout/review" className="block w-full mt-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-center transition">
                Review Order →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
