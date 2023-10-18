import React from "react";
import { SvgXml } from "react-native-svg";

export default function ImageBg() {
  return (
    <SvgXml
      xml={`<svg width="375" height="812" viewBox="0 0 375 812" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_0_388)">
        <rect width="375" height="812" rx="32" fill="#F5F5F5"/>
        <circle cx="28" cy="346" r="100" fill="#2FCBFC" fill-opacity="0.3"/>
        <circle cx="351" cy="26" r="100" fill="#F8E192"/>
        </g>
        <defs>
        <clipPath id="clip0_0_388">
        <rect width="375" height="812" rx="32" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `}
      className="bg-cover"
    />
  );
}
