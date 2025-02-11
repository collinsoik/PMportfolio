import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl, imageAlt }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/70" onClick={onClose}>
      <div className="relative max-w-7xl w-full">
        <button 
          onClick={onClose}
          className="absolute -top-8 md:-top-12 right-0 text-white hover:text-gray-300"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-auto rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default Modal; 