import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Search, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const MOCK_DATA = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    creatorName: "Gucci Style",
    creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    likes: 4321,
    comments: 188,
    description: "Luxury vibes 💫 #gucci #luxury #fashion",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e",
    creatorName: "Prada Fashion",
    creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    likes: 3654,
    comments: 256,
    description: "Elegance in every detail ✨ #prada #luxuryfashion",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    creatorName: "Versace Looks",
    creatorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    likes: 5412,
    comments: 334,
    description: "Bold and beautiful 🌟 #versace #fashion",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2",
    creatorName: "LV Style",
    creatorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    likes: 6876,
    comments: 442,
    description: "Timeless elegance 👜 #louisvuitton #luxury",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    creatorName: "Dior Fashion",
    creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    likes: 4198,
    comments: 267,
    description: "Classic sophistication ⭐ #dior #hautecouture",
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    creatorName: "Chanel Style",
    creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    likes: 5198,
    comments: 367,
    description: "Parisian chic ✨ #chanel #fashion",
  }
];

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<typeof MOCK_DATA[0] | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Search functionality can be implemented here
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-6 px-4">
        <div className="flex items-center justify-between max-w-xl mx-auto gap-4">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search fashion styles, trends, or creators..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-4 h-12 rounded-full bg-white/90 border-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <div className="bg-black/20 px-4 py-2 rounded-lg">
            <h1 className="text-xl font-bold text-white">GRWM</h1>
          </div>
        </div>
      </div>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-16">
          {MOCK_DATA.map((post) => (
            <Sheet key={post.id}>
              <SheetTrigger asChild>
                <div className="aspect-[9/16] relative overflow-hidden rounded-lg cursor-pointer">
                  <img
                    src={post.imageUrl}
                    alt={`Fashion by ${post.creatorName}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={post.creatorAvatar}
                        alt={post.creatorName}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <span className="text-white text-sm font-semibold">{post.creatorName}</span>
                    </div>
                    <p className="text-white text-xs line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <span className="text-white text-xs">❤️ {post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-white text-xs">💬 {post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[100dvh] p-0">
                <div className="relative h-full">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-4 z-10"
                    onClick={() => {
                      const closeButton = document.querySelector('[data-radix-collection-item]') as HTMLButtonElement;
                      if (closeButton) closeButton.click();
                    }}
                  >
                    <ArrowLeft className="h-6 w-6 text-white" />
                  </Button>
                  <img
                    src={post.imageUrl}
                    alt={`Fashion by ${post.creatorName}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={post.creatorAvatar}
                        alt={post.creatorName}
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{post.creatorName}</h3>
                        <p className="text-white/80 text-sm">{post.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <span className="text-white">❤️ {post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white">💬ï¸ {post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default Discover;