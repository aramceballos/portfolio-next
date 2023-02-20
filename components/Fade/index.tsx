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
  const uniqueId = Math.random().toString(36).substr(2, 9);

  const childrenWithClassName = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: {
          animationFillMode: "both",
          animationDuration: duration ? duration + "ms" : "0ms",
          animationDelay: delay ? delay + "ms" : "0ms",
          animationIterationCount: 1,
          opacity: 1,
          animationName: `fade-animation-${uniqueId}`,
        },
      });
    }
    return child;
  });

  return (
    <>
      {childrenWithClassName}
      <style jsx>{`
        @keyframes fade-animation-${uniqueId} {
          0% {
            opacity: 0;
            transform: translate3d(
              ${left ? "-" + distance : right ? distance : 0},
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
