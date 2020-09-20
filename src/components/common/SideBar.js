import React from 'react';

const SideBar = () => {
  const list = ["My Coaches"];
  const sessiorList = ["Inperson", "Online"];
  return (
    <>
      <div className="dropdown">
        <img src="/images/SideBar.png" data-toggle="dropdown" alt="" height="40px" width="30px" className="SideBar" />
        <div className="dropdown-menu">
          <div className="row Profile">
            <img src="/images/Ellipse.png" alt="" height="50%" width="50%" /> <br />
          </div>
          <div className="ProfileName">
            Plff Jenkins
          </div>
          {list && list.map((item, index) => (
            <div className="ProfileList" key={index}>
              {item}
            </div>
          ))}
          <div className="FilterBy">
            Filter By
              <div className="Sessior">
              Sessior Type
              <img src="/images/UpDown-icon.png" alt="" className="UpDown" height="20%" width="20%" />
              {sessiorList && sessiorList.map((item, index) => (
                <div className="Inperson" key={index}>
                  <input type="checkbox" className="Checkbox" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;