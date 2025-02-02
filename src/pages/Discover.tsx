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
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc",
    creatorName: "Balenciaga Vibes",
    creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    likes: 3298,
    comments: 167,
    description: "Street style done right 🔥 #balenciaga #streetwear",
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    creatorName: "Fendi Fashion",
    creatorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    likes: 4521,
    comments: 289,
    description: "Luxury in every detail ✨ #fendi #fashion",
  },
  {
    id: 9,
    imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    creatorName: "YSL Style",
    creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    likes: 5167,
    comments: 312,
    description: "Parisian elegance 🌟 #ysl #luxury",
  },
  {
    id: 10,
    imageUrl: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e",
    creatorName: "Hermès Collection",
    creatorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    likes: 6234,
    comments: 423,
    description: "Timeless sophistication 👜 #hermes #luxuryfashion",
  },
  {
    id: 11,
    imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93",
    creatorName: "Bottega Style",
    creatorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    likes: 3876,
    comments: 198,
    description: "Modern luxury redefined ⭐ #bottegaveneta #fashion",
  },
  {
    id: 12,
    imageUrl: "https://images.unsplash.com/photo-1475180098004-ca77a66827be",
    creatorName: "Celine Fashion",
    creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    likes: 4432,
    comments: 276,
    description: "Minimalist chic ✨ #celine #minimalism",
  },
  {
    id: 13,
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    creatorName: "Miu Miu Style",
    creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    likes: 5123,
    comments: 345,
    description: "Playful elegance 🎀 #miumiu #fashion",
  },
  {
    id: 14,
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    creatorName: "Valentino Looks",
    creatorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    likes: 4789,
    comments: 289,
    description: "Romantic couture 🌹 #valentino #hautecouture",
  },
  {
    id: 15,
    imageUrl: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7",
    creatorName: "Burberry Style",
    creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    likes: 5234,
    comments: 312,
    description: "British heritage ✨ #burberry #fashion",
  },
  {
    id: 16,
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    creatorName: "Alexander McQueen",
    creatorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    likes: 6123,
    comments: 423,
    description: "Avant-garde fashion 🖤 #mcqueen #fashion",
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
    <div className="h-screen flex flex-col bg-background">
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-4">
          <PostGrid posts={filteredPosts} />
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default Discover;