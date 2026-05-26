"use client";
import * as React from "react";
import { cn } from "./utils";
const Drawer = ({ children }: { children?: React.ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void }) => <>{children}</>;
const DrawerTrigger = ({ children, asChild }: { children?: React.ReactNode; asChild?: boolean }) => <>{children}</>;
const DrawerClose = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
const DrawerPortal = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
const DrawerOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
));
DrawerOverlay.displayName = "DrawerOverlay";
const DrawerContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("fixed inset-x-0 bottom-0 z-50 bg-background p-4", className)} {...props}>{children}</div>
));
DrawerContent.displayName = "DrawerContent";
const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex flex-col gap-1.5 p-4", className)} {...props} />;
const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />;
const DrawerTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
));
DrawerTitle.displayName = "DrawerTitle";
const DrawerDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = "DrawerDescription";
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription };
