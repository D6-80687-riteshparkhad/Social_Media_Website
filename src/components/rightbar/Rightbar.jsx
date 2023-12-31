import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
  

    const HomeRightbar = () => {
      return (
        <>
          <div className="birthdayContainer">
            <img src="asset/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Pola Foster</b> and <b>3 other friends</b> have a birthday
              today.
            </span>
          </div>
          <img src="asset/ad.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>\
          
        </>
      );
    };

    const ProfileRightbar = () => {
      const PF = process.env.REACT_APP_PUBLIC_FOLDER;
      return (
        <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Pune</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Wakad</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/ritesh.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ritesh P</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/ritesh.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ritesh P</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/ritesh.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ritesh P</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/ritesh.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ritesh P</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/ritesh.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ritesh P</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/ritesh.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ritesh P</span>
          </div>
        </div>
        </>
      )
    }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
