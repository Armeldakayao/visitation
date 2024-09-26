import React from "react";
import { cn } from "#/lib/utils";

export type RequiredProps = {
  className?: string;
};

/**
 * Component that renders a required asterisk
 *
 * @param {string} className - The class name to apply to the required asterisk
 */
export default function Required({ className }: RequiredProps) {
  return <span className={cn("text-[#FD8B7C]", className)}>*</span>;
}
