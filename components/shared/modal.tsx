// // components/ui/modal.tsx
// import { X } from "lucide-react";
// import React, { ReactNode } from "react";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   children: ReactNode; // Content to be displayed inside the modal
//   widthModal? :string
//   icon : ReactNode
// }

// export function CustomModal({ isOpen, onClose, title, children ,widthModal,icon}: ModalProps) {
//   if (!isOpen) return null; // Do not render if modal is not open

//   return (
//     <>
//       {/* Overlay with fade-in effect */}
//       <div
//         className="fixed inset-0 z-50 bg-black/50 transition-opacity duration-500 ease-in-out opacity-100"
//         onClick={onClose} // Close modal when clicking on overlay
//       />

//       {/* Modal Container */}
//       <div
//         className={`fixed z-50 inset-0 flex items-center justify-center  transition-opacity duration-500 ease-in-out ${
//           isOpen ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div
//           className={`bg-transparent border-white border rounded-lg shadow-lg  max-h-[652px] ${
//             widthModal ? widthModal : "max-w-[1080px]"
//           }  p-6 relative`}
//         >
//           {/* Close button */}
//           <button onClick={onClose} className="absolute top-4 right-4">
//             <X className="text-gray-400" />
//           </button>

//           {/* Modal Title */}
//           <div className="flex mb-4 items-center gap-2">
//             {icon}
//             <h2 className="text-lg font-semibold text-gray-800 ">{title}</h2>
//           </div>

//           {/* Modal Content */}
//           <div>{children}</div>
//         </div>
//       </div>
//     </>
//   );
// }



// components/ui/modal.tsx
import { X } from "lucide-react";
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode; // Content to be displayed inside the modal
  widthModal?: string;
  description?: string;
  subDescription?:string
}

export function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  widthModal,
  description,
  subDescription,
}: ModalProps) {
  if (!isOpen) return null; // Do not render if modal is not open

  return (
    <>
      {/* Overlay with fade-in effect */}
      <div
        className="fixed inset-0 z-50 bg-black/50 transition-opacity duration-500 ease-in-out opacity-100"
        onClick={onClose} // Close modal when clicking on overlay
      />

      {/* Modal Container */}
      <div
        className={`fixed z-50 inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`bg-white bg-opacity-30 backdrop-blur-lg backdrop-saturate-150 backdrop-filter border border-white border-opacity-40 rounded-lg shadow-lg max-h-[652px] ${
            widthModal ? widthModal : "max-w-[1080px]"
          } p-6 relative`}
        >
          {/* Close button */}
          <button onClick={onClose} className="absolute top-4 right-4">
            <X className="text-gray-400" />
          </button>

          {/* Modal Title */}
          <div className="flex mb-4 items-center flex-col justify-center gap-2">
            <h2 className="text-[35px] font-bold text-white">{title}</h2>
            <p className="text-white">
              {description}
              <span className="text-[#f00] pl-2 border-b">{subDescription}</span>
            </p>
          </div>

          {/* Modal Content */}
          <div className="text-white">{children}</div>
        </div>
      </div>
    </>
  );
}

