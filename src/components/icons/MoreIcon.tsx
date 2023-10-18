import React from "react";
import { SvgXml } from "react-native-svg";

export default function MoreIcon({ focused }) {
  return (
    <SvgXml
      xml={`<svg width="15" height="4" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2C9 1.20312 8.29688 0.5 7.5 0.5C6.65625 0.5 6 1.20312 6 2C6 2.84375 6.65625 3.5 7.5 3.5C8.29688 3.5 9 2.84375 9 2ZM13.125 0.5C12.2812 0.5 11.625 1.20312 11.625 2C11.625 2.84375 12.2812 3.5 13.125 3.5C13.9219 3.5 14.625 2.84375 14.625 2C14.625 1.20312 13.9219 0.5 13.125 0.5ZM1.875 0.5C1.03125 0.5 0.375 1.20312 0.375 2C0.375 2.84375 1.03125 3.5 1.875 3.5C2.67188 3.5 3.375 2.84375 3.375 2C3.375 1.20312 2.67188 0.5 1.875 0.5Z" fill="#818181"/>
          </svg>
                   
      `}
      width={18}
      height={18}
    />
  );
}
