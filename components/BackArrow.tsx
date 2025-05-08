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
      className="fixed top-16 left-0 z-50 cursor-pointer py-16 ml-4"
      onClick={handleBackClick}
      style={{ left: "calc(50% - 50vw + 2rem)" }} // Aligns the back arrow with logo position
    >
      <img src="/images/backarrow.png" alt="Back Arrow" className="w-8 h-8" />
    </div>
  );
}
