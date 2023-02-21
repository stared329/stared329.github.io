const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id) => `img/${id < 10 ? "00" : "0"}${id}.jpg`;

const unsplashPhotos = [
  { width: 2973, height: 1977 },
  { width: 1940, height: 2918 },
  { width: 1985, height: 2985 },
  { width: 1954, height: 2939 },
  { width: 1983, height: 2982 },
  { width: 1941, height: 2919 },
  { width: 2952, height: 1963 },
  { width: 1977, height: 2973 },
  { width: 1969, height: 2961 },
  { width: 1976, height: 2972 },
  { width: 1985, height: 2985 },
  { width: 1964, height: 2954 },
  { width: 1967, height: 2958 },
  { width: 1945, height: 2925 }
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
