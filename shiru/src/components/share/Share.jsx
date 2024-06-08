import "./share.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons"; 

export default function share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="../assets/post/1.jpeg"alt=""/>
          <input placeholder="What's in your Mind Shrijana?"
           className="shareInupt"
           />
           </div>
           <hr className=" shareHr"/>

          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                 <FontAwesomeIcon icon={faPhotoFilm} 
                 className="shareIcon"
                  />
                <span className="shareOptionText">Photo or Video</span>
              </div>
            </div>
          </div>
        </div>
     </div>
  )
}