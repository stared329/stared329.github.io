import { PhotoAlbum } from 'react-photo-album';
import useScrollFadeIn from './hooks';
import photos from './Photo';

const Gallery = ({ setPhoto }) => {
  const handlePhoto = (e) => {
    const { index } = e;
    setPhoto({
      open: true,
      index,
      onClose: () => setPhoto({ open: false, index: null }),
    });
  };
  return (
    <div className="flex flex-col bg-[#FFFFFF00] justify-center px-8 h-screen-full">
      <PhotoAlbum
        layout="rows"
        photos={photos}
        padding={0}
        spacing={8}
        onClick={handlePhoto}
      />
    </div>
  );
};

export default Gallery;
