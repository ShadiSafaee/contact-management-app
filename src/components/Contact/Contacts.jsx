import { Fragment } from "react";
import { CURRENTLINE, CYAN, ORANGE, PINK, RED } from "../../helpers/colors";
const Contacts = () => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <button className="btn mx-2" style={{ backgroundColor: PINK }}>
                  Creat New Contact
                  <i className="fa fa-plus-circle mx-2" />
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <div style={{ backgroundColor: CURRENTLINE }} className="card my-2">
              <div className="card-body">
                <div className="row align-items-center d-flex justify-content-around">
                  <div className="col-md-4 col-sm-4">
                    <img
                      src="https://via.placeholder.com/200"
                      alt=""
                      style={{ border: `1px solid "{PURPLE}` }}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-7 col-sm-7">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-dark">
                        First Name & Surname:{" "}
                        <span className="fw-bold">Shadi Safaee</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        Contact Number:{" "}
                        <span className="fw-bold">07787853416</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        Email Address:{" "}
                        <span className="fw-bold">shadisafaee@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-1 col-sm-1 d-flex-column align-items-center">
                    <button
                      className="btn my-1"
                      style={{ backgroundColor: ORANGE }}
                    >
                      <i className="fa fa-eye" />
                    </button>
                    <button
                      className="btn my-1"
                      style={{ backgroundColor: CYAN }}
                    >
                      <i className="fa fa-pencil" />
                    </button>
                    <button
                      className="btn my-1"
                      style={{ backgroundColor: RED }}
                    >
                      <i className="fa fa-trash" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
