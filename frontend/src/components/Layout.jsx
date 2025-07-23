import AnnouncementBar from "./AnnouncementBar";
import ConstantBanner from "./ConstantBanner";
import Header from "./Header";
import MenuItems from "./MenuItems";

function Layout() {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <MenuItems />
      <ConstantBanner/>
    </div>
  );
}

export default Layout;
