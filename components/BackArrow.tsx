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
      style={{ left: "calc(50% - 50vw + 2rem)" }}
    >
      <img src="/images/backarrow.svg" alt="Back Arrow" className="w-6 h-6" />
    </div>
  );
}
