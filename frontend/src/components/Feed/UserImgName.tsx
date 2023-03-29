import styles from "@/pages/Commons/FeedDetail/FeedDetail.module.css";

const UserImgName = () => {
  const dummyUser = {
    userName: "banabana",
    userImg: "https://picsum.photos/80/80/?random",
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
