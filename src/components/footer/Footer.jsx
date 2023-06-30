// import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillPhone,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-500  mt-5 bottom-0">
      <div className="mx-auto w-full max-w-screen-xl px-20 py-6 flex flex-col gap-2">
        <div className="">
          <Link to={`/`}>
            <span className="w-min font-bold text-xl flex flex-col items-center text-slate-900">
              <div className="italic uppercase">waroeng</div>
              <div className="font-dancing text-gray-100 mt-[-15px]">
                kenangan
              </div>
            </span>
          </Link>
        </div>
        <div className="flex gap-5 ">
          <div className="flex items-center gap-4 font-olden">
            <span className="flex items-center gap-1">
              <AiFillPhone />
              <Link to={`tel:15000 96`}>15000 96</Link>
            </span>
            <span>
              <Link to={`mailto:jannatunn4500@gmail.com`}>
                waroengKenangan@gmail.com
              </Link>
            </span>
          </div>

          <div className="flex items-center gap-1 font-olden">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillYoutube />
            <AiFillTwitterCircle />
          </div>
        </div>
        <div className="flex justify-between items-center font-medium gap-2">
          <div className="flex items-center font-medium gap-2">
            <span className="text-sm text-gray-800  ">tentang kami</span>
            <span className=" text-gray-800 ">|</span>
            <span className="text-sm text-gray-800  ">kebijakan privasi</span>
            <span className=" text-gray-800 ">|</span>
            <span className="text-sm text-gray-800  ">
              syarat dan ketentuan
            </span>
          </div>
          <span className="text-sm text-gray-800 text-end">
            ©13-mei-2023 @Jannatun™ . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
