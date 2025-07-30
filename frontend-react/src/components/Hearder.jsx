import React from 'react'
import Buttons from './Buttons';

const Hearder = () => {
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <a className="navbar-brand text-light" href="#">
          Stock Predition Portal
        </a>

        <div>
          <Buttons text="Login" class="btn-outline-info"/>
          &nbsp;
          <Buttons text="Register" class="btn-info"/>
        </div>
      </nav>
    </>
  );
}

export default Hearder
