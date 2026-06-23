import Header from "../../components/Header";
import CartSummary from "../../components/CartSummary";
import Link from "next/link";

export default function ProductAddonsPage() {
  const addonGroups = [
    {
      title: "Size",
      required: true,
      options: [
        { label: "Small (26cm)", desc: "Serves 1-2", price: 0, selected: false },
        { label: "Medium (32cm)", desc: "Serves 2-3", price: 2.00, selected: true },
        { label: "Large (40cm)", desc: "Serves 3-4", price: 4.00, selected: false },
      ],
    },
    {
      title: "Crust Type",
      required: true,
      options: [
        { label: "Classic", desc: "Traditional Neapolitan", price: 0, selected: true },
        { label: "Thin & Crispy", desc: "Roman style", price: 0, selected: false },
        { label: "Stuffed Crust", desc: "Mozzarella filled edges", price: 3.00, selected: false },
      ],
    },
    {
      title: "Extra Toppings",
      required: false,
      options: [
        { label: "Extra Mozzarella", desc: "Double cheese", price: 1.50, selected: true },
        { label: "Prosciutto Crudo", desc: "Premium Italian ham", price: 3.00, selected: false },
        { label: "Fresh Truffle", desc: "Black truffle shavings", price: 5.00, selected: false },
        { label: "Spicy Salami", desc: "Calabrian nduja", price: 2.00, selected: false },
        { label: "Olives", desc: "Kalamata olives", price: 1.00, selected: false },
        { label: "Jalapeños", desc: "Fresh or pickled", price: 0.50, selected: false },
      ],
    },
    {
      title: "Dipping Sauce",
      required: false,
      options: [
        { label: "Garlic Butter", desc: "Classic", price: 0, selected: false },
        { label: "Marinara", desc: "Spiced tomato", price: 0, selected: false },
        { label: "Ranch", desc: "Creamy herb", price: 0, selected: true },
        { label: "Truffle Aioli", desc: "Black truffle mayo", price: 1.00, selected: false },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="restaurants" cartCount={3} />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/home">Home</Link><span>/</span>
          <Link href="/restaurant/overview">Mario&apos;s Pizza Palace</Link><span>/</span>
          <Link href="/product/details">Margherita Pizza</Link><span>/</span>
          <span className="text-gray-900 font-medium">Customize</span>
        </div>

        <div className="flex gap-6">
          <div className="flex-1">
            {/* Product header */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-red-100 to-orange-200 flex items-center justify-center text-3xl shrink-0">
                FE
              </div>
              <div>
                <h1 className="text-lg font-black text-gray-900">Margherita Pizza</h1>
                <p className="text-sm text-gray-500">Customize your order</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-xl font-black text-orange-500">$18.49</p>
                <p className="text-xs text-gray-400">Base: $14.99 + extras</p>
              </div>
            </div>

            {/* Addon groups */}
            <div className="flex flex-col gap-4">
              {addonGroups.map((group) => (
                <div key={group.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-bold text-gray-900">{group.title}</h3>
                    {group.required && (
                      <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">Required</span>
                    )}
                    {!group.required && (
                      <span className="text-xs bg-gray-100 text-gray-500 font-medium px-2 py-0.5 rounded-full">Optional</span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {group.options.map((opt) => (
                      <label
                        key={opt.label}
                        className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition
                          ${opt.selected ? "border-orange-400 bg-orange-50" : "border-gray-100 hover:border-gray-200"}`}
                      >
                        <input
                          type={group.required ? "radio" : "checkbox"}
                          defaultChecked={opt.selected}
                          name={group.title}
                          className="w-4 h-4 accent-orange-500"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-800">{opt.label}</p>
                          <p className="text-xs text-gray-500">{opt.desc}</p>
                        </div>
                        {opt.price > 0 ? (
                          <span className="text-sm font-bold text-orange-500">+${opt.price.toFixed(2)}</span>
                        ) : (
                          <span className="text-sm text-gray-400">Free</span>
                        )}
                        {opt.selected && (
                          <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Special instructions */}
            <div className="mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-3">Special Instructions</h3>
              <textarea
                className="w-full h-20 px-4 py-3 text-sm border border-gray-200 rounded-xl resize-none focus:outline-none focus:border-orange-400 placeholder-gray-400"
                placeholder="Any special requests? (e.g. no onions, extra sauce, gluten-free)"
              />
            </div>

            {/* Add to cart */}
            <div className="mt-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 sticky bottom-4">
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-3 py-2">
                <button className="w-7 h-7 rounded-lg bg-white text-gray-700 font-bold text-lg flex items-center justify-center shadow-sm">â’</button>
                <span className="font-bold text-gray-900 w-5 text-center">1</span>
                <button className="w-7 h-7 rounded-lg bg-orange-500 text-white font-bold text-lg flex items-center justify-center">+</button>
              </div>
              <Link href="/cart/items" className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-center transition">
                Add to Cart · $18.49
              </Link>
            </div>
          </div>

          <CartSummary />
        </div>
      </div>
    </div>
  );
}
