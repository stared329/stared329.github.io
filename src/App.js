import React, { createRef, useEffect, useState } from 'react';
import ReactSparkle from 'react-sparkle';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PhotoViewer from './PhotoViewer';
import Main from './Main';
import Introduce from './Introduce';
import Gallery from './Gallery';
import Location from './Location';
import info from './assets/info.json';

function App() {
  const { width } = window.screen;
  const w = width > 448 ? 448 : width;
  const [height, setHeight] = useState(parseInt(1.50333504 * w, 10));
  const [audioStatus, changeAudioStatus] = useState(false);
  const [{ father, mother, child }, setInfo] = useState({
    father: null,
    mother: null,
    child: null,
  });
  if (width < 449) {
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
  }

  useEffect(() => {
    const [k, v] = window.location.search.replace('?', '').split('=');
    if (k === 'target' && ['br', 'gr'].includes(v)) {
      setInfo(info[v]);
    }
    return () => {
      changeAudioStatus(false);
    };
  });

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }
  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  let ti = null;
  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* right swipe */
        if (ti) clearTimeout(ti);
        ti = setTimeout(() => current < 3 && setCur(current + 1), 300);
      } else {
        /* left swipe */
        if (ti) clearTimeout(ti);
        ti = setTimeout(() => current > 0 && setCur(current - 1), 300);
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }

  useEffect(() => {
    const { width } = window.screen;
    const w = width > 448 ? 448 : width;
    setHeight(parseInt(1.50333504 * w, 10));
  }, []);

  const [openPhoto, setPhoto] = useState({ open: false, index: null });
  const [current, setCur] = useState(0);
  const mainRef = createRef(null);
  const introRef = createRef(null);
  const galRef = createRef(null);
  const locRef = createRef(null);

  return (
    <div className="root-back h-screen-full">
      <div className="flex w-full justify-center overflow-auto opacity-95">
        <div
          className={`relative container max-w-md mx-auto h-screen-full text-back ${
            openPhoto.open && 'blur-md'
          }`}
        >
          {width > 448 && (
            <button
              className="absolute text-[xxx-large] text-white top-0 bottom-0 left-[-10%]"
              onClick={() => current > 0 && setCur(current - 1)}
            >{`<`}</button>
          )}
          {width > 448 && (
            <button
              className="absolute text-[xxx-large] text-white top-0 bottom-0 right-[-10%]"
              onClick={() => current < 3 && setCur(current + 1)}
            >{`>`}</button>
          )}
          <TransitionGroup>
            {current === 0 && (
              <CSSTransition nodeRef={mainRef} timeout={500} classNames="item">
                <div ref={mainRef} className="absolute inset-0">
                  <Main
                    {...{ height, ...info, audioStatus, changeAudioStatus }}
                  />
                </div>
              </CSSTransition>
            )}
            {current === 1 && (
              <CSSTransition nodeRef={introRef} timeout={500} classNames="item">
                <div ref={introRef} className="absolute inset-0">
                  <Introduce {...{ father, mother, child }} />
                </div>
              </CSSTransition>
            )}
            {current === 2 && (
              <CSSTransition nodeRef={galRef} timeout={500} classNames="item">
                <div ref={galRef} className="absolute inset-0">
                  <Gallery {...{ setPhoto }} />
                </div>
              </CSSTransition>
            )}
            {current === 3 && (
              <CSSTransition nodeRef={locRef} timeout={500} classNames="item">
                <div ref={locRef} className="absolute inset-0">
                  <Location />
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
          {/* <footer className="bg-transparent fixed bottom-0 max-w-md mx-auto w-full font-sans text-xs text-center opacity-50 mix-blend-difference py-2">
            Copyright 2023 jamie kim All rights reserved.
          </footer> */}
        </div>
        <PhotoViewer
          {...{
            ...openPhoto,
            onClose: () => setPhoto({ open: false, index: null }),
          }}
        />
        <ReactSparkle flickerSpeed="slower" maxSize={7} fadeOutSpeed={30} />
      </div>
    </div>
  );
}

export default App;
