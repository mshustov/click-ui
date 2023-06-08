import { SVGAttributes } from "react";

export const ProfileIcon = (props: SVGAttributes<SVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12 12.0625C9.9471 12.0625 8.267 10.3832 8.267 8.3295H6.767C6.767 11.2118 9.1189 13.5625 12 13.5625V12.0625ZM8.267 8.3295C8.267 6.26844 9.95445 4.5625 12 4.5625V3.0625C9.11155 3.0625 6.767 5.45456 6.767 8.3295H8.267ZM12 4.5625C14.0529 4.5625 15.733 6.24182 15.733 8.2955H17.233C17.233 5.41318 14.8811 3.0625 12 3.0625V4.5625ZM15.733 8.2955C15.733 10.3566 14.0456 12.0625 12 12.0625V13.5625C14.8884 13.5625 17.233 11.1704 17.233 8.2955H15.733ZM19 21.0625H5V22.5625H19V21.0625ZM5 21.0625C4.86421 21.0625 4.75 20.9483 4.75 20.8125H3.25C3.25 21.7767 4.03579 22.5625 5 22.5625V21.0625ZM4.75 20.8125V19.8125H3.25V20.8125H4.75ZM4.75 19.8125C4.75 18.0267 6.21421 16.5625 8 16.5625V15.0625C5.38579 15.0625 3.25 17.1983 3.25 19.8125H4.75ZM8 16.5625H16V15.0625H8V16.5625ZM16 16.5625C17.7858 16.5625 19.25 18.0267 19.25 19.8125H20.75C20.75 17.1983 18.6142 15.0625 16 15.0625V16.5625ZM19.25 19.8125V20.8125H20.75V19.8125H19.25ZM19.25 20.8125C19.25 20.9483 19.1358 21.0625 19 21.0625V22.5625C19.9642 22.5625 20.75 21.7767 20.75 20.8125H19.25Z'
      fill='#161517'
    />
  </svg>
);