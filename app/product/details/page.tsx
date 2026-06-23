import Header from "../../components/Header";
import CartSummary from "../../components/CartSummary";
import Link from "next/link";

export default function ProductDetailsPage() {
  const addons = [
    { group: "Size", options: [{ label: 'Small (26cm)', price: 0 }, { label: 'Medium (32cm)', price: 2 }, { label: 'Large (40cm)', price: 4 }] },
    { group: "Crust", options: [{ label: 'Classic', price: 0 }, { label: 'Thin', price: 0 }, { label: 'Stuffed', price: 3 }] },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="restaurants" cartCount={3} />
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/home">Home</Link><span>/</span>
          <Link href="/restaurant/overview">Mario&apos;s Pizza Palace</Link><span>/</span>
          <Link href="/restaurant/menu-pizza">Pizza</Link><span>/</span>
          <span className="text-gray-900 font-medium">Margherita Pizza</span>
        </div>

        <div className="flex gap-6">
          {/* Product detail */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Product image */}
              <div className="h-72 bg-linear-to-br from-red-100 to-orange-200 flex items-center justify-center relative">
                <span className="text-[120px]">FE</span>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">FE</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-black text-gray-900">Margherita Pizza</h1>
                    <p className="text-gray-500 mt-1">Mario&apos;s Pizza Palace · Italian</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-orange-500">$14.99</p>
                    <p className="text-sm text-gray-400 line-through">$17.99</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4 mt-4">
                  {[
                    { label: "Calories", val: "620 kcal" },
                    { label: "Prep time", val: "15-20 min" },
                    { label: "Portions", val: "2-3 servings" },
                    { label: "Rating", val: "4.9" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gray-50 rounded-xl px-3 py-2 text-center">
                      <p className="text-xs text-gray-500">{stat.label}</p>
                      <p className="text-sm font-bold text-gray-900 mt-0.5">{stat.val}</p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="mt-5">
                  <h3 className="font-bold text-gray-900 mb-2">Description</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our classic Margherita is crafted with San Marzano tomato sauce, fresh buffalo mozzarella,
                    fragrant basil leaves, and a drizzle of extra-virgin olive oil. Baked in our wood-fired oven
                    at 485°C for the perfect Neapolitan char. Simple, timeless, perfetto.
                  </p>
                </div>

                {/* Allergens */}
                <div className="mt-5 bg-yellow-50 border border-yellow-100 rounded-xl p-4">
                  <p className="text-sm font-semibold text-yellow-800 mb-1">âš ď¸Ź Allergen info</p>
                  <p className="text-xs text-yellow-700">Contains: Gluten (wheat), Dairy (mozzarella). May contain traces of nuts.</p>
                </div>

                {/* Quick addons */}
                <div className="mt-6">
                  {addons.map((group) => (
                    <div key={group.group} className="mb-4">
                      <p className="font-semibold text-gray-800 mb-2">{group.group}</p>
                      <div className="flex gap-2 flex-wrap">
                        {group.options.map((opt, i) => (
                          <button
                            key={opt.label}
                            className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${i === 1 ? "border-orange-500 bg-orange-50 text-orange-700" : "border-gray-200 text-gray-700 hover:border-orange-300"}`}
                          >
                            {opt.label} {opt.price > 0 && <span className="text-orange-500">+${opt.price}</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quantity + Add to cart */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-3 py-2">
                    <button className="w-7 h-7 rounded-lg bg-white text-gray-700 font-bold text-lg flex items-center justify-center shadow-sm">â’</button>
                    <span className="font-bold text-gray-900 w-5 text-center">1</span>
                    <button className="w-7 h-7 rounded-lg bg-orange-500 text-white font-bold text-lg flex items-center justify-center">+</button>
                  </div>
                  <Link href="/product/addons" className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-center transition">
                    Customize & Add to Cart · $14.99
                  </Link>
                </div>
              </div>
            </div>

            {/* Related items */}
            <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4">Often ordered together</h3>
              <div className="flex gap-3">
                {[
                  { emoji: "", name: "Caesar Salad", price: "$8.99" },
                  { emoji: "", name: "Garlic Bread", price: "$4.99" },
                  { emoji: "", name: "House Red Wine", price: "$9.99" },
                ].map((item) => (
                  <div key={item.name} className="flex-1 bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm font-bold text-orange-500">{item.price}</p>
                    </div>
                    <button className="ml-auto w-7 h-7 bg-orange-500 text-white rounded-full text-sm font-bold flex items-center justify-center">+</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <CartSummary />
        </div>
      </div>
    </div>
  );
}
