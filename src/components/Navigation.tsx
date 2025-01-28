import { Home, Search, PlusSquare, Heart, User } from "lucide-react";

const Navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center">
        <button className="flex flex-col items-center gap-1">
          <Home className="w-6 h-6 text-primary" />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Search className="w-6 h-6" />
          <span className="text-xs">Discover</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <PlusSquare className="w-6 h-6" />
          <span className="text-xs">Post</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Heart className="w-6 h-6" />
          <span className="text-xs">Activity</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;