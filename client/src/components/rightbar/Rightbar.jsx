import "./rightbar.css"
import Online from "../online/online.jsx"
import {Users} from "../../data.js"

export default function Rightbar({profile}) {
  const HomeRightBar = () => {
    return(
      <>
          <div className="birthdayContainer">
            <img className="birthdayImg" src="/assets/person/3.jpeg" alt="" />
            <span className="birthdayText"> <b>Vardan Parzyan</b> have a birthday today </span>
          </div>
          <h4 className="rightbarTitle"> Online friends</h4>
          <ul className="onlineFriendList">
            {Users.map(u=>(
              <Online key={u.id} user={u}/>
            ))}
          </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Vanadzor</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Kirovakan</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/ironman.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Iron-Man</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/hulk.jpg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Hulk</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/naruto.jpg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Naruto Uzumaki</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/jack.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jack Sparrow</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
