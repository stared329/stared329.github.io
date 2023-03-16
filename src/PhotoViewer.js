import React, { useEffect, useState } from 'react';

export default function PhotoViewer({ open, index, onClose }) {
  const [current, setCurrent] = useState(null);

  const handleNextPrev = (bNext) => (e) => {
    console.log(e.target.id);
    if (e.target.id !== 'viewer_close') {
      if (bNext) {
        setCurrent((prev) => (prev === 13 ? 0 : prev + 1));
      } else {
        setCurrent((prev) => (prev === 0 ? 13 : prev - 1));
      }
    }
  };

  const handleClose = (e) => {
    console.log(e.target);
    onClose();
  };

  useEffect(() => {
    setCurrent(index);
  }, [index]);
  return (
    <>
      {open ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-white opacity-70"></div>
            <div className="flex items-center min-h-full z-15 relative">
              <div className="relative w-full rounded-md">
                <img
                  src={`img/${current < 10 ? '00' : '0'}${current}.jpg`}
                  alt="사진 보기"
                  className="w-full py-6 max-w-fit m-auto transition-opacity delay-150"
                />
              </div>

              <button
                id="viewer_close"
                className="absolute top-0 w-full h-10 bg-back text-white text-center z-50"
                onClick={handleClose}
              >
                닫기
              </button>
              <button
                className="absolute left-0 w-1/2 h-full text-left bg-transparent"
                onClick={handleNextPrev(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                className="absolute right-0 w-1/2 h-full text-right bg-transparent"
                onClick={handleNextPrev(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
