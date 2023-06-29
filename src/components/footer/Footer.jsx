import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-500  mt-5 bottom-0">
      <div className="mx-auto w-full max-w-screen-xl px-20 py-6 lg:py-8">
        <div className="grid grid-cols-2">
          {/* logo */}
          <div className="">
            <Link to={`/`}>
              <h1 className="font-bold text-xl italic text-slate-900">
                PO<span className="text-white">S</span>.
              </h1>
            </Link>
            <p className="text-gray-800 font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              ducimus doloribus maxime quasi ut! Reprehenderit nulla odio optio
              minima vel? Lorem, ipsum dolor.
            </p>
          </div>
          {/* akhir logo */}

          {/* 3 link */}
          <div className="grid grid-cols-3">
            <div>
              <h2 className="mb-3 text-sm font-bold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-800 font-medium">
                <li className="mb-1">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-bold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-800 font-medium">
                <li className="mb-1">
                  <a
                    href="https://github.com/jannatunn"
                    className="hover:underline ">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-bold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-800 font-medium">
                <li className="mb-1">
                  <a href="#q" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#q" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* akhir 3 logo */}
        </div>
        <div className="flex justify-center items-center mt-5 font-medium">
          <span className="text-sm text-gray-800 sm:text-center">
            ©13-mei-2023 @Jannatun™ . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
