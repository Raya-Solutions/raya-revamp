import { Col, Row, Space } from "antd";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import Block  from "../Block";
import SocialLink from "../SocialLink";

interface Props {
    fb: string;
    x: string; // x (twitter)
    email: string;
    phone: string;
}

// TODO: update social logos to correct ones.
const BusinessInfo = ({ fb, x, email, phone}: Props) => {
    return (
        <>
            <Space size="large" />
            <Block
                title="Contact Raya"
                content="Contact lorem ipsum"
            />
            <Space>
                <SocialLink
                    href="fb.com"
                    src="linkedin.svg"
                    text="/raya"
                />
                <SocialLink
                    href="x.com"
                    src="linkedin.svg"
                    text="/raya"
                />
                <SocialLink
                    href="emailto:email"
                    src="linkedin.svg"
                    text="rayasolutionsph@raya.com"
                />
                <SocialLink
                    href="phoneto:email"
                    src="linkedin.svg"
                    text="(+63) 9XX-XXXX-XXX"
                />
            </Space>
        </>
        )
};

export default BusinessInfo;