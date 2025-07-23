import { shoppingViewHeaderMenuItems } from "../config/Index";
import { Label } from "./ui/label"


function MenuItems() {
    return ( 
        <nav className="flex justify-between items-center mb-3 max-w-xl mx-auto">
            {
                shoppingViewHeaderMenuItems.map((menuItem) => (
                    <Label key={menuItem.id}>{menuItem.label}</Label>
                ))
            }
        </nav>
     );
}

export default MenuItems;