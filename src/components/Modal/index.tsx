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
    top-0 z-10 h-screen w-screen  backdrop-blur-sm transition-all duration-300 ease-in-out  ${opened ? "visible opacity-100" : "invisible opacity-0"}`}
      role='dialog'
    >
      <div
        className='absolute left-0 top-0 h-full w-full bg-[#00000079] 
        transition-all duration-300 ease-in-out'
        onClick={onClose}
      />
      <div className='relative top-1/2 mx-auto  -translate-y-1/2 transform sm:max-w-[60%]'>
        <button
          type='button'
          className='absolute right-4 top-2 rounded-lg text-black transition-colors hover:bg-[#FFE2E5] hover:text-[#FA5A7D] sm:right-2'
          onClick={onClose}
        >
          <IconX />
        </button>
        <div className='mx-2  max-h-[80vh] overflow-auto rounded-xl bg-white p-6 shadow-lg sm:mx-0'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
