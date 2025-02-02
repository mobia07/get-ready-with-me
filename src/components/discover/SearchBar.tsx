import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className="bg-primary py-6 px-4">
      <div className="flex items-center justify-between max-w-xl mx-auto gap-4">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search fashion styles, trends, or creators..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 h-12 rounded-full bg-white/90 border-none"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <div className="bg-black/20 px-4 py-2 rounded-lg">
          <h1 className="text-xl font-bold text-white">GRWM</h1>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;