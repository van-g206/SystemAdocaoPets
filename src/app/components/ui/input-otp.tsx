"use client";
import * as React from "react";
import { cn } from "./utils";
const InputOTP = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { maxLength?: number; value?: string; onChange?: (value: string) => void }>(
  ({ className, maxLength = 6, value = "", onChange, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-2", className)} {...props}>
      {Array.from({ length: maxLength }).map((_, i) => (
        <div key={i} className="relative h-10 w-10 border rounded text-center flex items-center justify-center text-sm font-medium">
          {value[i] || ""}
        </div>
      ))}
    </div>
  )
);
InputOTP.displayName = "InputOTP";
const InputOTPGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex items-center", className)} {...props} />;
const InputOTPSlot = ({ index, className }: { index: number; className?: string }) => <div className={cn("relative h-10 w-10 border rounded text-center", className)} />;
const InputOTPSeparator = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}><span>-</span></div>;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
