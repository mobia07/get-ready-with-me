import { Heart, MessageCircle, Share2 } from "lucide-react";

interface SocialActionsProps {
  liked: boolean;
  likes: number;
  comments: number;
  onLike: () => void;
  onCommentClick: () => void;
}

const SocialActions = ({
  liked,
  likes,
  comments,
  onLike,
  onCommentClick,
}: SocialActionsProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <button onClick={onLike} className="flex flex-col items-center gap-1">
        <div className={`p-1.5 rounded-full ${liked ? 'animate-heart-bounce' : ''}`}>
          <Heart
            className={`w-6 h-6 ${
              liked ? "fill-accent text-accent" : "text-white"
            }`}
          />
        </div>
        <span className="text-white text-xs">{likes}</span>
      </button>
      
      <button 
        className="flex flex-col items-center gap-1"
        onClick={onCommentClick}
      >
        <div className="p-1.5 rounded-full">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <span className="text-white text-xs">{comments}</span>
      </button>
      
      <button className="flex flex-col items-center gap-1">
        <div className="p-1.5 rounded-full">
          <Share2 className="w-6 h-6 text-white" />
        </div>
        <span className="text-white text-xs">Share</span>
      </button>
    </div>
  );
};

export default SocialActions;