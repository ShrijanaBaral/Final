import './topbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faComment, faBell } from "@fortawesome/free-solid-svg-icons";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className='logo'>Shrijana Baral</span>
      </div>
      <div className="topbarCenter">
        <div className='searchbar'>
          <FontAwesomeIcon icon={faSearch} className='searchIcon' />
          <input placeholder='Search for Friend, post or video' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FontAwesomeIcon icon={faUser} />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FontAwesomeIcon icon={faComment} />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <FontAwesomeIcon icon={faBell} />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src='/assets/person/shiru.png' alt='' className='topbarImg' />
      </div>
    </div>
  );
}
