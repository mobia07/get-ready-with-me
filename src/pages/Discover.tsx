import Navigation from "@/components/Navigation";

const Discover = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-6">Discover Fashion</h1>
        <div className="grid grid-cols-2 gap-4">
          {/* Placeholder for search and trending content */}
          <div className="col-span-2 p-4 rounded-lg bg-secondary/20">
            <p className="text-center text-muted-foreground">
              Search and discover trending fashion coming soon!
            </p>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Discover;