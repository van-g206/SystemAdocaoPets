"use client";
import * as React from "react";
import { cn } from "./utils";

export type ChartConfig = Record<string, { label?: string; color?: string; icon?: React.ComponentType }>;

const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { config?: ChartConfig }>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex aspect-video justify-center text-xs", className)} {...props}>
      {children}
    </div>
  )
);
ChartContainer.displayName = "ChartContainer";

const ChartTooltip = ({ children }: { children?: React.ReactNode; content?: React.ReactNode; cursor?: boolean }) => <>{children}</>;
const ChartTooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("border bg-background px-2.5 py-1.5 text-xs shadow-xl", className)} {...props} />
));
ChartTooltipContent.displayName = "ChartTooltipContent";

const ChartLegend = ({ children }: { children?: React.ReactNode; content?: React.ReactNode }) => <>{children}</>;
const ChartLegendContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center justify-center gap-4 text-sm", className)} {...props} />
));
ChartLegendContent.displayName = "ChartLegendContent";

const ChartStyle = ({ id, config }: { id: string; config?: ChartConfig }) => null;

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
