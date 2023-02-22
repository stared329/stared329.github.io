const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id) => `thumb/${id < 10 ? "00" : "0"}${id}.jpg`;

const unsplashPhotos = [
  { width: 627, height: 417 },
  { width: 417, height: 627 },
  { width: 417, height: 627 },
  { width: 417, height: 627 },
  { width: 417, height: 627 },
  { width: 417, height: 627 },
  { width: 627, height: 417 },
  { width: 417, height: 627 },
  { width: 417, height: 627 },
  { width: 417, height: 627 },
  { width: 417, height: 627 },
  { width: 417, height: 627 },
  { width: 627, height: 417 },
  { width: 417, height: 627 }
];

const photos = unsplashPhotos.map((photo, i) => {
  console.log(unsplashLink(i));
  return {
    src: unsplashLink(i),
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: unsplashLink(i),
        width: breakpoint,
        height
      };
    })
  };
});

export default photos;
