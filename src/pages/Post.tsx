import Navigation from "@/components/Navigation";
import { Camera, Upload } from "lucide-react";

const Post = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-6">Create Post</h1>
        <div className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-dashed rounded-lg">
          <Camera className="w-12 h-12 text-muted-foreground" />
          <p className="text-center text-muted-foreground">
            Take a photo or upload from your gallery
          </p>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-full bg-primary text-white">
              Take Photo
            </button>
            <button className="px-4 py-2 rounded-full bg-secondary">
              <Upload className="w-4 h-4 inline mr-2" />
              Upload
            </button>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Post;