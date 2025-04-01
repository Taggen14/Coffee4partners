import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import content from "@/app/sv.json";

const TermsDialog = () => {
  const { title, termsTrigger, sections } = content.assets.terms;
  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-foreground hover:text-foreground/80 hover:cursor-pointer">
          &gt;{termsTrigger}
        </DialogTrigger>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center">{title}</DialogTitle>
            <div className="prose">
              {sections.map((s, i) => (
                <div key={i}>
                  <h4>{s.title}</h4>
                  <p className="text-sm">{s.description}</p>
                </div>
              ))}
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TermsDialog;
