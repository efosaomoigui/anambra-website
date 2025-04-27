// components/BackArrow.tsx
"use client"; // This line ensures that the component is treated as a client-side component

import { useRouter } from "next/navigation"; // Updated import

export default function BackArrow() {
  const router = useRouter();

  // Handle back navigation
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
