import "../styles.css"
import { MdPlaylistAdd, MdOutlineAirplaneTicket } from "react-icons/md";
import {
  AiOutlineMenu,
  AiOutlineDashboard,
  AiOutlineProject,
  AiOutlineUserAdd
} from "react-icons/ai";
export const Sidebar = () =>{
    return(
        <div className="sidebar-container common-flex-col pd-sm">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <button>
          <span>
            <AiOutlineMenu />
          </span>{" "}
          Hide
        </button>
      </div>
      <div>
        <div className="options">
          <span>
            <AiOutlineDashboard />{" "}
          </span>
          <li>Dashboard </li>
        </div>
        <div className="options">
          <span>
            <AiOutlineProject />{" "}
          </span>
          <li>Projects </li>
        </div>
        <div className="options">
          <span>
            <MdPlaylistAdd />{" "}
          </span>
          <li>Earnings </li>
        </div>
        <div className="options">
          <span>
            <AiOutlineUserAdd />{" "}
          </span>
          <li>Profile </li>
        </div>
      </div>

      <div>
        <h2>Support</h2>
        <div className="options">
          <span>
            <MdOutlineAirplaneTicket />{" "}
          </span>
          <li>Tickets </li>
        </div>
      </div>
    </div>
    )
}