import React from "react";
import halu01 from "../../images/halo_01.png";
import halu02 from "../../images/halo_02.png";
import halu03 from "../../images/halo_03.png";
import ImageGallery from "react-image-gallery";

export default function HaloCarousel() {
  const images = [
    {
      original: "https://i.imgur.com/uEPP1DO.png",
      thumbnail: "https://i.imgur.com/uEPP1DO.png",
    },
    {
      original: "https://i.imgur.com/zKjxaZX.png",
      thumbnail: "https://i.imgur.com/zKjxaZX.png",
    },
    {
      original: "https://i.imgur.com/4upux2y.png",
      thumbnail: "https://i.imgur.com/4upux2y.png",
    },
  ];

  return (
    <>
      <div className="w-fit">
        <ImageGallery
          showBullets={false}
          showPlayButton={false}
          showFullscreenButton={false}
          items={images}
        />
      </div>
    </>
  );
}
