import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50  flex items-center justify-center">
      <div className="relative shadow-2xl max-w-full rounded-xl transform transition-all duration-300 scale-95 opacity-0 animate-fade-in">
        <div className="p-4">
          <button
            className="absolute top-2 right-2 md:top-5 md:right-5 hover:text-primary hover:cursor-pointer text-white text-3xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
