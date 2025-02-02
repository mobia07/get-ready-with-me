import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/discover/SearchBar";
import PostGrid from "@/components/discover/PostGrid";

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

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return MOCK_DATA;
    
    const query = searchQuery.toLowerCase().trim();
    return MOCK_DATA.filter(post => 
      post.creatorName.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <main className="container mx-auto p-4">
        <PostGrid posts={filteredPosts} />
      </main>
      <Navigation />
    </div>
  );
};

export default Discover;
