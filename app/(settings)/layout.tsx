import { ReactNode } from "react";

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#F2F4F7] flex justify-center items-center min-h-screen shadow-lg">
      {children}
    </div>
  );
}
