import { shoppingViewHeaderMenuItems } from "../config/Index";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

function MenuItems() {
  return (
    <NavigationMenu className="flex justify-center items-center mb-3 max-w-6xl mx-auto">
      <NavigationMenuList className="flex items-center space-x-5 text-[14px] font-normal">
        {shoppingViewHeaderMenuItems.map((item) =>
          item.label === "Home" ? (
            <NavigationMenuItem key={item.id}>{item.label}</NavigationMenuItem>
          ) : null
        )}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-white hover:text-customGreen text-[14px] font-normal cursor-pointer">
            {shoppingViewHeaderMenuItems[1].label}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white mt-3">
            <div className="max-w-7xl mx-auto flex gap-10">
              <div className="grid gap-10">
                <div className="flex flex-col min-w-[200px]">
                  <h4 className="text-sm font-semibold">Vitamins & Minerals</h4>
                  <ul className="mt-2 font-light text-sm text-[12px] space-y-3">
                    <li>Fibre Fuel Smoothie Boost</li>
                    <li>Omega 3 DHA Capsules</li>
                    <li>TrueFuel Protein Milkshake</li>
                    <li>High Strength Turmeric</li>
                    <li>Fibre Fuel Smoothie Berry</li>
                  </ul>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col min-w-[200px]">
                    <h4 className="text-sm font-semibold">Bars</h4>
                    <ul className="mt-2 font-light text-sm text-[12px] space-y-3">
                      <li>Botniq Cereal Bar</li>
                      <li>Ripe Caramel Protein Bar</li>
                      <li>Ripple Peanut Booster</li>
                      <li>Summit Bar Vanilla</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid gap-10">
                <div className="flex flex-col min-w-[200px]">
                  <h4 className="text-sm font-semibold mb-2">Nutrition</h4>
                  <ul className="mt-2 font-light text-sm text-[12px] space-y-3">
                    <li>Live Probiotic Course</li>
                    <li>GlowWell Hair, Skin & Nails</li>
                    <li>Sunvies Acai Powder</li>
                    <li>Fibre Fuel Smoothie Boost</li>
                    <li>High Protein Cereal Cinnamon</li>
                    <li>Essential FairTrade Bananas</li>
                  </ul>
                </div>
                <div className="flex flex-col min-w-[200px]">
                  <h4 className="text-sm font-semibold mb-2">Cereal</h4>
                  <ul className="mt-2 font-light text-sm text-[12px] space-y-3">
                    <li>High Protein Cereal Cinnamon</li>
                    <li>Renew Cereal - Cinnamon</li>
                    <li>Summit Bar Vanilla & Almond</li>
                    <li>Botaniq Cereal Bar</li>
                  </ul>
                </div>
              </div>
              <div className="grid gap-10">
                <div className="grid flex-col min-w-[200px]">
                  <h4 className="text-sm font-semibold">Drinks</h4>
                  <ul className="mt-2 font-light text-sm text-[12px] space-y-3">
                    <li>Coconut Water</li>
                    <li>Fevert Organic Craft Cider</li>
                    <li>Sunny Mango Lemonade</li>
                    <li>Vina Del Ria Wine</li>
                    <li>No Caffeine Coffee Alternative</li>
                    <li>Omega 3 DHA</li>
                  </ul>
                </div>
                <div className="flex flex-col min-w-[200px]">
                  <h4 className="text-sm font-semibold">Fruits & Vegetables</h4>
                  <ul className="mt-2 font-light text-sm text-[12px] space-y-3">
                    <li>Blush Pears Loose</li>
                    <li>Broccoli Crown</li>
                    <li>Classic Vine Tomatoes</li>
                    <li>Easy Peeler Orange</li>
                    <li>FairTrade Bananas</li>
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-white hover:text-customGreen text-[14px] font-normal cursor-pointer">
            {shoppingViewHeaderMenuItems[2].label}
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        {shoppingViewHeaderMenuItems.slice(3).map((item) => (
          <NavigationMenuItem key={item.id}>{item.label}</NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MenuItems;
