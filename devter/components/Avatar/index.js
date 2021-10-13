import Image from "next/image";

import style from "./styles";

const Avatar = ({ alt, src, text, withText }) => (
  <div>
    <Image width="400" height="400" src={src} alt={alt} />
    {withText && <strong>{text || alt}</strong>}
    <style jsx>{style}</style>
  </div>
);

export default Avatar;
