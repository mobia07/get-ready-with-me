import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Post {
  id: number;
  imageUrl: string;
  creatorName: string;
  creatorAvatar: string;
  likes: number;
  comments: number;
  description: string;
}

interface PostGridProps {
  posts: Post[];
}

const PostGrid = ({ posts }: PostGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-16">
      {posts.map((post) => (
        <Sheet key={post.id}>
          <SheetTrigger asChild>
            <div className="aspect-[9/16] relative overflow-hidden rounded-lg cursor-pointer">
              <img
                src={post.imageUrl}
                alt={`Fashion by ${post.creatorName}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={post.creatorAvatar}
                    alt={post.creatorName}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <span className="text-white text-sm font-semibold">{post.creatorName}</span>
                </div>
                <p className="text-white text-xs line-clamp-2">{post.description}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <span className="text-white text-xs">❤️ {post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-white text-xs">💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[100dvh] p-0">
            <div className="relative h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-4 z-10"
                onClick={() => {
                  const closeButton = document.querySelector('[data-radix-collection-item]') as HTMLButtonElement;
                  if (closeButton) closeButton.click();
                }}
              >
                <ArrowLeft className="h-6 w-6 text-white" />
              </Button>
              <img
                src={post.imageUrl}
                alt={`Fashion by ${post.creatorName}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={post.creatorAvatar}
                    alt={post.creatorName}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{post.creatorName}</h3>
                    <p className="text-white/80 text-sm">{post.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-white">❤️ {post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white">💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};

export default PostGrid;