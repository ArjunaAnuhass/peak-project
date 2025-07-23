import {
  MessageCircle,
  MapPin,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import MenuItems from "./MenuItems";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <div className="text-5xl font-bold text-gray-800">Peak</div>
      <div className="flex flex-1 mx-6 max-w-2xl">
        <select className="border border-gray-300 px-3 py-2 bg-gray-100 text-sm">
          <option>All</option>
        </select>
        <input
          type="text"
          placeholder="Find your next superfood obsession..."
          className="w-full border-t border-b border-gray-300 px-4 py-2 text-sm focus:outline-none"
        />
        <button className="bg-green-600 px-4 py-2 text-white">
          <Search size={16} />
        </button>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-700">
        <div className="hidden lg:flex items-cente justify-betweenr">
          <MapPin size={30} />
          <div className="flex flex-col ml-1">
            <span>STORE LOCATOR</span>
            <span className="text-xs mr-7">Click & Collect today.</span>
          </div>
        </div>
        <div className="flex gap-6">
          <User size={24} className="cursor-pointer" />
          <MessageCircle size={24} className="cursor-pointer" />
          <ShoppingCart size={24} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
