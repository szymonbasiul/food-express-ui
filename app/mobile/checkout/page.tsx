import Link from "next/link";

export default function MobileCheckoutPage() {
  return (
    <div className="w-96 mx-auto min-h-screen bg-gray-50 flex flex-col pb-6">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Link href="/mobile/cart" className="text-gray-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-lg font-black text-gray-900">Checkout</h1>
        </div>
        {/* Progress */}
        <div className="flex items-center gap-2 mt-3">
          {["Address", "Payment", "Confirm"].map((step, i) => (
            <div key={step} className="flex items-center gap-2 flex-1">
              <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-orange-500" : "bg-gray-200"}`} />
              <span className={`text-xs font-medium ${i === 0 ? "text-orange-500" : "text-gray-400"}`}>{step}</span>
              {i < 2 && <div className="flex-1 h-px bg-gray-200" />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 px-4 py-4 flex flex-col gap-4 overflow-y-auto">
        {/* Delivery address */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900 text-sm">Delivery Address</h3>
            <button className="text-xs text-orange-500 font-semibold">Change</button>
          </div>
          <div className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-xl p-3">
            <span className="text-xl">📍</span>
            <div>
              <p className="font-semibold text-sm text-gray-900">Home</p>
              <p className="text-xs text-gray-600 mt-0.5">ul. Mokotowska 12/5, 00-641 Warsaw</p>
            </div>
          </div>
          <button className="mt-3 w-full py-2 border-2 border-dashed border-gray-200 rounded-xl text-xs font-medium text-gray-500 hover:border-orange-300 hover:text-orange-500 transition">
            + Add new address
          </button>
        </div>

        {/* Contact details */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Contact Details</h3>
          <div className="flex flex-col gap-2">
            <input defaultValue="John Doe" className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" placeholder="Full name" />
            <input defaultValue="+48 600 123 456" className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" placeholder="Phone" />
          </div>
        </div>

        {/* Delivery note */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <h3 className="font-bold text-gray-900 text-sm mb-2">Note for courier</h3>
          <textarea
            defaultValue="Ring doorbell twice"
            className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 resize-none h-16"
            placeholder="Any delivery instructions?"
          />
        </div>

        {/* Time slot */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Delivery Time</h3>
          <div className="flex gap-2">
            {["ASAP (~25 min)", "Schedule"].map((opt, i) => (
              <button
                key={opt}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border-2 transition
                  ${i === 0 ? "border-orange-500 bg-orange-50 text-orange-600" : "border-gray-200 text-gray-600"}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Order summary */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Order Summary</h3>
          <div className="flex flex-col gap-1.5 text-sm">
            <div className="flex justify-between text-gray-600"><span>Subtotal (3 items)</span><span>$33.45</span></div>
            <div className="flex justify-between text-gray-600"><span>Delivery fee</span><span>$2.99</span></div>
            <div className="flex justify-between font-black text-gray-900 text-base pt-2 border-t border-gray-100 mt-1"><span>Total</span><span>$36.44</span></div>
          </div>
        </div>
      </div>

      {/* Continue button */}
      <div className="px-4 py-4 bg-white border-t border-gray-100">
        <Link href="/mobile/payment" className="block w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl text-center text-base transition">
          Continue to Payment →
        </Link>
      </div>
    </div>
  );
}
