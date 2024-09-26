// "use client";
// import { Avatar, AvatarFallback, AvatarImage } from "#components/ui/avatar";
// import Image from "next/image";
// import { useContext, useState } from "react";
// import { Drawer } from "./drawer";
// import { Button } from "#components/ui/button";
// import Link from "next/link";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "#/components/ui/select";
// import LoginForm from "#components/forms/login-form";
// import RegisterForm from "#components/forms/register-form";
// import { AppContext } from "#app/provider";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "#components/ui/popover";
// import { AlignJustify, Power } from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function MainNav({ sectionTitle, secondTitle, children }: any) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   // @ts-ignore
//   const { isMe } = useContext(AppContext);
//   // isMe && console.log(isMe, "isMe");
//   const router = useRouter();
//   return (
//     <div className="relative">
//       <div className="shadow-md py-3 px-8 flex justify-between items-center text-black">
//         <div className="flex gap-3 items-center">
//           <Image src="/images/logo.svg" alt="Menu" width={50} height={50} />
//         </div>
//         <div className="lg:flex hidden gap-5 mx-auto">
//           <Link href="/">Home</Link>
//           <Link href="">About</Link>
//           <Link href="">How it works</Link>
//           <Link href="">Pricing</Link>
//         </div>
//         <div className="lg:flex hidden gap-2 items-center">
//           <Select>
//             <SelectTrigger className="w-[180px] border-none">
//               <SelectValue placeholder="Select a language" />
//             </SelectTrigger>
//             <SelectContent className="border-none outline-none">
//               <SelectGroup>
//                 <SelectLabel>Language</SelectLabel>
//                 <SelectItem value="EN">English (united States)</SelectItem>
//                 <SelectItem value="FR">French (France )</SelectItem>
//                 <SelectItem value="ES">Espagnol(Espagne)</SelectItem>
//               </SelectGroup>
//             </SelectContent>
//           </Select>

//           {/* {typeof window !== "undefined" &&
//           localStorage?.getItem("ACCESS_TOKEN") ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button variant="outline" className="border-none">
//                   <Avatar>
//                     <AvatarImage
//                       src={`http://34.27.136.91${isMe?.profile_image}`}
//                       alt="PM"
//                     />
//                     <AvatarFallback className="uppercase font-bold">
//                       {isMe?.full_name ? isMe.full_name.slice(0, 2) : ""}
//                     </AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-50 mr-2">
//                 <div className="flex items-center justify-center">
//                   <Avatar>
//                     <AvatarImage
//                       src={`http://34.27.136.91${isMe?.profile_image}`}
//                       alt="PM"
//                     />
//                     <AvatarFallback className="uppercase font-bold">
//                       {isMe?.full_name ? isMe.full_name.slice(0, 2) : ""}
//                     </AvatarFallback>
//                   </Avatar>
//                 </div>
//                 <div className="flex items-center justify-center">
//                   <p className="font-bold pt-2 capitalize text-sm">
//                     {isMe?.full_name || ""}
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-center pt-2 ">
//                   <Link
//                     href="/admin/visitation-books/update-profile"
//                     className="text-sm text-gray-400 text-center"
//                   >
//                     Edit Profile
//                   </Link>
//                 </div>
//                 <div className="flex items-center justify-center pt-2 ">
//                   <Link
//                     href="/admin/visitation-books/home"
//                     className="text-sm text-gray-700 text-center"
//                   >
//                     Account
//                   </Link>
//                 </div>
//                 <div className="flex items-center justify-center pt-5 ">
//                   <Power className="text-sm w-3 h-3 text-red-700 text-center" />
//                   <p
//                     className="text-sm pl-1 text-red-700 cursor-pointer text-center"
//                     onClick={() => {
//                       localStorage.removeItem("ACCESS_TOKEN");

