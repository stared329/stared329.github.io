import { useEffect } from 'react';
import create from 'zustand';
export const useStore = create((set, get) => ({
  isLoading: true,
  progress: 0,
}));

export const cacheImages = async (srcArray) => {
  let progress = 0;
  const promises = await srcArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.src = src;
      img.onload = (_) => {
        progress++;

        useStore.setState({
          progress: Math.round((progress / srcArray.length) * 100),
        });
        resolve(img);
      };
      img.onerror = (_) => {
        reject();
      };
    });
  });

  await Promise.all(promises);
  progress = 100;
  useStore.setState({ isLoading: false, progress: 100 });
};

const Progress = () => {
  const progress = useStore((state) => state.progress);
  return <h1>{progress}</h1>;
};

export const Loader = () => {
  const isLoading = useStore((state) => state.isLoading);

  useEffect(() => {
    setTimeout(() => {
      cacheImages([
        'https://stared329.github.io/img/000.jpg',
        'https://stared329.github.io/img/001.jpg',
        'https://stared329.github.io/img/002.jpg',
        'https://stared329.github.io/img/003.jpg',
        'https://stared329.github.io/img/004.jpg',
        'https://stared329.github.io/img/005.jpg',
        'https://stared329.github.io/img/006.jpg',
        'https://stared329.github.io/img/007.jpg',
        'https://stared329.github.io/img/008.jpg',
        'https://stared329.github.io/img/009.jpg',
        'https://stared329.github.io/img/010.jpg',
        'https://stared329.github.io/img/011.jpg',
        'https://stared329.github.io/img/012.jpg',
        'https://stared329.github.io/img/013.jpg',
        'https://stared329.github.io/img/kakao.png',
        'https://stared329.github.io/img/marker00.png',
        'https://stared329.github.io/img/tmap.png',
        'https://stared329.github.io/thumb/000.jpg',
        'https://stared329.github.io/thumb/001.jpg',
        'https://stared329.github.io/thumb/002.jpg',
        'https://stared329.github.io/thumb/003.jpg',
        'https://stared329.github.io/thumb/004.jpg',
        'https://stared329.github.io/thumb/005.jpg',
        'https://stared329.github.io/thumb/006.jpg',
        'https://stared329.github.io/thumb/007.jpg',
        'https://stared329.github.io/thumb/008.jpg',
        'https://stared329.github.io/thumb/009.jpg',
        'https://stared329.github.io/thumb/010.jpg',
        'https://stared329.github.io/thumb/011.jpg',
        'https://stared329.github.io/thumb/012.jpg',
        'https://stared329.github.io/thumb/013.jpg',
      ]);
    }, 2000);
  }, []);

  return isLoading ? (
    <div>
      <Progress />
    </div>
  ) : null;
};
