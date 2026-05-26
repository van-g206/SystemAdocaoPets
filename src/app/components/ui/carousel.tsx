"use client";
import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./button";
const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("relative", className)} {...props}>{children}</div>
));
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props} />
));
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("min-w-0 shrink-0 grow-0 basis-full", className)} {...props} />
));
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => (
  <Button ref={ref} variant="outline" size="icon" className={cn("absolute left-12 top-1/2 -translate-y-1/2 rounded-full", className)} {...props}><ArrowLeft className="h-4 w-4" /></Button>
));
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => (
  <Button ref={ref} variant="outline" size="icon" className={cn("absolute right-12 top-1/2 -translate-y-1/2 rounded-full", className)} {...props}><ArrowRight className="h-4 w-4" /></Button>
));
CarouselNext.displayName = "CarouselNext";
export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
