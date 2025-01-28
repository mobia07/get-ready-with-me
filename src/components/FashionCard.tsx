import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

interface FashionCardProps {
  imageUrl: string;
  creatorName: string;
  creatorAvatar: string;
  likes: number;
  comments: number;
  description: string;
}

const FashionCard = ({
  imageUrl,
  creatorName,
  creatorAvatar,
  likes: initialLikes,
  comments,
  description,
}: FashionCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="relative w-full h-screen snap-start bg-black">
      <img
        src={imageUrl}
        alt="Fashion content"
        className="w-full h-full object-cover"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={creatorAvatar}
                alt={creatorName}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <span className="text-white font-semibold">{creatorName}</span>
            </div>
            <p className="text-white text-sm">{description}</p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleLike}
              className="flex flex-col items-center gap-1"
            >
              <div className={`p-2 rounded-full ${liked ? 'animate-heart-bounce' : ''}`}>
                <Heart
                  className={`w-8 h-8 ${
                    liked ? "fill-accent text-accent" : "text-white"
                  }`}
                />
              </div>
              <span className="text-white text-sm">{likes}</span>
            </button>
            
            <button className="flex flex-col items-center gap-1">
              <div className="p-2 rounded-full">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <span className="text-white text-sm">{comments}</span>
            </button>
            
            <button className="flex flex-col items-center gap-1">
              <div className="p-2 rounded-full">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <span className="text-white text-sm">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionCard;