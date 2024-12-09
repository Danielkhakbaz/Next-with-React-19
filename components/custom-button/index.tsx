"use client";

import { usePathname } from "next/navigation";

const CustomButton = () => {
  const pathname = usePathname();

  return (
    <button className="btn btn-error mb-4" disabled={pathname === "/"}>
      Back
    </button>
  );
};

export default CustomButton;
