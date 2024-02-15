import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/" target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/" target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
    </div>
  );
};

export default SocialIcons;
