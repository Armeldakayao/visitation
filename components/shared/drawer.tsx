import { Button } from "#components/ui/button";
import { AlignJustify, ChevronDown, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Drawer({ isOpen, onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState<string>("/events"); // Track the active menu item
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false); // Track dropdown state
  const router = useRouter();

  // Function to handle navigation and set active item
  const handleNavigation = (path: string, item: string) => {
    setActiveItem(item);
    router.push(path);
    onClose(); // Close sidebar after navigation
  };

  // Function to toggle the settings dropdown
  const toggleSettingsDropdown = () => setIsSettingsOpen(!isSettingsOpen);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 w-[300px] h-full bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex p-4 border-b justify-between items-center">
          <Button onClick={onClose} className="px-2 bg-[#F2F4F7]">
            <X className="text-gray-400" />
          </Button>
        </div>

        {/* Sidebar Menu */}
        <div className="space-y-7 text-md mt-7 px-5">
          {/* Settings Dropdown */}
          <div></div>

          {/* Other Menu Items */}
          {[
            {
              name: "Home",
              // icon: "/images/function-icon.svg",
              path: "/",
            },
            { name: "About us", icon: "iiiiiiiiiiiiiii", path: "/events" },
            {
              name: "How it works",
              // icon: "/images/department-icon.svg",
              // path: "/departments",
            },
          ].map((item) => (
            <div
              key={item.name}
              // @ts-ignore
              onClick={() => handleNavigation(item.path, item.name)}
              className={`flex gap-3 cursor-pointer items-center ${
                activeItem === item.name ? "text-blue-600" : "text-gray-700"
              }`}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
