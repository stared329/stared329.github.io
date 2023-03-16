const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id) => `img/${id < 10 ? '00' : '0'}${id}.jpg`;

const unsplashPhotos = [
  { width: 640, height: 426 },
  { width: 640, height: 963 },
  { width: 640, height: 962 },
  { width: 640, height: 963 },
  { width: 640, height: 962 },
  { width: 640, height: 962 },
  { width: 640, height: 427 },
  { width: 640, height: 963 },
  { width: 640, height: 962 },
  { width: 640, height: 962 },
  { width: 640, height: 962 },
  { width: 640, height: 963 },
  { width: 640, height: 426 },
  { width: 640, height: 962 },
];

const photos = unsplashPhotos.map((photo, i) => {
  return {
    src: unsplashLink(i),
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: unsplashLink(i),
        width: breakpoint,
        height,
      };
    }),
  };
});

export default photos;
