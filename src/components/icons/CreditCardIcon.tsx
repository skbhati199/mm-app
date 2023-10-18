import React from "react";
import { SvgXml } from "react-native-svg";

export default function CreditCardIcon({ focused }) {
  return (
    <SvgXml
      xml={
        focused
          ? `<svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 14.4375C0 15.3867 0.738281 16.125 1.6875 16.125H18.5625C19.4766 16.125 20.25 15.3867 20.25 14.4375V8.25H0V14.4375ZM6.75 12.0469C6.75 11.8359 6.92578 11.625 7.17188 11.625H11.9531C12.1641 11.625 12.375 11.8359 12.375 12.0469V13.4531C12.375 13.6992 12.1641 13.875 11.9531 13.875H7.17188C6.92578 13.875 6.75 13.6992 6.75 13.4531V12.0469ZM2.25 12.0469C2.25 11.8359 2.42578 11.625 2.67188 11.625H5.20312C5.41406 11.625 5.625 11.8359 5.625 12.0469V13.4531C5.625 13.6992 5.41406 13.875 5.20312 13.875H2.67188C2.42578 13.875 2.25 13.6992 2.25 13.4531V12.0469ZM20.25 2.0625C20.25 1.14844 19.4766 0.375 18.5625 0.375H1.6875C0.738281 0.375 0 1.14844 0 2.0625V3.75H20.25V2.0625Z" fill="url(#paint0_linear_54_209)"/>
      <defs>
      <linearGradient id="paint0_linear_54_209" x1="0" y1="0.375" x2="22.1458" y2="2.09702" gradientUnits="userSpaceOnUse">
      <stop stop-color="#133FDB"/>
      <stop offset="1" stop-color="#B7004D" stop-opacity="0.3"/>
      </linearGradient>
      </defs>
      </svg>`
          : `<svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5625 0.375H1.6875C0.738281 0.375 0 1.14844 0 2.0625V14.4375C0 15.3867 0.738281 16.125 1.6875 16.125H18.5625C19.4766 16.125 20.25 15.3867 20.25 14.4375V2.0625C20.25 1.14844 19.4766 0.375 18.5625 0.375ZM1.6875 1.5H18.5625C18.8438 1.5 19.125 1.78125 19.125 2.0625V3.75H1.125V2.0625C1.125 1.78125 1.37109 1.5 1.6875 1.5ZM18.5625 15H1.6875C1.37109 15 1.125 14.7539 1.125 14.4375V7.125H19.125V14.4375C19.125 14.7539 18.8438 15 18.5625 15ZM6.75 12.0469C6.75 11.8359 6.53906 11.625 6.32812 11.625H3.79688C3.55078 11.625 3.375 11.8359 3.375 12.0469V12.3281C3.375 12.5742 3.55078 12.75 3.79688 12.75H6.32812C6.53906 12.75 6.75 12.5742 6.75 12.3281V12.0469ZM13.5 12.0469C13.5 11.8359 13.2891 11.625 13.0781 11.625H8.29688C8.05078 11.625 7.875 11.8359 7.875 12.0469V12.3281C7.875 12.5742 8.05078 12.75 8.29688 12.75H13.0781C13.2891 12.75 13.5 12.5742 13.5 12.3281V12.0469Z" fill="#818181"/>
      </svg>
      `
      }
      width={18}
      height={18}
    />
  );
}
