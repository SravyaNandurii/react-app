import React from "react";
import "./signup.scss";
function Bottom_cards() {
  return (
    <div className="total">
      <div className="total__Seperatingdiv"></div>
      <div className="total__firstcard">
        <div className="total__firstcard__text">
          <h2 className="total__firstcard__text__text1firstcard">
            Enjoy on your TV
          </h2>
          <p className="total__firstcard__text__text2firstcard">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="total__firstcard__firstvideo">
          <video
            data-uia="nmhp-card-animation-asset-video"
            autoplay
            playsinline
            muted
            loop
            className="total__firstcard__firstvideo__video1"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
      <div className="total__Seperatingdiv"></div>
      <div className="total__firstcard">
        <div className="total__firstcard__firstvideo">
          <img
            alt
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            data-uia="nmhp-card-animation-asset-image"
            class="default-ltr-cache-1d3w5wq"
          ></img>
        </div>
        <div className="total__firstcard__text">
          <h2 className="total__firstcard__text__text1firstcard">
            Download your shows to watch offline
          </h2>
          <p className="total__firstcard__text__text2firstcard">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
      <div className="total__Seperatingdiv"></div>
      <div className="total__firstcard">
        <div className="total__firstcard__text">
          <h2 className="total__firstcard__text__text1firstcard">
            Create profiles for kids
          </h2>
          <p className="total__firstcard__text__text2firstcard">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
        <div className="total__firstcard__firstvideo">
          <img src="https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" />
        </div>
      </div>
    </div>
  );
}
export default Bottom_cards;
