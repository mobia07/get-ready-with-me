import { useState } from "react";
import SocialActions from "./ootd/SocialActions";
import CreatorInfo from "./ootd/CreatorInfo";
import ClothingOverlay from "./ootd/ClothingOverlay";
import CommentsDialog from "./ootd/CommentsDialog";

interface ClothingItem {
  name: string;
  brand: string;
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

interface FashionCardProps {
  imageUrl: string;
  creatorName: string;
  creatorAvatar: string;
  likes: number;
  comments: number;
  description: string;
  clothingItems: ClothingItem[];
}

const MOCK_COMMENTS = [
  {
    id: 1,
    user: "Sarah",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    comment: "Love this outfit! 😍",
    timestamp: "2h ago"
  },
  {
    id: 2,
    user: "Mike",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    comment: "Where can I get that jacket?",
    timestamp: "1h ago"
  }
];

const FashionCard = ({
  imageUrl,
  creatorName,
  creatorAvatar,
  likes: initialLikes,
  comments,
  description,
  clothingItems,
}: FashionCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <>
      <div className="relative w-screen h-screen snap-start bg-black flex flex-col">
        <img
          src={imageUrl}
          alt="Fashion content"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <ClothingOverlay clothingItems={clothingItems} />

        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex items-start justify-between">
            <CreatorInfo
              creatorName={creatorName}
              creatorAvatar={creatorAvatar}
              description={description}
            />

            <SocialActions
              liked={liked}
              likes={likes}
              comments={comments}
              onLike={handleLike}
              onCommentClick={() => setShowComments(true)}
            />
          </div>
        </div>
      </div>

      <CommentsDialog
        open={showComments}
        onOpenChange={setShowComments}
        comments={MOCK_COMMENTS}
      />
    </>
  );
};

export default FashionCard;