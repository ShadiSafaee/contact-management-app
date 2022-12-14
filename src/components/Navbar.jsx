import SearchContact from "./Contact/SearchContact";
import { PURPLE, BACKGROUND } from "../helpers/colors.js";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
              <i className="fa fa-id-badge" Style={{ color: PURPLE }} />{" "}
              <span style={{ color: PURPLE }}>Contact</span> Management
              Application
            </div>
          </div>
          <div className="col">
            <SearchContact />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
