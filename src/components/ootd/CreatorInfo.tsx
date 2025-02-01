interface CreatorInfoProps {
  creatorName: string;
  creatorAvatar: string;
  description: string;
}

const CreatorInfo = ({ creatorName, creatorAvatar, description }: CreatorInfoProps) => {
  return (
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
  );
};

export default CreatorInfo;