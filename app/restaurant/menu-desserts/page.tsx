import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import FoodCard from "../../components/FoodCard";
import CartSummary from "../../components/CartSummary";
import Link from "next/link";

const desserts = [
  { name: "New York Cheesecake", description: "Classic NY style with berry coulis", price: 7.99, calories: 480, imageColor: "from-pink-100 to-purple-100", popular: true },
  { name: "Tiramisu", description: "Classic Italian with mascarpone and espresso", price: 8.99, calories: 420, imageColor: "from-amber-100 to-brown-100", badge: "Chef's Fav" },
  { name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center, vanilla ice cream", price: 9.99, calories: 540, imageColor: "from-stone-100 to-gray-100" },
  { name: "CrĂ¨me BrĂ»lĂ©e", description: "Classic French with caramelized sugar top", price: 7.49, calories: 320, imageColor: "from-yellow-100 to-amber-100" },
  { name: "Gelato (3 scoops)", description: "Choice of pistachio, stracciatella, or strawberry", price: 6.99, calories: 280, imageColor: "from-green-100 to-teal-100" },
  { name: "Cannoli (2 pcs)", description: "Ricotta filled Sicilian pastry with chocolate chips", price: 6.49, calories: 360, imageColor: "from-amber-100 to-orange-100" },
];

const menuTabs = [
  { key: "all", label: "All", href: "/restaurant/menu-all" },
  { key: "pizza", label: "Pizza", href: "/restaurant/menu-pizza" },
  { key: "burgers", label: "Burgers", href: "/restaurant/menu-burgers" },
  { key: "sushi", label: "Sushi", href: "/restaurant/menu-sushi" },
  { key: "desserts", label: "Desserts", href: "/restaurant/menu-desserts", active: true },
  { key: "drinks", label: "Drinks", href: "/restaurant/menu-drinks" },
];

export default function MenuDessertsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="restaurants" cartCount={3} />
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/home">Home</Link><span>/</span>
          <Link href="/restaurants">Restaurants</Link><span>/</span>
          <Link href="/restaurant/overview">Mario&apos;s Pizza Palace</Link><span>/</span>
          <span className="text-gray-900 font-medium">Desserts</span>
        </div>
        <div className="flex gap-6">
          <Sidebar activeCategory="desserts" />
          <div className="flex-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-pink-400 to-purple-500 flex items-center justify-center text-2xl">FE</div>
                <div>
                  <p className="font-bold text-gray-900">Mario&apos;s Pizza Palace</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>4.8</span><span>20-30 min</span><span>$2.99 delivery</span>
                  </div>
                </div>
              </div>
              <Link href="/restaurant/overview" className="text-sm text-orange-500 font-medium">View info</Link>
            </div>
            <div className="bg-linear-to-r from-pink-500 to-purple-500 rounded-2xl p-5 mb-5 flex items-center gap-4 text-white">
              <span className="text-5xl">FE</span>
              <div>
                <p className="font-black text-lg">Authentic Italian Desserts</p>
                <p className="text-sm opacity-80">House-made daily · Traditional recipes</p>
              </div>
            </div>
            <div className="flex gap-2 mb-6 flex-wrap">
              {menuTabs.map((tab) => (
                <Link key={tab.key} href={tab.href} className={`px-4 py-2 rounded-xl text-sm font-medium transition ${tab.active ? "bg-orange-500 text-white" : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`}>
                  {tab.label}
                </Link>
              ))}
            </div>
            <h2 className="font-bold text-gray-900 mb-4">Desserts ({desserts.length} items)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {desserts.map((item) => <FoodCard key={item.name} {...item} />)}
            </div>
          </div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
