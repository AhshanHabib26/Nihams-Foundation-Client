import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
}

const Modal = ({ imageUrl, title, onClose }: { imageUrl: string, title: string, onClose: () => void }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div
      className="relative max-w-5xl w-full p-5 bg-white rounded-lg mx-5 lg:mx-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[80vh] object-cover rounded shadow-md"
      />
      <button
        className="absolute top-1 right-1 text-black text-lg font-light cursor-pointer"
        onClick={onClose}
      >
        <FaTimes />
      </button>
    </div>
  </div>
);

const GalleryCard = ({ item }: { item: GalleryItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const imageClasses = "w-full h-[200px] object-cover rounded shadow-md cursor-pointer opacity-75 hover:opacity-100";

  return (
    <div>
      <div className="relative bg-white p-5 rounded shadow-md">
        <img
          src={item.imageUrl}
          alt={item.title}
          className={imageClasses}
          onClick={handleImageClick}
        />
        <div className="mt-3">
          <h2 className="text-xl font-medium text-gray-700">{item.title}</h2>
        </div>
      </div>

      {isModalOpen && <Modal imageUrl={item.imageUrl} title={item.title} onClose={handleCloseModal} />}
    </div>
  );
};

export default GalleryCard;
