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
    description: "#SpringVibes 🌸",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    creatorName: "Fashionista",
    creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    likes: 2341,
    comments: 156,
    description: "#NightOutfit ✨",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    creatorName: "TrendSetter",
    creatorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    likes: 3412,
    comments: 234,
    description: "#SustainableFashion 🌿",
  }
];

const OOTD = () => {
  return (
    <div className="h-screen bg-background overflow-y-scroll snap-y snap-mandatory">
      {MOCK_DATA.map((post) => (
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
      <Navigation />
    </div>
  );
};

export default OOTD;