import Link from "next/link";

export default function MobilePaymentPage() {
  const methods = [
    { id: "card1", icon: "💳", label: "Visa •••• 4242", sub: "Expires 12/26", selected: true },
    { id: "apple", icon: "🍎", label: "Apple Pay", sub: "Touch ID", selected: false },
    { id: "google", icon: "🌐", label: "Google Pay", sub: "john@gmail.com", selected: false },
    { id: "cash", icon: "💵", label: "Cash on Delivery", sub: "Pay when delivered", selected: false },
  ];

  return (
    <div className="w-96 mx-auto min-h-screen bg-gray-50 flex flex-col pb-6">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Link href="/mobile/checkout" className="text-gray-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-lg font-black text-gray-900">Payment</h1>
        </div>
        <div className="flex items-center gap-2 mt-3">
          {["Address", "Payment", "Confirm"].map((step, i) => (
            <div key={step} className="flex items-center gap-2 flex-1">
              <div className={`w-2 h-2 rounded-full ${i <= 1 ? "bg-orange-500" : "bg-gray-200"}`} />
              <span className={`text-xs font-medium ${i <= 1 ? "text-orange-500" : "text-gray-400"}`}>{step}</span>
              {i < 2 && <div className={`flex-1 h-px ${i === 0 ? "bg-orange-300" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 px-4 py-4 flex flex-col gap-4 overflow-y-auto">
        {/* Payment methods */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Choose Payment Method</h3>
          <div className="flex flex-col gap-2">
            {methods.map((method) => (
              <label
                key={method.id}
                className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition
                  ${method.selected ? "border-orange-400 bg-orange-50" : "border-gray-100 bg-white"}`}
              >
                <input type="radio" name="payment" defaultChecked={method.selected} className="accent-orange-500" />
                <span className="text-2xl">{method.icon}</span>
                <div className="flex-1">
                  <p className={`font-semibold text-sm ${method.selected ? "text-orange-700" : "text-gray-800"}`}>{method.label}</p>
                  <p className="text-xs text-gray-500">{method.sub}</p>
                </div>
                {method.selected && (
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </label>
            ))}
          </div>
          <button className="mt-3 w-full py-2.5 border-2 border-dashed border-gray-200 rounded-xl text-sm font-medium text-gray-500 hover:border-orange-300 hover:text-orange-500 transition">
            + Add new card
          </button>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Order Total</h3>
          <div className="flex flex-col gap-1.5 text-sm">
            <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>$33.45</span></div>
            <div className="flex justify-between text-gray-600"><span>Delivery fee</span><span>$2.99</span></div>
            <div className="flex justify-between font-black text-gray-900 text-lg pt-2 border-t border-gray-100 mt-1"><span>Total</span><span>$36.44</span></div>
          </div>
        </div>

        {/* Security note */}
        <div className="flex items-center gap-2 text-xs text-gray-500 justify-center">
          <span>🔒</span>
          <span>Payments secured with 256-bit SSL encryption</span>
        </div>
      </div>

      <div className="px-4 py-4 bg-white border-t border-gray-100">
        <Link href="/order/confirmation" className="block w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl text-center text-base transition">
          Place Order · $36.44 🍕
        </Link>
      </div>
    </div>
  );
}
