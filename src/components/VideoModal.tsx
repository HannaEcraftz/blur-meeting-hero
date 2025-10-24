import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const VideoModal = ({ open, onOpenChange }: VideoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">See How It Works</DialogTitle>
        </DialogHeader>
        <div className="aspect-video bg-muted/20 flex items-center justify-center p-6">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Product Demo Video</h3>
              <p className="text-muted-foreground">
                Watch how our AI Meeting Assistant transforms your meetings
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              [Demo video would be embedded here]
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
