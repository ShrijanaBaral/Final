import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faRss, faComments, faVideo, faUsers, 
  faBookmark, faQuestionCircle, faBriefcase, 
  faCalendarAlt, faGraduationCap 
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FontAwesomeIcon icon={faRss} className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon icon={faComments} className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon icon={faVideo} className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon icon={faUsers} className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon icon={faBookmark} className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon icon={faQuestionCircle} className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon icon={faBriefcase} className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon icon={faCalendarAlt} className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon icon={faGraduationCap} className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg"src="/assets/person/barsha.png" alt="" />
            <span className="sidebarFriendName">Barsha Acharya</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg"src="/assets/person/shristi.png" alt="" />
            <span className="sidebarFriendName">Shristi Shahi Thakuri</span>
          </li><li className="sidebarFriend">
            <img className="sidebarFriendImg"src="/assets/person/surya.png" alt="" />
            <span className="sidebarFriendName">Surya Pokhrel</span>
          </li><li className="sidebarFriend">
            <img className="sidebarFriendImg"src="/assets/person/sushil.png" alt="" />
            <span className="sidebarFriendName">Sushil Aryal</span>
          </li><li className="sidebarFriend">
            <img className="sidebarFriendImg"src="/assets/person/mamta.png" alt="" />
            <span className="sidebarFriendName">Mamta Gautam</span>
          </li><li className="sidebarFriend">
            <img className="sidebarFriendImg"src="/assets/person/sabin.png" alt="" />
            <span className="sidebarFriendName">Sabin Timilsina</span>
          </li><li className="sidebarFriend">
            <img className="sidebarFriendImg"src="/assets/person/roju.png" alt="" />
            <span className="sidebarFriendName">Roju Aryal</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg"src="/assets/person/sita.png" alt="" />
            <span className="sidebarFriendName">Sita Aryal</span>
          </li><li className="sidebarFriend">
            <img className="sidebarFriendImg"src="/assets/person/jugal.png" alt="" />
            <span className="sidebarFriendName">Jugal Poudel</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