//                       window.location.reload();
//                     }}
//                   >
//                     Disconnect
//                   </p>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className="space-x-2 flex">
//               <LoginForm />
//               <RegisterForm />
//             </div>
//           )} */}
//         </div>
//         <Drawer
//           isOpen={isSidebarOpen}
//           onClose={() => setIsSidebarOpen(false)}
//         />
//         <button onClick={toggleSidebar} className="flex lg:hidden items-center">
//           <AlignJustify className="text-black h-4 w-4" />
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import { Avatar, AvatarFallback, AvatarImage } from "#components/ui/avatar";
import Image from "next/image";
import { useContext, useState } from "react";
import { Drawer } from "./drawer";
import { Button } from "#components/ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";
import LoginForm from "#components/forms/login-form";
import RegisterForm from "#components/forms/register-form";
import { AppContext } from "#app/provider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#components/ui/popover";
import { AlignJustify, Power } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MainNav({ sectionTitle, secondTitle, children }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // @ts-ignore
  const { isMe } = useContext(AppContext);
  // isMe && console.log(isMe, "isMe");
  const router = useRouter();
  return (
    <div className="relative">
      <div className="shadow-md py-3 px-8 flex justify-between items-center text-black">
        <div className="flex gap-3 items-center">
          <Image src="/images/logo.svg" alt="Menu" width={50} height={50} />
        </div>
        <div className="lg:flex hidden gap-5 mx-auto">
          <Link href="/">Home</Link>
          <Link href="">About</Link>
          <Link href="">How it works</Link>
          <Link href="">Pricing</Link>
        </div>
        <div className="lg:flex hidden gap-2 items-center">
          <Select>
            <SelectTrigger className="w-[180px] border-none">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent className="border-none outline-none">
              <SelectGroup>
                <SelectLabel>Language</SelectLabel>
                <SelectItem value="EN">English (united States)</SelectItem>
                <SelectItem value="FR">French (France )</SelectItem>
                <SelectItem value="ES">Espagnol(Espagne)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {typeof window !== "undefined" &&
          localStorage?.getItem("ACCESS_TOKEN") ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="border-none">
                  <Avatar>
                    <AvatarImage
                      src={`http://34.27.136.91${isMe?.profile_image}`}
                      alt="PM"
                    />
                    <AvatarFallback className="uppercase font-bold">
                      {isMe?.full_name ? isMe.full_name.slice(0, 2) : ""}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-50 mr-2">
                <div className="flex items-center justify-center">
                  <Avatar>
                    <AvatarImage
                      src={`http://34.27.136.91${isMe?.profile_image}`}
                      alt="PM"
                    />
                    <AvatarFallback className="uppercase font-bold">
                      {isMe?.full_name ? isMe.full_name.slice(0, 2) : ""}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-center justify-center">
                  <p className="font-bold pt-2 capitalize text-sm">
                    {isMe?.full_name || ""}
                  </p>
                </div>
                <div className="flex items-center justify-center pt-2 ">
                  <Link
                    href="/admin/visitation-books/update-profile"
                    className="text-sm text-gray-400 text-center"
                  >
                    Edit Profile
                  </Link>
                </div>
                <div className="flex items-center justify-center pt-2 ">
                  <Link
                    href="/admin/visitation-books/home"
                    className="text-sm text-gray-700 text-center"
                  >
                    Account
                  </Link>
                </div>
                <div className="flex items-center justify-center pt-5 ">
                  <Power className="text-sm w-3 h-3 text-red-700 text-center" />
                  <p
                    className="text-sm pl-1 text-red-700 cursor-pointer text-center"
                    onClick={() => {
                      localStorage.removeItem("ACCESS_TOKEN");

                      window.location.reload();
                    }}
                  >
                    Disconnect
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="space-x-2 flex">
              <LoginForm />
              <RegisterForm />
            </div>
          )}
        </div>
        <Drawer
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <button onClick={toggleSidebar} className="flex lg:hidden items-center">
          <AlignJustify className="text-black h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
