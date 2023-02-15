import React from "react";
import { Image } from "react-bootstrap";

import { BsDiscord, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import {
  FaCcVisa,
  FaCcPaypal,
  FaCcMastercard,
  FaRegCreditCard,
} from "react-icons/fa";

import "./Footer.scss";
import logo from "./logo.png";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row ">
          <div className="col-md-1">
            <Image src={logo} width="100" />
          </div>

          <div className="col-md-5  footerLeft">
            <p>
              LoLMerchant isn’t endorsed by Riot Games and doesn’t reflect the
              views or opinions of Riot Games or anyone officially involved in
              producing or managing League of Legends. League of Legends and
              Riot Games are trademarks or registered trademarks of Riot Games,
              Inc. League of Legends © Riot Games, Inc.
            </p>
            <div className="socialIcons">
              <span>
                <BsDiscord />
              </span>
              <span>
                <BsFacebook />
              </span>
              <span>
                <BsInstagram />
              </span>
              <span>
                <BsTwitter />
              </span>
            </div>
          </div>

          <div className="col-md-4 footerRight">
            <h5 className="text-uppercase">
              <strong>Payment Methods</strong>
            </h5>
            <div className="payIcons">
              <span>
                <FaCcVisa />
              </span>
              <span>
                <FaCcPaypal />
              </span>
              <span>
                <FaCcMastercard />
              </span>
              <span>
                <FaRegCreditCard />
              </span>
            </div>
            <p>
              By purchasing on LOL Merchant, you are agreeing to our Terms of
              Service. Please also read our Privacy Policy and Refund Policy.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-3">
        Copyright © 2022 | LoLMerchant | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
