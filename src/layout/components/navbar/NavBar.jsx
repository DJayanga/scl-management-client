import { Navbar } from 'reactstrap';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
  return (
    <Navbar>
      <div className="logo">CCBC</div>
      <div className="user">
        <FontAwesomeIcon icon={faUser} />
        User
      </div>
    </Navbar>
  );
};
