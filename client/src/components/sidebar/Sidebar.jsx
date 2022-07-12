import "./sidebar.css"
import Friends from "../friends/Friends"
import {RssFeed,HelpOutline,WorkOutline,Event,School,Chat,PlayCircleFilledOutlined,Group} from "@mui/icons-material"
import {Users} from "../../data.js"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="SidebarIcon"/>
              <span className="sidebarListItemText" >Feed</span>
            </li>
            <li className="sidebarListItem">
              <Chat className="SidebarIcon"/>
              <span className="sidebarListItemText" >Chat</span>
            </li>
            <li className="sidebarListItem">
              <PlayCircleFilledOutlined className="SidebarIcon"/>
              <span className="sidebarListItemText" >Video</span>
            </li>
            <li className="sidebarListItem">
              <Group className="SidebarIcon"/>
              <span className="sidebarListItemText" >Group</span>
            </li>
            <li className="sidebarListItem">
              <HelpOutline className="SidebarIcon"/>
              <span className="sidebarListItemText" >Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="SidebarIcon"/>
              <span className="sidebarListItemText" >Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Event className="SidebarIcon"/>
              <span className="sidebarListItemText" >Events</span>
            </li>
            <li className="sidebarListItem">
              <School className="SidebarIcon"/>
              <span className="sidebarListItemText" >Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show more</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            {Users.map(u=>(
              <Friends key={u.id} user={u}/>
            ))}
          </ul>
        </div>
    </div>
  )
}
