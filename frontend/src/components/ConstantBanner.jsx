import { ShieldCheck, Truck, MessageCircle, Tags } from "lucide-react";

function ConstantBanner() {
  return (
    <div className="bg-secondary">
    <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
      <div className="hidden lg:flex items-center justify-between">
      <ShieldCheck className="mb-4" size={24} />
        <div className="flex flex-col ml-5">
        <span className="text-xs font-bold mb-2">WELL TRUSTED</span>
          <span className="text-xs mr-7">Over 100k customers</span>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-between">
        <Truck className="mb-4" size={24} />
        <div className="flex flex-col ml-5">
          <span className="text-xs font-bold mb-2">SUPER FAST</span>
          <span className="text-xs mr-7">With Express delivery</span>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-between">
        <MessageCircle className="mb-4" size={24} />
        <div className="flex flex-col ml-5">
          <span className="text-xs font-bold mb-2">EXPERT HELP</span>
          <span className="text-xs mr-7">Seven days a week</span>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-between">
        <Tags className="mb-4" size={24} />
        <div className="flex flex-col ml-5">
          <span className="text-xs font-bold mb-2">BEST PRICES</span>
          <span className="text-xs mr-7">Unbeatable value</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ConstantBanner;
