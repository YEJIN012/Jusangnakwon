import styles from "@/pages/Feed/FeedDetail.module.css";

const UserImgName = () => {
  const dummyUser = {
    userName: "호정",
    userImg: "https://picsum.photos/30/30/?random",
  };

  return (
    <div className={`${styles[`user-profile-container`]}`}>
      <div className={`${styles[`user-profile`]}`}>
        <img src={dummyUser.userImg} className={`${styles[`user-img`]}`}></img>
        <p>{dummyUser.userName}</p>
      </div>
    </div>
  );
};

export default UserImgName;
