import MobileBottomNav from "../../components/MobileBottomNav";
import Link from "next/link";

const cartItems = [
  { id: 1, emoji: "", name: "Margherita Pizza (M)", customization: "Classic crust", price: 16.99, quantity: 1 },
  { id: 2, emoji: "", name: "Garlic Bread", customization: "Extra butter", price: 4.99, quantity: 2 },
  { id: 3, emoji: "", name: "Tiramisu", customization: "", price: 8.99, quantity: 1 },
];

export default function MobileCartPage() {
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const delivery = 2.99;
  const total = subtotal + delivery;

  return (
    <div className="w-96 mx-auto min-h-screen bg-gray-50 flex flex-col pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Link href="/mobile/restaurant-details" className="text-gray-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-lg font-black text-gray-900 flex-1">My Cart</h1>
          <span className="text-sm text-gray-500">{cartItems.reduce((s, i) => s + i.quantity, 0)} items</span>
        </div>
      </div>

      <div className="flex-1 px-4 py-4 overflow-y-auto">
        {/* Restaurant info */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center text-xl">FE</div>
          <div>
            <p className="font-bold text-sm text-gray-900">Mario&apos;s Pizza Palace</p>
            <p className="text-xs text-gray-500">20-30 min · Free delivery</p>
          </div>
          <Link href="/mobile/menu-all" className="ml-auto text-xs text-orange-500 font-semibold">+ Add</Link>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-3 mb-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-2xl shrink-0">{item.emoji}</div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-gray-900 truncate">{item.name}</p>
                {item.customization && <p className="text-xs text-gray-500 mt-0.5">{item.customization}</p>}
                <p className="text-sm font-bold text-orange-500 mt-1">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-2 py-1.5">
                <button className="w-6 h-6 flex items-center justify-center text-gray-600 font-bold">â’</button>
                <span className="text-sm font-bold text-gray-900 w-4 text-center">{item.quantity}</span>
                <button className="w-6 h-6 flex items-center justify-center text-orange-500 font-bold">+</button>
              </div>
            </div>
          ))}
        </div>

        {/* Discount code */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <div className="flex gap-2">
            <input placeholder="Discount code" className="flex-1 px-4 py-2.5 bg-gray-50 rounded-xl text-sm border border-gray-200 focus:outline-none focus:border-orange-400" />
            <button className="px-4 py-2.5 text-sm font-bold text-orange-600 border border-orange-200 rounded-xl hover:bg-orange-50 transition">Apply</button>
          </div>
        </div>

        {/* Order summary */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <h3 className="font-bold text-gray-900 mb-3">Order Summary</h3>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between text-gray-600"><span>Delivery fee</span><span>${delivery.toFixed(2)}</span></div>
            <div className="flex justify-between font-black text-gray-900 text-base pt-2 border-t border-gray-100"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>
        </div>
      </div>

      {/* Checkout button */}
      <div className="bg-white border-t border-gray-100 px-4 py-4">
        <Link href="/mobile/checkout" className="block w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl text-center text-base transition">
          Proceed to Checkout · ${total.toFixed(2)}
        </Link>
      </div>

      <MobileBottomNav active="cart" cartCount={cartItems.length} />
    </div>
  );
}
