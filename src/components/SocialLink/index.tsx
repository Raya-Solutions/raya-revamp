import { SvgIcon } from "../../common/SvgIcon";
import { Space } from "antd";

interface SocialLinkProps {
  href: string;
  src: string;
  text: string;
}

const SocialLink = ({ href, src, text }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <Space>
        <SvgIcon src={src} width="25px" height="25px" />
        { text }
        </Space>
      </a>
    );
  };
  
  export default SocialLink;