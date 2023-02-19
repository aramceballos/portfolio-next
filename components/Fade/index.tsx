import React from "react";

type FadeProps = {
  children: React.ReactNode;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  delay?: number;
  duration?: number;
  distance?: string;
  className?: string;
};

const Fade = ({
  children,
  left,
  right,
  bottom,
  delay,
  duration,
  distance,
}: FadeProps) => {
  return (
    <>
      <div className='fade-container'>{children}</div>
      <style jsx>{`
        .fade-container {
          animation-fill-mode: both;
          animation-duration: ${duration + "ms" || "0ms"};
          animation-delay: ${delay + "ms" || "0ms"};
          animation-iteration-count: 1;
          opacity: 1;
          animation-name: fade-animation;
        }

        @keyframes fade-animation {
          0% {
            opacity: 0;
            transform: translate3d(
              ${left ? "-" + distance : right ? "-" + distance : 0},
              ${bottom ? "-" + distance : 0},
              0
            );
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </>
  );
};

export default Fade;
