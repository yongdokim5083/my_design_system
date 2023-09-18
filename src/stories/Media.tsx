import React from 'react';
import './Media.css';

interface MediaProps {
  ttl?: string;
  txt?: string;
  backgroundColor?: string;
  rev?: 'rev';
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Media = ({ ttl, txt, backgroundColor, rev, ...props }: MediaProps) => {
  return (
    // <span className={['el_label', `el_label--${size}`].join(' ')} style={{ backgroundColor }} {...props} {...props}>
    //   {label}
    // </span>

    <div className={['bl_media', `bl_media__${rev}`].join(' ')}>
      <div className="bl_media_imgWrapper">
        <img
          alt="사진: 손에 든 스마트폰"
          src="https://img.hankyung.com/photo/202212/AKR20221206087000084_01_i_P4.jpg"
        />
      </div>
      <div className="bl_media_body">
        <h3 className="bl_media_ttl">{ttl}</h3>
        <p className="bl_media_txt">{txt}</p>
      </div>
    </div>
  );
};
