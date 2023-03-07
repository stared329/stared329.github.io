import React, { createRef, useEffect, useState } from 'react';
import ReactSparkle from 'react-sparkle';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PhotoViewer from './PhotoViewer';
import Main from './Main';
import Introduce from './Introduce';
import Gallery from './Gallery';
import Location from './Location';

function App() {
  const { width } = window.screen;
  const w = width > 448 ? 448 : width;
  const [height, setHeight] = useState(parseInt(1.50333504 * w, 10));
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);

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

  const [grF, grM] = [
    {
      name: '안기환',
      re: '아버지',
      tel: '01000001234',
      bank: '기업',
      account: '123-456-78910',
    },
    {
      name: '이재순',
      re: '어머니',
      tel: '01000001234',
      bank: '기업',
      account: '123-456-78910',
    },
  ];
  const [brF, brM] = [
    {
      name: '김의겸',
      re: '아버지',
      tel: '01033178042',
      bank: '기업',
      account: '123-456-78910',
    },
    {
      name: '이성자',
      re: '어머니',
      tel: '01037298042',
      bank: '기업',
      account: '123-456-78910',
    },
  ];
  const [gr, br] = [
    {
      name: '안승범',
      re: '신랑',
      tel: '01071117466',
      bank: '기업',
      account: '010-7111-7466',
    },
    {
      name: '김재명',
      re: '신부',
      tel: '01092818042',
      bank: '카카오뱅크',
      account: '3333-12-6807956',
    },
  ];
  const [openPhoto, setPhoto] = useState({ open: false, index: null });
  const [current, setCur] = useState(0);
  const mainRef = createRef(null);
  const introRef = createRef(null);
  const galRef = createRef(null);
  const locRef = createRef(null);

  return (
    <div className="root-back max-h-screen">
      <div className="flex w-full justify-center overflow-auto opacity-95">
        <div
          className={`container max-w-md mx-auto h-screen text-back ${
            openPhoto.open && 'blur-md'
          }`}
        >
          <TransitionGroup>
            {current === 0 && (
              <CSSTransition nodeRef={mainRef} timeout={500} classNames="item">
                <div ref={mainRef}>
                  <Main {...{ height, gr, br }} />
                </div>
              </CSSTransition>
            )}
            {current === 1 && (
              <CSSTransition nodeRef={introRef} timeout={500} classNames="item">
                <div ref={introRef}>
                  <Introduce {...{ grF, grM, brF, brM, br, gr }} />
                </div>
              </CSSTransition>
            )}
            {current === 2 && (
              <CSSTransition nodeRef={mainRef} timeout={500} classNames="item">
                <div ref={galRef}>
                  <Gallery {...{ setPhoto }} />
                </div>
              </CSSTransition>
            )}
            {current === 3 && (
              <CSSTransition nodeRef={mainRef} timeout={500} classNames="item">
                <div ref={locRef}>
                  <Location />
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
          <footer className="bg-back fixed max-w-md font-sans text-xs text-center text-opacity-40 text-white py-2">
            Copyright 2023 jamie kim All rights reserved.
          </footer>
        </div>
        <PhotoViewer {...openPhoto} />
        <ReactSparkle flickerSpeed="slower" maxSize={7} fadeOutSpeed={30} />
      </div>
    </div>
  );
}

export default App;
