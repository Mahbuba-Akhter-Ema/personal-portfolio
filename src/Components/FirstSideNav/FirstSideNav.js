import { Line } from "rc-progress";
import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  FaCheck,
  FaDownload,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const FirstSideNav = () => {
  const Bangla = 100;
  const English = 90;
  const Hindi = 80;

  return (
    <div className="text-white w-full lg:sticky lg:top-16">

      <div className="justify-center p-4 sticky top-16 md:top-16 lg:z-50 bg-zinc-700  items-center text-center  text-white">
        <div className="justify-center flex items-center text-center mb-2 ">
          <img
            label="Mahbuba"
            alt=""
            className="w-20 rounded-full"
            src="https://i.ibb.co/vY2c3Hb/final-img-removebg-preview.png"
          />
        </div>
        <p className="font-semibold text-sm md:text-sm text-white">
          Mahbuba Akhter
        </p>
        <p className="font-semibold md:text-sm text-gray-400 text-sm mt-2">MERN Stack Developer</p>
        <p className="font-semibold md:text-sm text-gray-400 text-sm mt-1">Front-End Developer</p>
      </div>

      <div className="my-4 text-white font-semibold p-5">
        <div className="flex justify-between">
          <p>Country: </p>
          <p>United State</p>
        </div>
        <div className="flex justify-between">
          <p>City: </p>
          <p>New York</p>
        </div>
        <div className="flex justify-between">
          <p>Age: </p>
          <p>24 Year's</p>
        </div>
      </div>
      <hr className="w-full lg:w-60 mx-auto my-3" />

      <div className="p-4">
        <h1 className="text-sm md:text-lg p-2 font-bold">Language</h1>
        <div className="flex justify-center gap-8 mt-3">
          <p className="text-center">
            <CircularProgressbar
              value={Bangla}
              text={`${Bangla}%`}
              styles={buildStyles({
                textColor: "white",
                pathColor: "#fcb900",
                trailColor: "black",
              })}
            />
            <p className="mt-2">Bangla</p>
          </p>
          <p className="text-center">
            <CircularProgressbar
              value={English}
              text={`${English}%`}
              styles={buildStyles({
                textColor: "white",
                pathColor: "#fcb900",
              })}
            />
            <p className="mt-2">English</p>
          </p>
          <p className="text-center">
            <CircularProgressbar
              value={Hindi}
              text={`${Hindi}%`}
              styles={buildStyles({
                textColor: "white",
                pathColor: "#fcb900",
              })}
            />
            <p className="mt-2"> Hindi</p>
          </p>
        </div>
      </div>
      <hr className="w-full lg:w-60 mx-auto my-3" />

      <div className="p-4">
        <h1 className="text-sm md:text-lg p-2 font-bold">Skill</h1>

        <div>
          <div className="flex justify-between my-3">
            <p>HTML</p>
            <p>85%</p>
          </div>
          <Line percent={85} strokeWidth={2} strokeColor="#fcb900" />
          <div className="flex justify-between my-3">
            <p>CSS</p>
            <p>80%</p>
          </div>
          <Line percent={80} strokeWidth={2} strokeColor="#fcb900" />
          <div className="flex justify-between my-3">
            <p>BOOTSTRAP</p>
            <p>70%</p>
          </div>
          <Line percent={70} strokeWidth={2} strokeColor="#fcb900" />
          <div className="flex justify-between my-3">
            <p>TAILWIND</p>
            <p>80%</p>
          </div>
          <Line percent={80} strokeWidth={2} strokeColor="#fcb900" />
          <div className="flex justify-between my-3">
            <p>JAVASCRIPT</p>
            <p>70%</p>
          </div>
          <Line percent={70} strokeWidth={2} strokeColor="#fcb900" />
          <div className="flex justify-between my-3">
            <p>REACT JS</p>
            <p>75%</p>
          </div>
          <Line percent={75} strokeWidth={2} strokeColor="#fcb900" />
          <div className="flex justify-between my-3">
            <p>EXPRESS JS</p>
            <p>60%</p>
          </div>
          <Line percent={60} strokeWidth={2} strokeColor="#fcb900" />
          <div className="flex justify-between my-3">
            <p>NODE JS</p>
            <p>70%</p>
          </div>
          <Line percent={70} strokeWidth={2} strokeColor="#fcb900" />
          <div className="flex justify-between my-3">
            <p>MONGODB</p>
            <p>65%</p>
          </div>
          <Line percent={65} strokeWidth={2} strokeColor="#fcb900" />
        </div>
      </div>
      <hr className="w-full lg:w-60 mx-auto my-3" />

      <div className="p-4">
        <h1 className="text-sm md:text-lg p-2 font-bold">Knowledge</h1>

        <div className="flex  items-center text-center gap-4">
          <FaCheck style={{ color: "#fcb900" }}></FaCheck>
          <p className="text-sm text-zinc-400 ">Kitwind</p>
        </div>

        <div className="flex  items-center text-center gap-4">
          <FaCheck style={{ color: "#fcb900" }}></FaCheck>
          <p className="text-sm text-zinc-400 ">Mumba Ui</p>
        </div>

        <div className="flex  items-center text-center gap-4">
          <FaCheck style={{ color: "#fcb900" }}></FaCheck>
          <p className="text-sm text-zinc-400 ">Daisy Ui</p>
        </div>

        <div className="flex  items-center text-center gap-4">
          <FaCheck style={{ color: "#fcb900" }}></FaCheck>
          <p className="text-sm text-zinc-400 ">Swiper js</p>
        </div>

        <div className="flex  items-center text-center gap-4">
          <FaCheck style={{ color: "#fcb900" }}></FaCheck>
          <p className="text-sm text-zinc-400 ">Metarial Ui</p>
        </div>

        <div className="flex  items-center text-center gap-4">
          <FaCheck style={{ color: "#fcb900" }}></FaCheck>
          <p className="text-sm text-zinc-400 ">Flowbite</p>
        </div>

        <div className="flex  items-center text-center gap-4">
          <FaCheck style={{ color: "#fcb900" }}></FaCheck>
          <p className="text-sm text-zinc-400 ">Aos</p>
        </div>
      </div>

      <hr className="w-full lg:w-60 mx-auto my-3" />

      <div>
        <a
          href="https://drive.google.com/drive/u/0/folders/1kmzhSapnrDTH-qj6XxoB-Qcr3sRmdzwv"
          target={"_blank"}
          className="text-sm md:text-lg p-2 font-bold text-zinc-400  hover:text-white flex justify-center items-center text-center"
        >
          Download Resume
          <span className="mx-2">
            <FaDownload></FaDownload>
          </span>
        </a>
      </div>

      <div className="bg-zinc-700 shadow-lg sticky bottom-0 flex gap-3 mt-2 justify-center items-center text-center text-2xl p-2">
        <a
          target="_blank"
          href="https://web.facebook.com/delightfull.nard?_rdc=1&_rdr"
          className="text-zinc-400  hover:text-white "
        >
          {" "}
          <FaFacebook></FaFacebook>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/mahbuba_ema/"
          className="text-zinc-400  hover:text-white "
        >
          {" "}
          <FaInstagram></FaInstagram>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mahbuba-akhter-217367244/"
          className="text-zinc-400  hover:text-white "
        >
          {" "}
          <FaLinkedin></FaLinkedin>
        </a>
        <a
          target="_blank"
          href="https://github.com/Mahbuba-Akhter-Ema"
          className="text-zinc-400  hover:text-white "
        >
          {" "}
          <FaGithub></FaGithub>
        </a>
      </div>
    </div>
  );
};

export default FirstSideNav;