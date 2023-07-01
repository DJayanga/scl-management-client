import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './SideBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserGraduate,
  faChalkboardTeacher,
  faBook,
  faDoorOpen,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

export const SideBar = () => {
  return (
    <Nav vertical>
      <NavItem>
        <NavLink href="#" className="main-list">
          <FontAwesomeIcon icon={faHome} fixedWidth />
          <span>Dashboard</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" className="main-list">
          <FontAwesomeIcon icon={faUserGraduate} fixedWidth />
          <span>Students</span>
        </NavLink>
        <NavItem>
          <NavLink href="#" className="sub-list">
            <FontAwesomeIcon icon={faPlus} fixedWidth />
            <span>Add Students</span>
          </NavLink>
        </NavItem>
      </NavItem>
      <NavItem>
        <NavLink href="#" className="main-list">
          <FontAwesomeIcon icon={faDoorOpen} fixedWidth />
          <span>Class Rooms</span>
        </NavLink>
        <NavItem>
          <NavLink href="#" className="sub-list">
            <FontAwesomeIcon icon={faPlus} fixedWidth />
            <span>Add Class</span>
          </NavLink>
        </NavItem>
      </NavItem>
      <NavItem>
        <NavLink href="#" className="main-list">
          <FontAwesomeIcon icon={faChalkboardTeacher} fixedWidth />
          <span>Teachers</span>
        </NavLink>
        <NavItem>
          <NavLink href="#" className="sub-list">
            <FontAwesomeIcon icon={faPlus} fixedWidth />
            <span>Add Teacher</span>
          </NavLink>
        </NavItem>
      </NavItem>
      <NavItem>
        <NavLink href="#" className="main-list">
          <FontAwesomeIcon icon={faBook} fixedWidth />
          <span>Subjects</span>
        </NavLink>
        <NavItem>
          <NavLink href="#" className="sub-list">
            <FontAwesomeIcon icon={faPlus} fixedWidth />
            <span>Add Subject</span>
          </NavLink>
        </NavItem>
      </NavItem>
    </Nav>
  );
};
