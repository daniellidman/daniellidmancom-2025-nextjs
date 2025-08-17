'use client';

import { useState } from 'react';
import Image from 'next/image';

function HoverAvatar() {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  return (
    <div className="w-full my-8">
      <div
        className="rounded-full w-36 mx-auto"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {isHovering ? (
          <Image
            src="/DanielBioBlur_NoBlur_web.jpg"
            width={144}
            height={144}
            alt="Profile image of Daniel"
            className="rounded-full"
          />
        ) : (
          <Image
            src="/DanielBioBlur.jpg"
            width={144}
            height={144}
            alt="Profile image of Daniel"
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
}

export default HoverAvatar;
