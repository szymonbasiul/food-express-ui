import Header from "../../components/Header";
import Link from "next/link";

const cartItems = [
  { id: 1, name: "Margherita Pizza (Medium)", customization: "Classic crust · Ranch dip", price: 16.99, quantity: 1, emoji: "" },
  { id: 2, name: "Garlic Bread", customization: "Extra butter", price: 4.99, quantity: 2, emoji: "" },
  { id: 3, name: "Tiramisu", customization: "", price: 8.99, quantity: 1, emoji: "" },
  { id: 4, name: "San Pellegrino", customization: "750ml", price: 2.49, quantity: 2, emoji: "" },
];

export default function CartItemsPage() {
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="home" cartCount={cartItems.length} />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/home">Home</Link><span>/</span>
          <span className="text-gray-900 font-medium">Cart</span>
        </div>
        <h1 className="text-2xl font-black text-gray-900 mb-6">Your Cart ({cartItems.length} items)</h1>

        <div className="grid grid-cols-3 gap-6">
          {/* Items */}
          <div className="col-span-2 flex flex-col gap-3">
            {/* Restaurant info */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-red-400 to-orange-500 flex items-center justify-center text-xl">FE</div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Mario&apos;s Pizza Palace</p>
                <p className="text-xs text-gray-500">Delivery · 20-30 min</p>
              </div>
              <Link href="/restaurant/menu-all" className="ml-auto text-sm text-orange-500 font-medium hover:text-orange-600">
                + Add items
              </Link>
            </div>

            {/* Cart items */}
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-3xl shrink-0">
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  {item.customization && (
                    <p className="text-xs text-gray-500 mt-0.5">{item.customization}</p>
                  )}
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1">
                      <button className="w-5 h-5 text-gray-600 font-bold flex items-center justify-center">â’</button>
                      <span className="text-sm font-bold text-gray-900 w-4 text-center">{item.quantity}</span>
                      <button className="w-5 h-5 text-orange-500 font-bold flex items-center justify-center">+</button>
                    </div>
                    <button className="text-xs text-gray-400 hover:text-red-500 transition">Remove</button>
                    <button className="text-xs text-orange-500 hover:text-orange-600 transition">Edit</button>
                  </div>
                </div>
                <p className="font-bold text-gray-900 text-base shrink-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}

            {/* Add more from same restaurant */}
            <Link href="/restaurant/menu-all" className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-4 flex items-center gap-3 text-gray-500 hover:border-orange-300 hover:text-orange-500 transition">
              <div className="w-10 h-10 rounded-xl border-2 border-dashed border-current flex items-center justify-center">
                <span className="text-xl font-bold">+</span>
              </div>
              <span className="text-sm font-medium">Add more items from Mario&apos;s Pizza Palace</span>
            </Link>

            {/* Discount code - link to discount page */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Have a discount code?</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Enter code (e.g. FOOD20)" className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-orange-400" />
                <Link href="/cart/discount" className="px-4 py-2 text-sm font-bold text-orange-600 border border-orange-200 rounded-xl hover:bg-orange-50 transition whitespace-nowrap">
                  Apply
                </Link>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
              <div className="flex flex-col gap-2 text-sm">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-gray-600">
                    <span className="truncate mr-2">{item.name} ×{item.quantity}</span>
                    <span className="shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 mt-4 pt-4 flex flex-col gap-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery fee</span><span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100">
                  <span>Total</span><span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Link href="/checkout/address" className="block w-full mt-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-center transition">
                Checkout · ${total.toFixed(2)}
              </Link>
              <Link href="/restaurants" className="block w-full mt-2 py-2.5 text-gray-500 text-sm text-center hover:text-gray-700 transition">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
