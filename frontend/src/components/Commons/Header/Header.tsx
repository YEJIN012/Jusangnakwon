import logo from "/assets/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import styles from "./Header.module.css"

function Header() {

  return(
    <div className={`${styles[`header-container`]}`}>
        <img src={logo} height="20vw" alt="" />
        <SearchIcon/>
    </div>
    )
}

export default Header
