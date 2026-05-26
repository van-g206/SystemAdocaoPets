"use client";
import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import { cn } from "./utils";

function ResizablePanelGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement> & { direction?: "horizontal" | "vertical" }) {
  return <div className={cn("flex h-full w-full", className)} {...props} />;
}
function ResizablePanel({ className, ...props }: React.HTMLAttributes<HTMLDivElement> & { defaultSize?: number }) {
  return <div className={cn("flex-1", className)} {...props} />;
}
function ResizableHandle({ withHandle, className }: { withHandle?: boolean; className?: string }) {
  return (
    <div className={cn("relative flex w-px items-center justify-center bg-border", className)}>
      {withHandle && <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border"><GripVerticalIcon className="h-2.5 w-2.5" /></div>}
    </div>
  );
}
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
