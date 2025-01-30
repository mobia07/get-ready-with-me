import FashionCard from "@/components/FashionCard";
import Navigation from "@/components/Navigation";

const MOCK_DATA = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    creatorName: "StyleMaster",
    creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    likes: 1234,
    comments: 88,
    description: "Spring collection '24 🌸 #fashion #style #spring",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    creatorName: "Fashionista",
    creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    likes: 2341,
    comments: 156,
    description: "Evening vibes ✨ #nightout #fashion",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    creatorName: "TrendSetter",
    creatorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    likes: 3412,
    comments: 234,
    description: "Nature-inspired looks 🌿 #sustainable #fashion",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    creatorName: "MinimalistFashion",
    creatorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    likes: 1876,
    comments: 142,
    description: "Clean lines and simple elegance 🤍 #minimal #fashion",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    creatorName: "UrbanStyle",
    creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    likes: 2198,
    comments: 167,
    description: "Urban chic vibes 🌆 #streetwear #fashion",
  }
];

// Helper function to get random grid span classes
const getRandomSpan = (index: number) => {
  // Predefined patterns to ensure a nice layout
  const patterns = [
    { cols: "col-span-2", rows: "row-span-2" }, // Large square
    { cols: "col-span-1", rows: "row-span-2" }, // Vertical rectangle
    { cols: "col-span-2", rows: "row-span-1" }, // Horizontal rectangle
    { cols: "col-span-1", rows: "row-span-1" }, // Small square
  ];

  // Use modulo to cycle through patterns
  return patterns[index % patterns.length];
};

const Index = () => {
  return (
    <main className="min-h-screen w-full overflow-y-scroll p-4">
      <div className="grid grid-cols-4 md:grid-cols-6 auto-rows-[200px] gap-4 pb-16">
        {MOCK_DATA.map((post, index) => {
          const span = getRandomSpan(index);
          return (
            <div 
              key={post.id} 
              className={`relative overflow-hidden rounded-lg ${span.cols} ${span.rows}`}
            >
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
          );
        })}
      </div>
      <Navigation />
    </main>
  );
};

export default Index;