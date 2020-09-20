import React from 'react';
import SideBar from './SideBar';

const Header = () => {
  const list = ["Home", "Session", "Chat", "Support"];
  return (
    <div className="Card">
      <div className="Header">
        <div className="col-sm-2 LeftMenu">
          COGETER
        </div>
        <div className="col-sm-4 LeftMenu">
          <SideBar />
        </div>
        {list && list.map((item, index) => (
          <div className="col-sm-2" key={index}>
            <div className="row text-right">
              <span className={index === 0 ? "Menu1" : "Menu"}>
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;