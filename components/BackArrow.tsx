"use client";

import { usePathname, useRouter } from "next/navigation";

export default function BackArrow() {
  const router = useRouter();
  const pathname = usePathname();

  // Hide on homepage ("/")
  if (pathname === "/") {
    return null;
  }

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div
      className="fixed top-16 left-4 z-50 cursor-pointer py-16 ml-[23px]"
      onClick={handleBackClick}
    >
      <img src="/images/backarrow.png" alt="Back Arrow" className="w-8 h-8" />
    </div>
  );
}
