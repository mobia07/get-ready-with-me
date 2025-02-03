import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Comment {
  id: number;
  user: string;
  avatar: string;
  comment: string;
  timestamp: string;
}

interface CommentsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  comments?: Comment[]; // Make comments optional
}

const CommentsDialog = ({ open, onOpenChange, comments = [] }: CommentsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Comments</h2>
          <button onClick={() => onOpenChange(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-center text-gray-500">No comments yet</p>
          ) : (
            comments.map((comment) => (
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
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentsDialog;