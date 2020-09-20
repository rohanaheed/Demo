import React from 'react';
import Rating from 'react-rating';

const ImgCard = ({ className, imgPath, preVerify, ratingValue, location, view, language }) => {
  return (
    <div className={className}>
      <img src={imgPath} height="50%" width="100%" alt="" />
      <div className="Details">
        <div className="PersonalDetail">
          Jhon Smith
          {preVerify &&
            <img src="/images/PreVerify.svg" height="5%" width="20%" alt="" />
          }
          </div>
        <div className="Rating">
          <Rating
            readonly={false}
            initialRating={ratingValue}
            emptySymbol={<img src="/images/empty-star.svg" alt='Empty Rating Star' />}
            fullSymbol={<img src="/images/full-star.svg" alt='Full Rating Star' />}
          />
          <div className="Reviews">{view}</div>
        </div>
        <div className="Location">
          <img src="/images/location_icon.svg" className="imageLocation" alt="" />
          {location && location}
        </div>
        <div className="Language">
          <img src="/images/language_icon.svg" className="imageLocation" alt="" />
          {language && language}
        </div>
      </div>
    </div>
  );
};

export default ImgCard;