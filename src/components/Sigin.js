import React from "react";
import { Link } from "react-router-dom";

function Sigin() {
  return (
    <form>
        <div className="d-flex justify-content-center h-100">
          <div className="card signin">
            <div className="card-header">
              <h3 className="text-center">Sign In</h3>
            </div>
            <div className="card-body">
              <label className="labels">Email</label>
              <div className="input-group form-group">
                <input type="text" className="form-control" />
              </div>
              <br />
              <label className="labels">Password</label>
              <div className="input-group form-group">
                <input type="password" className="form-control" />
              </div>
              <br />
              <div className="form-group text-center">
                <input
                  type="submit"
                  value="Login"
                  className="btn login_btn"
                />
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<Link to="/sign-up">Sign Up</Link>
              </div>
              <div className="d-flex justify-content-center links">
                <Link to="/forgot-password">Forgot your password?</Link>
              </div>
            </div>
          </div>
        </div>
    </form>
  );
}

export default Sigin;
