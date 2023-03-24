import styles from "./UserProfile.module.css";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import { Link } from "react-router-dom";
import path from "@/config/path";

const UserProfile = () => {
  const dummyUser = {
    userName: "banabana",
    userImg: "https://picsum.photos/70/70/?random",
  };

  return (
    <div className={`${styles[`mypage-profile-container`]}`}>
      <div className={`${styles[`mypage-profile`]}`}>
        <img src={dummyUser.userImg} className={`${styles[`mypage-profile-img`]}`}></img>
        <p className={`${styles[`mypage-profile-name`]}`}>{dummyUser.userName}</p>
      </div>
      <div className={`${styles[`mypage-profile-item-container`]}`}>
        <Link to={`${path.mypage}/bookmarks`}>
          <div className={`${styles[`mypage-profile-item`]}`}>
            <BookmarkBorder fontSize="large" />
            <p className={`${styles[`mypage-profile-item-text`]}`}>스크랩북</p>
          </div>
        </Link>
        <Link to={`${path.mypage}/feed`}>
          <div className={`${styles[`mypage-profile-item`]}`}>
            <StickyNote2OutlinedIcon fontSize="large" />
            <p className={`${styles[`mypage-profile-item-text`]}`}>내가 쓴 글</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default UserProfile;
