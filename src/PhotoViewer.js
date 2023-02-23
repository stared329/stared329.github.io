import React, { useEffect, useState } from "react";

export default function PhotoViewer({ open, index, onClose }) {
const [current, setCurrent] = useState(null);

const handleNextPrev = (e) => {
    const bNext = e.clientX > window.innerWidth/2;
    if(bNext) {
        setCurrent((prev) => prev === 13 ? 0 : prev+1);
    } else {
        setCurrent((prev) => prev === 0 ? 13 : prev-1);
    }
};

useEffect(() => {
    setCurrent(index);
}, [index]);
  return (
    <>
      {open ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-white opacity-70"
              onClick={onClose}
            ></div>
            <div className="flex items-center min-h-full z-15" onClick={handleNextPrev}>
              <div className="relative w-full rounded-md">
                <img src={`img/${current < 10 ? '00' : '0'}${current}.jpg`} alt="사진 보기" className="w-full" />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}