import Navigation from "@/components/Navigation";
import { Heart } from "lucide-react";

const Activity = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-6">Activity</h1>
        <div className="space-y-4">
          {/* Placeholder for activity feed */}
          <div className="p-4 rounded-lg bg-secondary/20">
            <div className="flex items-center gap-4">
              <Heart className="w-8 h-8 text-primary" />
              <p className="text-muted-foreground">
                Your activity feed will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Activity;