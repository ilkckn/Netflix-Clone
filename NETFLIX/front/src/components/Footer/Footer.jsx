import React from "react";
import "./Footer.css";
import youtubeIcon from "../../assets/youtube_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import facebookIcon from "../../assets/facebook_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footerIcons">
        <img src={youtubeIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={facebookIcon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyrightText">1997-2023 Netflix, Inc.</p>
    </div>
  );
}

export default Footer;
