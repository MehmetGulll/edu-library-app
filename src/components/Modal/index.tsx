"use client";
import IconX from "@/assets/icons/IconX";
import React, { ReactNode, FC, useEffect } from "react";

interface ModalProps {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ opened, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (opened) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [opened, onClose]);

  return (
    <div
      className={`
      fixed
      left-0
    top-0 z-10 h-screen w-screen min-w-10 transition-opacity duration-300 ease-in-out  ${opened ? "visible opacity-100" : "invisible opacity-0"}`}
      role='dialog'
    >
      <div className='pointer-events-none absolute left-0 top-0 h-full w-full bg-[#0f172acc] backdrop-blur-sm ' />
      <div
        className='flex h-full w-full items-center justify-center'
        onClick={onClose}
      >
        <div className='relative'>
          <div className='min-w-96 rounded-xl bg-white  p-6 shadow-lg'>
            {children}
          </div>
          <button
            type='button'
            className='absolute right-2 top-2'
            onClick={onClose}
          >
            <IconX />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
