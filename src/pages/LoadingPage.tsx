import LoadingSpinner from "@/components/LoadingSpinner";
import React from "react";

export default function LoadingPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <LoadingSpinner sizeClassName="w-14 h-14" />
    </div>
  );
}
