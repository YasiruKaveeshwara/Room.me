"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

interface AlertProps {
  message: string;
  type?: "success" | "error";
  visible: boolean;
  onClose: () => void;
}

export default function Alert({ message, type = "success", visible, onClose }: AlertProps) {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    setShow(visible);
    if (visible) {
      const timer = setTimeout(() => {
        setShow(false);
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div
      className={clsx(
        "fixed top-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md shadow-lg text-sm font-medium z-50 transition-all duration-500",
        show ? "opacity-100 scale-100" : "opacity-0 scale-95",
        type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
      )}>
      {message}
    </div>
  );
}
