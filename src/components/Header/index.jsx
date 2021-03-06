import React from "react";
import wasteLogo from "../../images/waste_coin_logo.svg";
import appleLogo from "../../images/applestore.svg";
import googleLogo from "../../images/googlestore.svg";
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand"><img src={wasteLogo} className="logo" alt="logo" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/#how_it_works"> How it works</a>
          </li>
          <li className="nav-item">
            <Link to="/registration" className="nav-link">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#contact_us">Contact Us</a>
          </li>
        </ul>
        <ul className="navbar-nav my-2 my-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="https://s3.amazonaws.com/gonativeio/static/5edbc58d67540a290b490255/app-release.apk"><img src={googleLogo} className="logo" alt="logo" /> <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="##"><img src={appleLogo} className="logo" alt="logo" /></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
