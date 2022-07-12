import "./online.css"

export default function online({user}) {
  return (
        <li className="onlineFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImage" src={user.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">{user.username}</span>
            </li>
  )
}
