import Navigation from "@/components/Navigation";
import { Settings, Grid } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Profile</h1>
          <Settings className="w-6 h-6" />
        </div>
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="w-24 h-24 rounded-full bg-secondary" />
          <h2 className="text-xl font-semibold">@username</h2>
          <p className="text-muted-foreground">Fashion enthusiast</p>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square bg-secondary/20 rounded-sm"
            />
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Profile;