import React, { useEffect, useState } from 'react';

export default function PhotoViewer({ open, index, onClose }) {
  const list = new Array(14).fill(0).map((_, i) => i);
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);

  const handleNextPrev = (bNext) => (e) => {
    if (e.target.id !== 'viewer_close') {
      let index = current;
      if (bNext) {
        index = current < 13 && current + 1;
      } else {
        index = current > 0 && current - 1;
      }
      const el = document.getElementById(`slide${index}`);
      console.log(el, `slide${index}`);
      el.scrollIntoView({ behavior: 'smooth' });
      setCurrent(index);
    }
  };

  const handleClose = (e) => {
    onClose();
  };

  useEffect(() => {
    setCurrent(index);
    if (open) {
      document
        .getElementById(`slide${index}`)
        .scrollIntoView({ behavior: 'instant', block: 'center' });
      setShow(true);
    } else {
      setShow(false);
      setCurrent(0);
    }
  }, [index, open]);
  return (
    <>
      <div
        className={`fixed inset-0 z-10 overflow-y-auto ${
          open ? 'block' : 'hidden'
        }`}
      >
        <div className="fixed inset-0 w-full h-screen-full bg-white opacity-70"></div>
        <div className="flex items-center min-h-full z-15 relative">
          <div className="carousel w-full">
            {list.map((c, i) => (
              <div
                id={`slide${i}`}
                key={`key${i}`}
                className="carousel-item relative w-full"
              >
                <img
                  src={`img/${c < 10 ? '00' : '0'}${c}.jpg`}
                  alt="사진 보기"
                  className={`w-full py-6 max-w-fit m-auto ${
                    show ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                      <a
                        href={
                          i === 0
                            ? `#slide${list.length - 1}`
                            : `#slide${list[i + 1]}`
                        }
                        className="btn btn-circle bg-back opacity-75 mix-blend-multiply border-none"
                      >
                        ❮
                      </a>
                      <a
                        href={
                          i === list.length - 1
                            ? '#slide0'
                            : `#slide${list[i + 1]}`
                        }
                        className="btn btn-circle bg-back opacity-75 mix-blend-multiply border-none"
                      >
                        ❯
                      </a>
                    </div> */}
              </div>
            ))}
          </div>
          <button
            id="viewer_close"
            className="absolute top-0 w-full h-10 bg-back text-white text-center z-50"
            onClick={handleClose}
          >
            닫기
          </button>
          {current > 0 && (
            <div
              className="absolute left-0 w-1/2 h-screen-full bg-transparent flex items-center"
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
            </div>
          )}
          {current < list.length - 1 && (
            <div
              className="absolute right-0 w-1/2 h-screen-full bg-transparent flex items-center justify-end"
              onClick={handleNextPrev(true)}
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
