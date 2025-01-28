import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import FashionCard from "@/components/FashionCard";

const MOCK_FASHION_DATA = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920",
    creatorName: "Style Maven",
    creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1920",
    likes: 1234,
    comments: 89,
    description: "Street style winter collection #fashion #streetwear",
    tags: ["winter", "streetwear", "casual"]
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1920",
    creatorName: "Fashion Forward",
    creatorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1920",
    likes: 2567,
    comments: 156,
    description: "Summer vibes with this elegant dress #summer #elegant",
    tags: ["summer", "elegant", "dress"]
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920",
    creatorName: "Trend Setter",
    creatorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1920",
    likes: 3890,
    comments: 245,
    description: "Casual spring outfit inspiration #spring #casual",
    tags: ["spring", "casual", "outfit"]
  }
];

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(MOCK_FASHION_DATA);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = MOCK_FASHION_DATA.filter((post) => {
      const searchTerms = query.toLowerCase().split(" ");
      return searchTerms.some(
        (term) =>
          post.description.toLowerCase().includes(term) ||
          post.tags.some((tag) => tag.toLowerCase().includes(term)) ||
          post.creatorName.toLowerCase().includes(term)
      );
    });
    setFilteredPosts(filtered);
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container py-6 px-4">
        <h1 className="text-2xl font-bold mb-6">Discover Fashion</h1>
        
        <div className="relative mb-6">
          <Input
            type="text"
            placeholder="Search fashion styles, trends, or creators..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 pr-4 h-12"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No fashion posts found for "{searchQuery}"
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <FashionCard
                key={post.id}
                imageUrl={post.imageUrl}
                creatorName={post.creatorName}
                creatorAvatar={post.creatorAvatar}
                likes={post.likes}
                comments={post.comments}
                description={post.description}
              />
            ))}
          </div>
        )}
      </div>
      <Navigation />
    </div>
  );
};

export default Discover;