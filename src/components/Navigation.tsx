import { Home, Search, PlusSquare, Heart, User, Shirt } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center">
        <Link to="/" className="flex flex-col items-center gap-1">
          <Home className={`w-6 h-6 ${isActive("/") ? "text-primary" : ""}`} />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/discover" className="flex flex-col items-center gap-1">
          <Search className={`w-6 h-6 ${isActive("/discover") ? "text-primary" : ""}`} />
          <span className="text-xs">Discover</span>
        </Link>
        <Link to="/post" className="flex flex-col items-center gap-1">
          <PlusSquare className={`w-6 h-6 ${isActive("/post") ? "text-primary" : ""}`} />
          <span className="text-xs">Post</span>
        </Link>
        <Link to="/ootd" className="flex flex-col items-center gap-1">
          <Shirt className={`w-6 h-6 ${isActive("/ootd") ? "text-primary" : ""}`} />
          <span className="text-xs">OOTD</span>
        </Link>
        <Link to="/activity" className="flex flex-col items-center gap-1">
          <Heart className={`w-6 h-6 ${isActive("/activity") ? "text-primary" : ""}`} />
          <span className="text-xs">Activity</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center gap-1">
          <User className={`w-6 h-6 ${isActive("/profile") ? "text-primary" : ""}`} />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;