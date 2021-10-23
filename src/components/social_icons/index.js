import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin,
    faMailchimp
} from '@fortawesome/free-brands-svg-icons'

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="https://fb.com//wbi.whiteboxideas" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fb" icon={faFacebook} />
          </a>
          {/*<a href="https://github.com/motasimfoad" target="_blank" rel="noopener noreferrer">*/}
          {/*<FontAwesomeIcon className="git" icon={faGithub} />*/}
          {/*</a>*/}
          {/*<a href="https://twitter.com/okrittim" target="_blank" rel="noopener noreferrer">*/}
          {/*<FontAwesomeIcon className="twitter" icon={faTwitter} />*/}
          {/*</a>*/}
          <a href="https://www.instagram.com/whiteboxideas/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="insta" icon={faInstagram} />
          </a>
             <a href="mailto:contact@whiteboxideas.com" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon className="mail" icon={faEnvelope} />
             </a>
          {/*<a href="https://www.linkedin.com/in/okrittim/?originalSubdomain=bd" target="_blank" rel="noopener noreferrer">*/}
          {/*<FontAwesomeIcon className="linkedin" icon={faLinkedin} />*/}
          {/*</a>*/}
         </Col>
  );
}

export default SocialIcons;
