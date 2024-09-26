// // "use client"
// // import { useGroupsLists } from "#features/auth/hooks/use-group-lists";
// // import { usePermissionLists } from "#features/auth/hooks/use-permissions-lists";
// // import { createContext, ReactNode, useState, FC } from "react";

// // interface AppContextType {
// //   permissionLists: any; // Replace 'any' with the actual type
// //   groupLists: any; // Replace 'any' with the actual type
// //   isPending: boolean;
// // }

// // export const AppContext = createContext<AppContextType | undefined>(undefined);

// // export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
// //   const { data: permissionData, isPending } = usePermissionLists();
// //   const [permissionLists, setPermissionLists] = useState(permissionData?.data.body);
// //   permissionData &&
// //     console.log(permissionData, "permissionDATA", permissionLists);
// //   const { data: groupData } = useGroupsLists();

// //   const [groupLists, setGroupLists] = useState(groupData);

// //   return (
// //     <AppContext.Provider value={{ permissionLists, groupLists, isPending }}>
// //       {children}
// //     </AppContext.Provider>
// //   );
// // };




// "use client";
// import { useBooks } from "#features/auth/hooks/use-books";
// import { useGetMe } from "#features/auth/hooks/use-get-me";
// import { createContext, FC, ReactNode, useEffect, useState } from "react";

// interface AppContextType {
//   permissionLists: any; // Replace 'any' with the actual type
//   groupLists: any; // Replace 'any' with the actual type
//   isPending: boolean;
// }

// export const AppContext = createContext<AppContextType | undefined>(undefined);

// export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
//   const { data: getMe, isPending: isMePending } =
//     useGetMe();

//   const [isMe, setIsMe] = useState<any[]>([]); // Replace 'any[]' with the actual type
 
//   const [mePending, setIsMePending] = useState<boolean>(isMePending);


//     const { data: books, isPending: bookPending } = useBooks();

//     const [bookLists, setBookLists] = useState<any[]>([]); // Replace 'any[]' with the actual type

//     const [isBookPending, setIsBookPending] = useState<boolean>(bookPending);
  
  

//   // Update permissionLists and isPending when permissionData changes
//   useEffect(() => {
//     if (getMe) {
//       setIsMe(getMe.data);
//       setIsMePending(isMePending);
//     }
//   }, [getMe, isMePending]);

//    useEffect(() => {
//      if (books) {
//        setBookLists(
//          books.data.filter(
//            (b: { id: string; }) => b.id !== "3756b6e5-ff80-4516-8b7f-bf9ca307ded3"
//          )
//        );
//        setIsBookPending(bookPending);
//      }
//    }, [getMe, isMePending]);



//   return (
//     <AppContext.Provider
//       value={{
//         // @ts-ignore
//         isMe,
//         setIsMe,
//         mePending,
//         bookLists,
//         setBookLists,
//         isBookPending,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };




"use client";
import { useBooks } from "#features/auth/hooks/use-books";
import { useGetMe } from "#features/auth/hooks/use-get-me";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

interface AppContextType {
  isMe: any[]; // Replace 'any[]' with the actual type
  setIsMe: React.Dispatch<React.SetStateAction<any[]>>; // Adjust type as needed
  mePending: boolean;
  bookLists: any[]; // Replace 'any[]' with the actual type
  setBookLists: React.Dispatch<React.SetStateAction<any[]>>;
  isBookPending: boolean;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { data: getMe, isPending: isMePending } = useGetMe();
  const [isMe, setIsMe] = useState<any[]>([]); // Replace 'any[]' with the actual type
  const [mePending, setIsMePending] = useState<boolean>(isMePending);

  const { data: books, isPending: bookPending } = useBooks();
  const [bookLists, setBookLists] = useState<any[]>([]); // Replace 'any[]' with the actual type
  const [isBookPending, setIsBookPending] = useState<boolean>(bookPending);

  // Update isMe and mePending when getMe changes
  useEffect(() => {
    if (getMe) {
      setIsMe(getMe.data);
      setIsMePending(isMePending);
    }
  }, [getMe, isMePending]);

  // Update bookLists and isBookPending when books change
  useEffect(() => {
    if (books) {
      setBookLists(
        books.data.filter(
          (b: { id: string }) => b.id !== "3756b6e5-ff80-4516-8b7f-bf9ca307ded3"
        )
      );
      setIsBookPending(bookPending);
    }
  }, [books, bookPending]);

  return (
    <AppContext.Provider
      value={{
        isMe,
        setIsMe,
        mePending,
        bookLists,
        setBookLists,
        isBookPending,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
