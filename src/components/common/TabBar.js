import React from 'react';
import { Link } from 'react-router-dom';

const TabBar = () => {
  const tabList = ["Coches", "Packages"];
  return (
    <div className="TabBar">
      <ul className="list-inline">
        {tabList && tabList.map((item, index) => (
          <li key={index}><Link to="#" className={index === 0 ? "TabBarActive" : ""} key={index}>{item}</Link></li>
        ))}
        <img src="/images/Sorting.png" alt="" className="ImgSorting"/>
        <img src="/images/Search.png" alt="" className="ImgSearching"/>
      </ul>
    </div>
  );
};

export default TabBar;