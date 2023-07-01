import './Layout.scss';
import { SideBar } from './components/sidebar/SideBar';
import { NavBar } from './components/navbar/NavBar';

export const Layout = ({ children }) => {
  return (
    <div className="top-container">
      <NavBar />
      <div className="main-container">
        <SideBar />
        <div className="main-content">
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
};
