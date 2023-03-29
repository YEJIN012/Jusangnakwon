import lottie from "lottie-web";
import animationData from "./cheers-wine.json";
import { useRef, useEffect } from "react";

export const FeedLoading = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: any;
    if (container.current) {
      animation = lottie.loadAnimation({
        container: container.current,
        animationData: animationData,
      });
    }

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);
  return <div>FeedLoading</div>;
};

export default FeedLoading;
