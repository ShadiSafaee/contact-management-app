import SearchContact from "./Contact/SearchContact";
import { Purple, Background } from "../helpers/colors.js";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: Background }}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
              <i className="fas fa-id-badge" Style={{ color: Purple }} />{" "}
              <span style={{ color: Purple }}>Contact</span> Management
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
