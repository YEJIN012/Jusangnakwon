import { useState } from "react";
import styles from "./ReadMore.module.css";

interface Content {
  content: string;
}

const ReadMore = (props: Content) => {
  const { content } = props;
  const [showContent, setShowContent] = useState(false);
  const toggleContent = () => setShowContent((prev) => !prev);

  return (
    <>
      {content.length <= 10 ? (
        <>{content}</>
      ) : (
        <>
          {showContent ? (
            <>{content}</>
          ) : (
            <div>
              {content.slice(0, 10)}...
              <button className={`${styles[`feed-detail-content-btn`]}`} onClick={toggleContent}>
                더 보기
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ReadMore;
