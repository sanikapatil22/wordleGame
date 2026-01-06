import React from 'react';

function Banner({status, children}) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;
//status- happy or sad- affects the color of the banner
//children- content inside the banner