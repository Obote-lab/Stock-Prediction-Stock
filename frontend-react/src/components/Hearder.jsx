import { useContext } from 'react';
import Buttons from './Buttons';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from './AuthProvider';


const Hearder = () => {
  const {isLoggedIn, setLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout =()=>{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setLoggedIn(false)
    console.log('Logged out ');
    
    navigate('/login')
  }


  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link className="navbar-brand text-light" to={"/"}>
          Stock Predition Portal
        </Link>

        <div>
          {isLoggedIn ? (
            <>
               <Buttons text='Dashboard' class='btn-info' url='/dashboard' />
              &nbsp;
              <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Buttons text="Login" class="btn-outline-info" url="/login" />
              &nbsp;
              <Buttons text="Register" class="btn-info" url="/register" />
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Hearder
