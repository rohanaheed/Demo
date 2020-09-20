import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import TabBar from './common/TabBar';
import NavBar from './common/NavBar';
import ImgCard from './common/ImgCard';

const Home = () => {
  return (
    <>
      <Header />
      <div className="AfterHeader">
        <div className="Body">
          <div className="TopLable">
            Welcom piff
          </div>
          <div className="Caption">
            Contact Coach and get complimentary package free
          </div>
          <div className="Tabs">
            <TabBar />
            <NavBar />
          </div>
          <div className="Trend">
            <div className="Top">
              Top Trending
            </div>
            <div className="Image">
              <ImgCard className="ImgCard" imgPath="/images/img_2.png" preVerify={true} ratingValue={3} location="UK" view={12} language="English" />
              <ImgCard className="ImgCard" imgPath="/images/img_6.png" preVerify={true} ratingValue={5} location="USA" view={120} language="French" />
              <ImgCard className="ImgCard" imgPath="/images/img_2.png" preVerify={true} ratingValue={1} location="New York" view={9} language="German" />
              <ImgCard className="ImgCard" imgPath="/images/img_6.png" location="UK" view={12} ratingValue={3} language="English" />
              <ImgCard className="ImgCard" imgPath="/images/img_6.png" location="UK" preVerify={true} ratingValue={1} view={12} language="English" />
              <ImgCard className="ImgCard" imgPath="/images/img_6.png" location="UK" preVerify={true} ratingValue={1} view={12} language="English" />
              <ImgCard className="ImgCard" imgPath="/images/img_3.png" location="UK" preVerify={true} ratingValue={1} view={12} language="English" />
              <ImgCard className="ImgCard" imgPath="/images/img_3.png" location="UK" preVerify={true} ratingValue={1} view={12} language="English" />
              <ImgCard className="ImgCard" imgPath="/images/img_3.png" location="UK" preVerify={true} ratingValue={1} view={12} language="English" />
              <ImgCard className="ImgCard" imgPath="/images/img_6.png" location="UK" preVerify={true} ratingValue={1} view={12} language="English" />
              <ImgCard className="ImgCard" imgPath="/images/img_6.png" location="UK" preVerify={true} ratingValue={1} view={12} language="English" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;