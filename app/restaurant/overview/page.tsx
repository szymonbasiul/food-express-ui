import Header from "../../components/Header";
import CartSummary from "../../components/CartSummary";
import Link from "next/link";

const menuCategories = [
  { key: "all", label: "All", href: "/restaurant/menu-all" },
  { key: "pizza", label: "Pizza", href: "/restaurant/menu-pizza" },
  { key: "burgers", label: "Burgers", href: "/restaurant/menu-burgers" },
  { key: "sushi", label: "Sushi", href: "/restaurant/menu-sushi" },
  { key: "desserts", label: "Desserts", href: "/restaurant/menu-desserts" },
  { key: "drinks", label: "Drinks", href: "/restaurant/menu-drinks" },
];

const reviews = [
  { name: "Sarah M.", rating: 5, text: "Amazing pizza! The Margherita is to die for. Delivery was super fast.", date: "2 days ago", avatar: "SM" },
  { name: "Tom K.", rating: 4, text: "Great food, always fresh. The pasta is excellent. Could improve packaging.", date: "1 week ago", avatar: "TK" },
  { name: "Anna P.", rating: 5, text: "Best Italian in the city! We order every Friday.", date: "2 weeks ago", avatar: "AP" },
];

export default function RestaurantOverviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="restaurants" cartCount={3} />

      {/* Hero banner */}
      <div className="bg-linear-to-r from-red-500 to-orange-600 h-56 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 text-[200px]">FE</div>
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/40 to-transparent h-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Restaurant info card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 -mt-10 relative z-10 p-6 mb-6 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-red-400 to-orange-500 flex items-center justify-center text-4xl shrink-0">
              FE
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-black text-gray-900">Mario&apos;s Pizza Palace</h1>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">Open</span>
              </div>
              <p className="text-gray-500 mt-0.5">Italian · Pizza · Pasta · $$</p>
              <div className="flex items-center gap-4 mt-3 text-sm">
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-yellow-400 fill-current shrink-0" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span className="font-bold">4.8</span>
                  <span className="text-gray-400">(1,240 reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  20-30 min
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                  </svg>
                  $2.99 delivery
                </div>
                <div className="text-gray-600">Min. order: $15</div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Info tabs */}
        <div className="flex gap-1 mb-6 bg-white rounded-xl border border-gray-100 p-1 w-fit shadow-sm">
          {["Menu", "Info", "Reviews"].map((tab, i) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${i === 0 ? "bg-orange-500 text-white" : "text-gray-600 hover:text-gray-900"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex gap-6 pb-10">
          {/* Left: info + reviews */}
          <div className="flex-1">
            {/* About */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
              <h2 className="font-bold text-gray-900 mb-3">About</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mario&apos;s Pizza Palace has been serving authentic Neapolitan pizza in Warsaw since 2008.
                Using traditional recipes from Naples, our pizzas are made with imported Italian ingredients
                and baked in a wood-fired oven. Come for the pizza, stay for the experience.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { label: "Address", val: "ul. Marszałkowska 45, Warsaw" },
                  { label: "Hours", val: "Mon-Sun: 11:00 - 23:00" },
                  { label: "Phone", val: "+48 22 123 456 789" },
                  { label: "Website", val: "marioispizza.pl" },
                ].map((info) => (
                  <div key={info.label} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-orange-500 font-black text-[8px]">FE</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{info.label}</p>
                      <p className="text-sm text-gray-700 font-medium">{info.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Menu preview */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">Menu Categories</h2>
                  <Link href="/restaurant/menu-all" className="text-sm text-orange-500 font-semibold">View all -&gt;</Link>
                </div>
              <div className="flex gap-2 flex-wrap">
                {menuCategories.map((cat) => (
                  <Link key={cat.key} href={cat.href} className="px-4 py-2 bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-700 rounded-xl text-sm font-medium transition">
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900">Reviews</h2>
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-yellow-400 fill-current shrink-0" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span className="font-bold text-gray-900">4.8</span>
                  <span className="text-gray-400 text-sm">(1,240)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {reviews.map((rev) => (
                  <div key={rev.name} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-orange-400 to-red-400 flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">{rev.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-sm text-gray-900">{rev.name}</p>
                        <p className="text-xs text-gray-400">{rev.date}</p>
                      </div>
                      <div className="text-yellow-400 text-xs mt-0.5">
                        {([...Array(5)]).map((_, i) => (
                          <svg key={i} className={`w-3 h-3 fill-current ${i < rev.rating ? "text-yellow-400" : "text-gray-200"}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{rev.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart summary */}
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
