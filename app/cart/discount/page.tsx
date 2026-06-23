import Header from "../../components/Header";
import CartSummary from "../../components/CartSummary";
import Link from "next/link";

const availableCodes = [
  { code: "FOOD20", desc: "20% off orders over $25", discount: 20, type: "percent", expires: "Today only" },
  { code: "FREESHIP", desc: "Free delivery on any order", discount: 2.99, type: "flat", expires: "3 days left" },
  { code: "NEWUSER", desc: "$5 off your first order", discount: 5.00, type: "flat", expires: "One time use" },
];

export default function CartDiscountPage() {
  const subtotal = 33.45;
  const deliveryFee = 2.99;
  const discount = 6.69;
  const total = subtotal + deliveryFee - discount;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="home" cartCount={4} />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/home">Home</Link><span>/</span>
          <Link href="/cart/items">Cart</Link><span>/</span>
          <span className="text-gray-900 font-medium">Discount Code</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 mb-6">Apply Discount Code</h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 flex flex-col gap-4">
            {/* Active code */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-green-800">Code applied: FOOD20</p>
                  <p className="text-sm text-green-700">20% off — You save $6.69!</p>
                </div>
                <button className="ml-auto text-green-600 hover:text-green-800 font-medium text-sm">Remove</button>
              </div>
            </div>

            {/* Input */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-3">Enter a different code</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  defaultValue="FOOD20"
                  className="flex-1 px-4 py-2.5 text-sm border border-orange-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
                <button className="px-5 py-2.5 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl transition">
                  Apply
                </button>
              </div>
            </div>

            {/* Available codes */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4">Available for you</h3>
              <div className="flex flex-col gap-3">
                {availableCodes.map((c) => (
                  <div
                    key={c.code}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition cursor-pointer
                      ${c.code === "FOOD20" ? "border-green-400 bg-green-50" : "border-gray-100 hover:border-orange-200"}`}
                  >
                    <div className="bg-orange-100 rounded-lg px-3 py-2 font-black text-orange-600 text-sm tracking-widest">
                      {c.code}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">{c.desc}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{c.expires}</p>
                    </div>
                    {c.code === "FOOD20" ? (
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">Applied ✓</span>
                    ) : (
                      <button className="text-sm font-bold text-orange-500 hover:text-orange-600 transition">Use</button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <CartSummary discountCode="FOOD20" discountAmount={6.69} />
            <Link href="/checkout/address" className="block w-full mt-3 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-center transition">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
