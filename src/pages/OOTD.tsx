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
    description: "#SpringVibes 🌸 #CasualChic",
    clothingItems: [
      {
        name: "Oversized Cotton T-Shirt",
        brand: "Uniqlo",
        position: {
          top: "20%",
          left: "20%",
          width: "30%",
          height: "20%"
        }
      },
      {
        name: "High-Waisted Jeans",
        brand: "Levi's",
        position: {
          top: "45%",
          left: "20%",
          width: "30%",
          height: "30%"
        }
      },
      {
        name: "Classic Sneakers",
        brand: "Nike",
        position: {
          top: "80%",
          left: "20%",
          width: "20%",
          height: "15%"
        }
      }
    ]
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    creatorName: "Fashionista",
    creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    likes: 2341,
    comments: 156,
    description: "#NightOutfit ✨ #PartyLook",
    clothingItems: [
      {
        name: "Sequin Dress",
        brand: "Zara",
        position: {
          top: "20%",
          left: "20%",
          width: "40%",
          height: "50%"
        }
      },
      {
        name: "Crystal Necklace",
        brand: "Swarovski",
        position: {
          top: "15%",
          left: "30%",
          width: "20%",
          height: "10%"
        }
      },
      {
        name: "Stiletto Heels",
        brand: "Jimmy Choo",
        position: {
          top: "75%",
          left: "20%",
          width: "20%",
          height: "20%"
        }
      }
    ]
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
          clothingItems={post.clothingItems}
        />
      ))}
      <Navigation />
    </div>
  );
};

export default OOTD;