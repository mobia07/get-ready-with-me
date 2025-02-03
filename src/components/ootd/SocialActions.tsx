import { Heart, MessageCircle } from "lucide-react";

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
    <div className="flex flex-col items-center gap-4 mr-2">
      <button onClick={onLike} className="flex flex-col items-center gap-1">
        <div className={`p-2 rounded-full ${liked ? 'animate-heart-bounce' : ''}`}>
          <Heart
            className={`w-8 h-8 ${
              liked ? "fill-accent text-accent" : "text-white"
            }`}
          />
        </div>
        <span className="text-white text-sm">{likes}</span>
      </button>
      
      <button 
        className="flex flex-col items-center gap-1"
        onClick={onCommentClick}
      >
        <div className="p-2 rounded-full">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <span className="text-white text-sm">{comments}</span>
      </button>
    </div>
  );
};

export default SocialActions;