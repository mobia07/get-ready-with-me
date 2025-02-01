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

interface ClothingOverlayProps {
  clothingItems: ClothingItem[];
}

const ClothingOverlay = ({ clothingItems }: ClothingOverlayProps) => {
  return (
    <>
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
    </>
  );
};

export default ClothingOverlay;