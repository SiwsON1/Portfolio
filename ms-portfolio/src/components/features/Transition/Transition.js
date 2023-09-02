import React, { useRef, useEffect } from "react";
import gsap, { Power4 } from "gsap";

function Transition() {
  const trans = useRef(null);
  const transSecond = useRef(null);

  useEffect(() => {
    const localTimeline = gsap.timeline();


    localTimeline.addLabel("startSecond", "-=0.4");

    localTimeline.to(
      trans.current,
      { x: "-100%", duration: 2, ease: Power4.easeOut }
    );

    localTimeline.fromTo(
      transSecond.current,
      { x: "125%" },
      { x: "-100%", duration: 2, ease: Power4.easeOut },
      "startSecond"
    );
  }, []);

  return (
    <div className="fixed z-10 top-0 left-0 right-0 bottom-0 max-h-screen  pointer-events-none">
      <div ref={trans} className="absolute bg-[#3b2d71] top-0 w-full max-h-screen h-screen"></div>
      <div ref={transSecond} className="absolute bg-[#2e2257] top-0 w-full max-h-screen h-screen"></div>
    </div>
  );
}

export default Transition;