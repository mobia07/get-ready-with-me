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