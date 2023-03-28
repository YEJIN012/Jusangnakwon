import styles from './NeonTitle.module.css'

const NeonTitle = () => {
  return (
    <>
    <div className={`${styles[`container`]}`}>
      <div className={`${styles[`style`]}`} id="text" contentEditable spellCheck={false}>
        주상낙원
      </div>
    </div>
    </>
  );
};

export default NeonTitle;
