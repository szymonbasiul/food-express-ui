import Header from "../../components/Header";
import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="home" cartCount={0} />

      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        {/* Success animation */}
        <div className="relative inline-block mb-8">
          <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-14 h-14 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center animate-bounce shadow-md">
            <span className="text-white font-black text-xs">FE</span>
          </div>
        </div>

        <h1 className="text-3xl font-black text-gray-900">Order Confirmed!</h1>
        <p className="text-gray-500 mt-2 text-lg">
          Your order has been placed and Mario&apos;s Pizza Palace is already preparing your food!
        </p>

        {/* Order number */}
        <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 inline-block mx-auto">
          <p className="text-sm text-gray-500">Order number</p>
          <p className="text-2xl font-black text-orange-500 mt-1">#FE-2024-7842</p>
          <p className="text-xs text-gray-400 mt-1">Confirmation sent to john.doe@example.com</p>
        </div>

        {/* Timeline */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-left">
          <h3 className="font-bold text-gray-900 mb-5 text-center">What happens next?</h3>
          <div className="flex flex-col gap-4">
            {[
              { title: "Order confirmed", desc: "Restaurant received your order", done: true },
              { title: "Preparing your food", desc: "Chef is preparing your meal", active: true },
              { title: "Out for delivery", desc: "Driver picks up your order", upcoming: true },
              { title: "Delivered!", desc: "Enjoy your meal!", upcoming: true },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
                  ${step.done ? "bg-green-100" : step.active ? "bg-orange-100" : "bg-gray-100"}`}>
                  {step.done && <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>}
                  {step.active && <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
                  {step.upcoming && <div className="w-2 h-2 rounded-full bg-gray-300" />}
                </div>
                <div className="flex-1">
                  <p className={`font-semibold text-sm ${step.done ? "text-green-700" : step.active ? "text-orange-600" : "text-gray-400"}`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
                {step.active && (
                  <span className="text-xs bg-orange-100 text-orange-600 font-semibold px-2.5 py-1 rounded-full animate-pulse">
                    In progress...
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ETA */}
        <div className="mt-5 bg-linear-to-r from-orange-500 to-red-500 rounded-2xl p-5 text-white">
          <p className="text-sm opacity-80">Estimated delivery time</p>
          <p className="text-4xl font-black mt-1">25&ndash;35 min</p>
          <p className="text-sm opacity-80 mt-1">Today, between 7:45 PM &ndash; 8:00 PM</p>
        </div>

        {/* Order summary */}
        <div className="mt-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-left">
          <h3 className="font-bold text-gray-900 mb-3">Order Summary</h3>
          {[
            { name: "Margherita Pizza (Medium) ×1", price: "$16.99" },
            { name: "Garlic Bread ×2", price: "$9.98" },
            { name: "Tiramisu ×1", price: "$8.99" },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-3 py-2">
              <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center shrink-0">
                <span className="text-orange-500 font-black text-[9px]">FE</span>
              </div>
              <span className="flex-1 text-sm text-gray-700">{item.name}</span>
              <span className="font-semibold text-sm text-gray-900">{item.price}</span>
            </div>
          ))}
          <div className="border-t border-gray-100 pt-3 mt-2 flex justify-between font-bold text-gray-900">
            <span>Total paid</span><span>$37.24</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <Link href="/order/tracking" className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition">
            Track Order
          </Link>
          <Link href="/home" className="flex-1 py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
