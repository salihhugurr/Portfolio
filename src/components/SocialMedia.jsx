import React from "react";
import {FaGithub,FaInstagram, FaTwitter} from 'react-icons/fa'


const SocialMedia = () => {
    return(
        <div className="app__social">
            <div>
                <a className="app__flex" href="https://www.instagram.com/ugurrsalihh/">
                    <FaInstagram />
                </a>
            </div>
            <div>
                <a className="app__flex" href="https://github.com/salihhugurr">
                    <FaGithub />
                </a>
            </div>
            <div>
                <a className="app__flex" href="https://twitter.com/salihhugurr">
                    <FaTwitter/>
                </a>
            </div>
        </div>
    )
}

export default SocialMedia;