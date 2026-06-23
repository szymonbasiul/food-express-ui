import Link from "next/link";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
  emoji: string;
};

type CartSummaryProps = {
  items?: CartItem[];
  discountCode?: string;
  discountAmount?: number;
};

const defaultItems: CartItem[] = [
  { name: "Margherita Pizza", price: 14.99, quantity: 1, emoji: "🍕" },
  { name: "Garlic Bread", price: 4.99, quantity: 2, emoji: "🥖" },
  { name: "Cola 0.5L", price: 2.99, quantity: 1, emoji: "🥤" },
];

export default function CartSummary({
  items = defaultItems,
  discountCode,
  discountAmount = 0,
}: CartSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee - discountAmount;

  return (
    <div className="w-72 shrink-0">
      <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-900">Your Cart</h3>
          <p className="text-xs text-gray-500 mt-0.5">{items.reduce((s, i) => s + i.quantity, 0)} items</p>
        </div>

        {/* Items */}
        <div className="px-5 py-3 flex flex-col gap-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-lg shrink-0">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                <p className="text-xs text-gray-500">${item.price.toFixed(2)} × {item.quantity}</p>
              </div>
              <span className="text-sm font-semibold text-gray-900 shrink-0">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* Discount code */}
        {discountCode ? (
          <div className="mx-5 mb-3 flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-3 py-2">
            <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <div className="flex-1">
              <p className="text-xs font-semibold text-green-700">{discountCode}</p>
              <p className="text-xs text-green-600">-${discountAmount.toFixed(2)} saved</p>
            </div>
            <button className="text-green-500 hover:text-green-700 text-xs">✕</button>
          </div>
        ) : (
          <div className="mx-5 mb-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Discount code"
                className="flex-1 px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-orange-400"
              />
              <button className="px-3 py-2 text-xs font-semibold text-orange-600 border border-orange-200 rounded-xl hover:bg-orange-50">
                Apply
              </button>
            </div>
          </div>
        )}

        {/* Totals */}
        <div className="px-5 py-3 border-t border-gray-100 flex flex-col gap-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Delivery fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          {discountAmount > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Discount</span>
              <span>-${discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-gray-900 pt-2 border-t border-gray-100">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="px-5 pb-5">
          <Link
            href="/checkout/address"
            className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold text-center rounded-xl transition"
          >
            Proceed to Checkout →
          </Link>
        </div>
      </div>
    </div>
  );
}
