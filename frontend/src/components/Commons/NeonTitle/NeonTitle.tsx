import styles from './NeonTitle.module.css'

const NeonTitle = () => {
  return (
    <>
    <div className={`${styles[`container`]}`}>
      <h5 id="text" spellCheck={false}>
          주상낙원
      </h5>
    </div>
    </>
  );
};

export default NeonTitle;
