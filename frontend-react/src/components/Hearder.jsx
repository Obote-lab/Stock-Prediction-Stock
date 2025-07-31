import Buttons from './Buttons';
import { Link } from 'react-router-dom';

const Hearder = () => {
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link className="navbar-brand text-light" to={'/'} >
          Stock Predition Portal
        </Link>

        <div>
          <Buttons text="Login" class="btn-outline-info" url='/login'/>
          &nbsp;
          <Buttons text="Register" class="btn-info" url='/register'/>
        </div>
      </nav>
    </>
  );
}

export default Hearder
