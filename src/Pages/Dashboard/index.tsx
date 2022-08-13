import {
    Container,
    HeaderBox,
    LeftLogo,
    ImgLogo,
    InfoZone,
    BtnBox,
    LangSelector,
    TxtActLang,
    BoxMenuTp,
    TopMenu,
    TxtBtnMenuTop,
    LftOpts,
    RighOpts
} from "./style";

import Logo from "../../resources/big.jpg";

import { TbWorld } from "react-icons/tb";
import { MdExitToApp, MdArrowDropDown, MdOutlineWifiTethering, MdOutlineSimCard } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { AiOutlineWifi, AiFillHome } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";

export default function Dashboard(){
    return (
        <Container>
            <HeaderBox>
                <LeftLogo>
                    <ImgLogo src={Logo} title="STAR Labs" alt="Star Labs" />
                </LeftLogo>
                <InfoZone>
                    <LangSelector>
                        <TxtActLang>English</TxtActLang>
                        <MdArrowDropDown size={40} color="#444" />
                    </LangSelector>
                    <BtnBox>
                        <AiOutlineWifi size={40} color="#28a745" />
                    </BtnBox>
                    <BtnBox>
                        <GiRotaryPhone size={40} color="#28a745" />
                    </BtnBox>
                    <BtnBox>
                        <TbWorld size={40} color="#28a745" />
                    </BtnBox>
                    <BtnBox>
                        <MdExitToApp size={40} color="#444" />
                    </BtnBox>
                </InfoZone>
            </HeaderBox>
            <TopMenu>
                <LftOpts>
                    <BoxMenuTp>
                        <AiFillHome size={30} color="#fff" />
                        <TxtBtnMenuTop>Home</TxtBtnMenuTop>
                    </BoxMenuTp>
                    <BoxMenuTp>
                        <MdOutlineWifiTethering size={30} color="#fff" />
                        <TxtBtnMenuTop>WiFi</TxtBtnMenuTop>
                    </BoxMenuTp>
                    <BoxMenuTp>
                        <MdOutlineSimCard size={30} color="#fff" />
                        <TxtBtnMenuTop>WAN</TxtBtnMenuTop>
                    </BoxMenuTp>
                    <BoxMenuTp>
                        <BsGearFill size={30} color="#fff" />
                        <TxtBtnMenuTop>Avançado</TxtBtnMenuTop>
                    </BoxMenuTp>
                </LftOpts>
                <RighOpts>
                    <BoxMenuTp>
                        <FaTools size={30} color="#fff" />
                        <TxtBtnMenuTop>Avançado</TxtBtnMenuTop>
                    </BoxMenuTp>     
                </RighOpts>
            </TopMenu>
        </Container>
    );
}