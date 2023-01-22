import React from "react";

export const useAnimationFrame = ({
  nextAnimationFrameHandler,
  // we still want to have "infinite" animations in some cases
  duration = Number.POSITIVE_INFINITY,
  shouldAnimate,
}: any) => {
  console.log(shouldAnimate);
  const frame = React.useRef(0);
  // keep track of when animation is started
  const firstFrameTime = React.useRef(performance.now());

  const animate = (now: any) => {
    // calculate at what time fraction we are currently of whole time of animation
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }

    if (timeFraction <= 1) {
      nextAnimationFrameHandler(timeFraction);

      // request next frame only in cases when we not reached 100% of duration
      if (timeFraction != 1) frame.current = requestAnimationFrame(animate);
    }
  };
  React.useEffect(() => {
    if (shouldAnimate) {
      firstFrameTime.current = performance.now();
      frame.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(frame.current);
    }

    return () => cancelAnimationFrame(frame.current);
  }, [shouldAnimate]);
};
