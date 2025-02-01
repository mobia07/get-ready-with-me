import { useState } from "react";

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
    user: "FashionLover",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    comment: "Love this outfit! 😍",
    timestamp: "2h ago"
  },
  {
    id: 2,
    user: "StyleExpert",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    comment: "The combination is perfect!",
    timestamp: "3h ago"
  },
  {
    id: 3,
    user: "TrendSetter",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    comment: "Where did you get those shoes?",
    timestamp: "5h ago"
  }
];

import SocialActions from "./ootd/SocialActions";
import CreatorInfo from "./ootd/CreatorInfo";
import ClothingOverlay from "./ootd/ClothingOverlay";
import CommentsDialog from "./ootd/CommentsDialog";

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
      <div className="relative w-full h-screen snap-start bg-black">
        <img
          src={imageUrl}
          alt="Fashion content"
          className="w-full h-full object-cover"
        />
        
        <ClothingOverlay clothingItems={clothingItems} />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
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