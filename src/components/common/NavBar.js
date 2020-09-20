import React from 'react';

const NavBar = () => {
  const navBarList = ["Boxing", "CrossFit", "Yoga", "Pilate", "Exercise", "Health", "Exercise", "Health", "Yoga", "Pilate", "Exercise", "Health", "Boxing", "Pilate"];
  return (
    <>
      <ul className="list-inline NavBar">
        {navBarList && navBarList.map((item, index) => (
          <li className="ColumnNav" key={index}>
            <span className={index === 0 ? 'NavBarItems' : ''}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;