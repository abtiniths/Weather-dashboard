import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">IT-HÖGSKOLAN</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <QueryBuilderIcon className="icon" />
            <span>Clock</span>
          </li>
          <li>
            <WbSunnyIcon className="icon" />
            <span>Weather</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Setting</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <span className="bottom">IT-HÖGSKOLAN</span>
      </div>
    </div>
  );
}
