import { Heart, MessageCircle, Share2, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface FashionCardProps {
  imageUrl: string;
  creatorName: string;
  creatorAvatar: string;
  likes: number;
  comments: number;
  description: string;
}

// Mock comments data - in a real app this would come from an API
const MOCK_COMMENTS = [
  {
    id: 1,
    user: "FashionLover",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64",
    comment: "Love this style! 😍",
    timestamp: "2h ago"
  },
  {
    id: 2,
    user: "StyleExpert",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64",
    comment: "The colors are perfect for this season!",
    timestamp: "5h ago"
  },
  {
    id: 3,
    user: "TrendWatcher",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64",
    comment: "Where can I get this outfit?",
    timestamp: "1d ago"
  }
];

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
              
              <button 
                className="flex flex-col items-center gap-1"
                onClick={() => setShowComments(true)}
              >
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

      <Dialog open={showComments} onOpenChange={setShowComments}>
        <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Comments</h2>
            <button onClick={() => setShowComments(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            {MOCK_COMMENTS.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <img
                  src={comment.avatar}
                  alt={comment.user}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{comment.user}</span>
                    <span className="text-sm text-gray-500">{comment.timestamp}</span>
                  </div>
                  <p className="text-sm">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FashionCard;