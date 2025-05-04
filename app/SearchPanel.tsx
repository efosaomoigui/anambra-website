// components/SearchPanel.tsx
"use client";

import GlobalSearch from "@/components/GlobalSearch";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function SearchPanel({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-white transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-gray-700 hover:text-black">
          <FiX size={24} />
        </button>
      </div>
      <div className="p-4">
        <GlobalSearch />
      </div>
    </div>
  );
}
