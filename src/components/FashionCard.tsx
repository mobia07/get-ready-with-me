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
      <div className="relative w-full h-screen snap-start bg-black flex flex-col">
        {/* Full-Screen Image */}
        <img
          src={imageUrl}
          alt="Fashion content"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Clothing Items Overlay */}
        <ClothingOverlay clothingItems={clothingItems} />

        {/* Bottom Overlay with Gradient */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
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

      {/* Comments Dialog */}
      <CommentsDialog
        open={showComments}
        onOpenChange={setShowComments}
      />
    </>
  );
};

export default FashionCard;
