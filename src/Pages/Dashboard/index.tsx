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
    RighOpts,
    ZoneBody,
    LftMenu,
    MenuOption,
    TxtMenu,
    MainContent
} from "./style";

import Logo from "../../resources/big.jpg";

import { TbWorld } from "react-icons/tb";
import { MdExitToApp, MdArrowDropDown, MdOutlineWifiTethering, MdOutlineSimCard } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { AiOutlineWifi, AiFillHome } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import IPDHCP from "../../Views/IPDHCP";
import { useState } from "react";
import APN from "../../Views/APN";

export default function Dashboard(){
    const [actualMenu, setActualMenu] = useState<number>(0);
    const [actualNav, setActualNav] = useState<number>(0);
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
                    <BoxMenuTp onClick={() => {setActualMenu(0); setActualNav(0)}} isActive={actualMenu === 0 ? true : false}>
                        <AiFillHome size={30} color="#fff" />
                        <TxtBtnMenuTop>Home</TxtBtnMenuTop>
                    </BoxMenuTp>
                    <BoxMenuTp onClick={() => {setActualMenu(1); setActualNav(0)}} isActive={actualMenu === 1 ? true : false}>
                        <MdOutlineWifiTethering size={30} color="#fff" />
                        <TxtBtnMenuTop>WiFi</TxtBtnMenuTop>
                    </BoxMenuTp>
                    <BoxMenuTp onClick={() => {setActualMenu(2); setActualNav(0)}} isActive={actualMenu === 2 ? true : false}>
                        <MdOutlineSimCard size={30} color="#fff" />
                        <TxtBtnMenuTop>WAN</TxtBtnMenuTop>
                    </BoxMenuTp>
                    <BoxMenuTp onClick={() => {setActualMenu(3); setActualNav(0)}} isActive={actualMenu === 3 ? true : false}>
                        <BsGearFill size={30} color="#fff" />
                        <TxtBtnMenuTop>Avançado</TxtBtnMenuTop>
                    </BoxMenuTp>
                </LftOpts>
                <RighOpts>
                    <BoxMenuTp onClick={() => {setActualMenu(4); setActualNav(0)}} isActive={actualMenu === 4 ? true : false}>
                        <FaTools size={30} color="#fff" />
                        <TxtBtnMenuTop>Avançado</TxtBtnMenuTop>
                    </BoxMenuTp>     
                </RighOpts>
            </TopMenu>
            <ZoneBody>
                { actualMenu === 2 ?
                <LftMenu>
                    <MenuOption isActive={actualNav === 0 ? true : false} onClick={() => { setActualNav(0); }}>
                        <TxtMenu>APN</TxtMenu>
                    </MenuOption>
                    <MenuOption isActive={actualNav === 1 ? true : false} onClick={() => { setActualNav(1); }}>
                        <TxtMenu>Roaming</TxtMenu>
                    </MenuOption>
                    <MenuOption isActive={actualNav === 2 ? true : false} onClick={() => { setActualNav(2); }}>
                        <TxtMenu>Voice</TxtMenu>
                    </MenuOption>
                </LftMenu>
                : actualMenu === 3 ?
                <LftMenu>
                    <MenuOption isActive={actualNav === 0 ? true : false} onClick={() => { setActualNav(0); }}>
                        <TxtMenu>DHCP/IP</TxtMenu>
                    </MenuOption>
                    <MenuOption isActive={actualNav === 1 ? true : false} onClick={() => { setActualNav(1); }}>
                        <TxtMenu>VPN</TxtMenu>
                    </MenuOption>
                    <MenuOption isActive={actualNav === 2 ? true : false} onClick={() => { setActualNav(2); }}>
                        <TxtMenu>Bridge</TxtMenu>
                    </MenuOption>
                    <MenuOption isActive={actualNav === 3 ? true : false} onClick={() => { setActualNav(3); }}>
                        <TxtMenu>Firmware</TxtMenu>
                    </MenuOption>
                    <MenuOption isActive={actualNav === 4 ? true : false} onClick={() => { setActualNav(4); }}>
                        <TxtMenu>Hardware</TxtMenu>
                    </MenuOption>
                </LftMenu>
                : null }
                <MainContent>
                    { actualMenu === 3 && actualNav === 0 ?
                    <IPDHCP />
                    : actualMenu === 2 && actualNav === 0 ?
                    <APN />
                    : null }
                </MainContent>
            </ZoneBody>
        </Container>
    );
}