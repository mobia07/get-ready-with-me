import { Heart, MessageCircle, Share2, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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
      <div className="relative w-full h-screen snap-start bg-black">
        <img
          src={imageUrl}
          alt="Fashion content"
          className="w-full h-full object-cover"
        />
        
        {/* Clothing item hover areas */}
        {clothingItems.map((item, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <div
                className="absolute cursor-pointer bg-transparent hover:bg-white/10 transition-colors duration-200 rounded-md"
                style={{
                  top: item.position.top,
                  left: item.position.left,
                  width: item.position.width,
                  height: item.position.height,
                }}
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-64 bg-white/90 backdrop-blur-sm">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{item.brand}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
        
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