import { PhotoAlbum } from 'react-photo-album';
import photos from './Photo';

const Gallery = ({ setPhoto }) => {
  const handlePhoto = (e) => {
    console.log(e.index, e.photo.src);
    const { index } = e;
    setPhoto({
      open: true,
      index,
      onClose: () => setPhoto({ open: false, index: null }),
    });
  };
  return (
    <div className="flex flex-col bg-[#FFFFFF00] h-screen-full w-screen justify-center px-8 py-16">
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
