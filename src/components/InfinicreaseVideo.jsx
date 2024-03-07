"use client";
import Image from "next/image";
import React, { useState } from "react";
import { VectoVideo } from "./common/Icons";

const InfinicreaseVideo = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false); // State to track if the video is playing

  // Function to handle video play/pause
  const videoPlayHandler = () => {
    if (!isVideoPlaying) {
      setVideoPlaying(true);
      const video = document.getElementById("videoElement");
      if (video) {
        video.play(); // Playing the video
      }
    } else {
      setVideoPlaying(false); // Pausing the video
    }
  };
  return (
    <div className="container xl:max-w-[1140px] mx-auto px-5 xl:px-0 mt-[169px] pb-[148px]">
      <div className="">
        <h2 className=" font-Nunito font-black text-5xl text-white text-center">
          What is <span className="linear_color"> Infinicrease ?</span>
        </h2>
        <p className=" font-Montserrat text-base sm:text-lg text-white opacity-80 mt-2 text-center">
          For the quick overview click the video:
        </p>
        <div className=" w-full max-w-[908px] mx-auto mt-[53px]">
          <div className="relative rounded overflow-hidden xl:z-30">
            <video
              id="videoElement"
              onClick={videoPlayHandler}
              controls
              className="w-full h-full relative !z-[2]"
              poster={"/assets/images/hero/Hero.webp"}
            >
              <source src={"assets/video/crescent_moon.mp4"} type="video/mp4" />
            </video>
            {/* Play button */}
            {!isVideoPlaying && (
              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  src={"/assets/images/InfinicreaseVideo/PlayButton.svg"}
                  alt="play button"
                  className="sm:w-16 sm:h-16 w-10 h-10 object-contain cursor-pointer absolute translate-x-[-50%] translate-y-[-50%] top-[50%] start-[50%] z-50"
                  onClick={videoPlayHandler}
                />
                {/* Image */}
                <Image
                  src="/assets/images/InfinicreaseVideo/video_image.png"
                  width={707}
                  height={378}
                  alt="line"
                  sizes="100vw"
                  loading="lazy"
                  className="w-full !z-20 absolute h-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfinicreaseVideo;
