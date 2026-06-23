import Header from "../../components/Header";
import Link from "next/link";

const StarSVG = () => (
  <svg className="w-3.5 h-3.5 text-yellow-400 fill-current shrink-0" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const steps = [
  { label: "Order placed", time: "7:15 PM", done: true, icon: <CheckIcon /> },
  { label: "Order confirmed", time: "7:17 PM", done: true, icon: <CheckIcon /> },
  { label: "Preparing food", time: "7:20 PM", done: true, icon: <CheckIcon /> },
  { label: "Out for delivery", time: "Est. 7:40 PM", done: false, active: true, icon: (
    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  )},
  { label: "Delivered", time: "Est. 7:50 PM", done: false, icon: (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )},
];

export default function OrderTrackingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="orders" cartCount={0} />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/home">Home</Link><span>/</span>
          <Link href="/order/history">My Orders</Link><span>/</span>
          <span className="text-gray-900 font-medium">Track Order #FE-2024-7842</span>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Map + driver */}
          <div className="col-span-2 flex flex-col gap-4">
            {/* Map placeholder */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="h-64 bg-linear-to-br from-green-100 to-teal-100 relative flex items-center justify-center">
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-30">
                  {[20, 40, 60, 80].map((p) => (
                    <div key={`h${p}`} className="absolute w-full border-t border-gray-400" style={{ top: `${p}%` }} />
                  ))}
                  {[20, 40, 60, 80].map((p) => (
                    <div key={`v${p}`} className="absolute h-full border-l border-gray-400" style={{ left: `${p}%` }} />
                  ))}
                </div>
                {/* Route arc */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-orange-400 border-dashed rounded-full opacity-50" />
                {/* Restaurant pin */}
                <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg font-bold text-xs">R</div>
                  <p className="text-xs font-bold text-gray-800 mt-1 text-center whitespace-nowrap">Restaurant</p>
                </div>
                {/* Driver */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg animate-pulse font-bold text-xs">D</div>
                  <p className="text-xs font-bold text-gray-800 mt-1 text-center">Driver</p>
                </div>
                {/* Home pin */}
                <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg font-bold text-xs">H</div>
                  <p className="text-xs font-bold text-gray-800 mt-1 text-center">You</p>
                </div>
                {/* Label */}
                <div className="absolute bottom-3 right-3 bg-white/80 text-xs text-gray-600 px-2 py-1 rounded-lg font-medium">
                  Live tracking map
                </div>
              </div>

              {/* Driver info */}
              <div className="p-4 flex items-center gap-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                  MK
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900">Micha&#322; K. is on the way!</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <StarSVG /> 4.9 &middot; 1,240 deliveries &middot; Honda Dio
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* ETA banner */}
            <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-2xl p-5 text-white flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Estimated arrival</p>
                <p className="text-3xl font-black mt-0.5">~12 minutes</p>
                <p className="text-sm opacity-80 mt-0.5">7:48 PM &ndash; 7:55 PM</p>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
            </div>

            {/* Order items */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4">Your Order</h3>
              {[
                { name: "Margherita Pizza (Medium)", qty: 1 },
                { name: "Garlic Bread", qty: 2 },
                { name: "Tiramisu", qty: 1 },
                { name: "San Pellegrino 750ml", qty: 2 },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3 py-2">
                  <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-500 font-black text-[10px]">FE</span>
                  </div>
                  <span className="text-sm text-gray-700 flex-1">{item.name}</span>
                  <span className="text-xs text-gray-500">&times;{item.qty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tracking timeline */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-1">Order #FE-2024-7842</h3>
              <p className="text-xs text-gray-500 mb-5">Mario&apos;s Pizza Palace &middot; $37.24</p>

              <div className="flex flex-col gap-0">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0
                        ${step.done ? "bg-green-100" : step.active ? "bg-orange-100" : "bg-gray-100"}`}>
                        {step.icon}
                      </div>
                      {i < steps.length - 1 && (
                        <div className={`w-0.5 h-8 mt-1 ${step.done ? "bg-green-300" : "bg-gray-200"}`} />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <p className={`text-sm font-semibold ${step.done ? "text-gray-900" : step.active ? "text-orange-600" : "text-gray-400"}`}>
                        {step.label}
                      </p>
                      <p className={`text-xs mt-0.5 ${step.active ? "text-orange-500 font-medium" : "text-gray-400"}`}>{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 mt-2">
                <button className="w-full py-2.5 text-red-500 border border-red-200 rounded-xl text-sm font-semibold hover:bg-red-50 transition">
                  Cancel Order
                </button>
                <Link href="/order/history" className="block w-full mt-2 py-2.5 text-gray-500 text-sm text-center hover:text-gray-700 transition">
                  View all orders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
