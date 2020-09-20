import React from 'react';

const Footer = () => {
  const aboutList = ["About us", "Features", "How It Works", "Team", "Services", "Projects", "Pricing"];
  const blogList = ["News", "Articles", "Videos", "Testmonial", "Event"];
  const contactUsList = ["Write Us", "Community", "Beacome a Coach", "Verification", "Newsletter"];

  return (
    <div className="Footer">
      <div className="Bottom">
        jhbjh
      </div>
      <div className="BottomBar">
        <div className="FooterText">
          Are You a Coach ? <button className="Button">Become a coach</button>
        </div>
      </div>
      <div className="Information">
        <div className="Column1">
          <div className="InputField">
            Join us <br />
            <div className="input-group">
              <input type="text" className="form-control Input" placeholder="Enter your e-mail" id="mail" name="email" />
              <div className="input-group-append">
                <button className="input-group-text ButtonSend">Send</button>
              </div>
            </div>
            <div className="FollowUs">
              Follow us <br />
              <img src="/images/Social.svg" alt="" width="100%"/>
            </div>
          </div>
        </div>
        <div className="Column">
          <p className="Heading">ABOUT</p>
          {aboutList && aboutList.map((item, index) => (
            <p className="Properties" key={index}>{item}</p>
          ))}
        </div>
        <div className="Column">
          <p className="Heading">BLOG</p>
          {blogList && blogList.map((item, index) => (
            <p className="Properties" key={index}>{item}</p>
          ))}
        </div>
        <div className="Column">
          <p className="Heading">CONTACT US</p>
            {contactUsList && contactUsList.map((item, index) => (
              <p className="Properties" key={index}>{item}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;