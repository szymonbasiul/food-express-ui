import Header from "../../components/Header";
import Link from "next/link";

const savedAddresses = [
  { id: 1, label: "Home", address: "ul. Mokotowska 12/5, 00-641 Warsaw", default: true },
  { id: 2, label: "Work", address: "ul. Marszałkowska 140, 00-061 Warsaw", default: false },
];

export default function CheckoutAddressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="home" cartCount={4} />

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Progress steps */}
        <div className="flex items-center gap-3 mb-8">
          {[
            { step: 1, label: "Delivery", active: true, done: false },
            { step: 2, label: "Payment", active: false, done: false },
            { step: 3, label: "Review", active: false, done: false },
          ].map((s, i) => (
            <div key={s.step} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${s.active ? "bg-orange-500 text-white" : s.done ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}>
                  {s.done ? "✓" : s.step}
                </div>
                <span className={`text-sm font-medium ${s.active ? "text-orange-600" : "text-gray-400"}`}>{s.label}</span>
              </div>
              {i < 2 && <div className="flex-1 h-px bg-gray-200 w-16" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Address form */}
          <div className="col-span-2 flex flex-col gap-4">
            <h1 className="text-xl font-black text-gray-900">Delivery Address</h1>

            {/* Saved addresses */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-3">Saved Addresses</h3>
              <div className="flex flex-col gap-3">
                {savedAddresses.map((addr) => (
                  <label
                    key={addr.id}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition
                      ${addr.default ? "border-orange-400 bg-orange-50" : "border-gray-100 hover:border-gray-200"}`}
                  >
                    <input type="radio" name="address" defaultChecked={addr.default} className="accent-orange-500" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm text-gray-900">{addr.label}</p>
                        {addr.default && <span className="text-xs bg-orange-100 text-orange-600 font-medium px-2 py-0.5 rounded-full">Default</span>}
                      </div>
                      <p className="text-sm text-gray-500 mt-0.5">{addr.address}</p>
                    </div>
                    <button className="text-xs text-gray-400 hover:text-orange-500 transition">Edit</button>
                  </label>
                ))}
              </div>
              <button className="mt-3 w-full py-2.5 border-2 border-dashed border-gray-200 rounded-xl text-sm font-medium text-gray-500 hover:border-orange-300 hover:text-orange-500 transition">
                + Add new address
              </button>
            </div>

            {/* New address form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4">Delivery Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Street address</label>
                  <input defaultValue="ul. Mokotowska 12" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Apt / Floor</label>
                  <input defaultValue="Flat 5, 2nd floor" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Postcode</label>
                  <input defaultValue="00-641" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">City</label>
                  <input defaultValue="Warsaw" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Delivery instructions (optional)</label>
                <textarea defaultValue="Ring doorbell twice. Leave at the door if no answer." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 resize-none h-20" />
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Full name</label>
                  <input defaultValue="John Doe" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Phone number</label>
                  <input defaultValue="+48 600 123 456" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
              {[
                { name: "Margherita Pizza ×1", price: "$16.99" },
                { name: "Garlic Bread ×2", price: "$9.98" },
                { name: "Tiramisu ×1", price: "$8.99" },
                { name: "San Pellegrino ×2", price: "$4.98" },
              ].map((item) => (
                <div key={item.name} className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="truncate mr-2">{item.name}</span>
                  <span className="shrink-0">{item.price}</span>
                </div>
              ))}
              <div className="border-t border-gray-100 mt-3 pt-3 flex flex-col gap-2 text-sm">
                <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>$40.94</span></div>
                <div className="flex justify-between text-gray-600"><span>Delivery</span><span>$2.99</span></div>
                <div className="flex justify-between text-green-600"><span>Discount (FOOD20)</span><span>-$6.69</span></div>
                <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100"><span>Total</span><span>$37.24</span></div>
              </div>
              <Link href="/checkout/payment" className="block w-full mt-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-center transition">
                Continue to Payment →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
