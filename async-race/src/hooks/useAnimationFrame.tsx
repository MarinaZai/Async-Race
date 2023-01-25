import React from "react";

export const useAnimationFrame = ({
  nextAnimationFrameHandler,
  // we still want to have "infinite" animations in some cases
  duration = Number.POSITIVE_INFINITY,
  shouldAnimate,
}: {
  nextAnimationFrameHandler: (time: number) => void;
  duration: number;
  shouldAnimate: boolean;
}) => {
  const frame = React.useRef(0);
  const firstFrameTime = React.useRef(performance.now());

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }

    if (timeFraction <= 1) {
      nextAnimationFrameHandler(timeFraction);
      if (timeFraction !== 1) frame.current = requestAnimationFrame(animate);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldAnimate]);
};
