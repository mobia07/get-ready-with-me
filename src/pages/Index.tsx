import FashionCard from "@/components/FashionCard";
import Navigation from "@/components/Navigation";

const MOCK_DATA = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    creatorName: "StyleMaster",
    creatorAvatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    likes: 1234,
    comments: 88,
    description: "Spring collection '24 🌸 #fashion #style #spring",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    creatorName: "Fashionista",
    creatorAvatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    likes: 2341,
    comments: 156,
    description: "Evening vibes ✨ #nightout #fashion",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    creatorName: "TrendSetter",
    creatorAvatar: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    likes: 3412,
    comments: 234,
    description: "Nature-inspired looks 🌿 #sustainable #fashion",
  },
];

const Index = () => {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      {MOCK_DATA.map((post) => (
        <FashionCard key={post.id} {...post} />
      ))}
      <Navigation />
    </main>
  );
};

export default Index;