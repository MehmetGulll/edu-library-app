import React, { ReactNode, FC } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>{children}</div>
      <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
        <button
          type='button'
          className='mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm'
          onClick={onClose}
        >
          Kapat
        </button>
      </div>
    </div>
  );
};

export default Modal;
