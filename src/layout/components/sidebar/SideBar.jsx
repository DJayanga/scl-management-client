import React, { useState } from 'react';
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
  faRotate,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export const SideBar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();

  const items = [
    {
      id: 1,
      icon: faHome,
      name: 'Dashboard',
      link: '/',
      subItems: [],
    },
    {
      id: 2,
      icon: faUserGraduate,
      name: 'Students',
      link: '/students',
      subItems: [
        {
          id: 1,
          icon: faPlus,
          name: 'Add Students',
          link: '/students/add',
        },
      ],
    },
    {
      id: 3,
      icon: faDoorOpen,
      name: 'Class Rooms',
      link: '/classrooms',
      subItems: [
        {
          id: 1,
          icon: faPlus,
          name: 'Add Class',
          link: '/classrooms/add',
        },
      ],
    },
    {
      id: 4,
      icon: faChalkboardTeacher,
      name: 'Teachers',
      link: '/teachers',
      subItems: [
        {
          id: 1,
          icon: faPlus,
          name: 'Add Teacher',
          link: '/teachers/add',
        },
        {
          id: 2,
          icon: faRotate,
          name: 'Allocate Subject',
          link: '/teachers/allocate-subject',
        },
        {
          id: 3,
          icon: faRotate,
          name: 'Allocate Class',
          link: '/teachers/allocate-class',
        },
      ],
    },
    {
      id: 5,
      icon: faBook,
      name: 'Subjects',
      link: '/subjects',
      subItems: [
        {
          id: 1,
          icon: faPlus,
          name: 'Add Subject',
          link: '/subjects/add',
        },
      ],
    },
  ];

  const handleClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <Nav vertical className="sidebar">
      {items.map((item) => {
        const isActive =
          location.pathname === item.link || item.subItems.some((subItem) => location.pathname === subItem.link);
        return (
          <div key={item.id}>
            <NavItem>
              <Link
                to={item.link}
                className={`main-list ${isActive ? 'active' : ''}`}
                onClick={() => handleClick(item.id)}
              >
                <FontAwesomeIcon icon={item.icon} fixedWidth />
                <span>{item.name}</span>
              </Link>
            </NavItem>
            {item.subItems.map((subItem) => {
              const isSubItemActive = location.pathname === subItem.link;
              return (
                <NavItem key={subItem.id}>
                  <Link
                    to={subItem.link}
                    className={`sub-list ${isSubItemActive ? 'active' : ''}`}
                    onClick={() => handleClick(item.id)}
                  >
                    <FontAwesomeIcon icon={subItem.icon} fixedWidth />
                    <span>{subItem.name}</span>
                  </Link>
                </NavItem>
              );
            })}
          </div>
        );
      })}
    </Nav>
  );
};
