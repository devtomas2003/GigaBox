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
    MainContent,
    LangBoxSlct,
    LangSlct,
    LangSlcTxt,
    LangFlag
} from "./style";

import Logo from "../../resources/big.jpg";
import Portugal from "../../resources/pt.png";
import USA from "../../resources/usa.png";

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { TbWorld } from "react-icons/tb";
import { MdExitToApp, MdArrowDropDown, MdOutlineWifiTethering, MdOutlineSimCard, MdArrowDropUp } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { AiOutlineWifi, AiFillHome } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import IPDHCP from "../../Views/IPDHCP";
import APN from "../../Views/APN";
import { PropsLang, Dashboard as Langs } from "../../Utils/Langs";

export default function Dashboard(){
    let { context } = useParams();

    const [actualMenu, setActualMenu] = useState<number>(context === "apn" ? 2 : context === "ip" ? 3 : 0);
    const [actualNav, setActualNav] = useState<number>(0);
    const [showLangSlct, setShowLangSlct] = useState<boolean>(false);
    const [actualLang, setActualLang] = useState<string>('pt');
    const [lang, setLangs] = useState<PropsLang>();

    useEffect(() => {
        function changeLang(){
            if(actualLang === "pt"){
                setLangs(Langs.pt);
            }else{
                setLangs(Langs.en);
            }
        }
        changeLang();
    }, [actualLang]);

    return (
        <Container>
            <HeaderBox>
                <LeftLogo>
                    <ImgLogo src={Logo} title="STAR Labs" alt="Star Labs" />
                </LeftLogo>
                <InfoZone>
                    <LangSelector onClick={() => { setShowLangSlct(!showLangSlct); }}>
                        <TxtActLang>{ actualLang === "pt" ? "Português" : "English" }</TxtActLang>
                        { showLangSlct ? <MdArrowDropUp size={40} color="#444" /> : <MdArrowDropDown size={40} color="#444" /> }
                    </LangSelector>
                    { showLangSlct ?
                    <LangBoxSlct onMouseLeave={() => setShowLangSlct(false)}>
                        <LangSlct onClick={() => { setShowLangSlct(false); setActualLang('en'); }}>
                            <LangFlag src={USA} title="English" alt="English"/>
                            <LangSlcTxt>English</LangSlcTxt>
                        </LangSlct>
                        <LangSlct onClick={() => { setShowLangSlct(false); setActualLang('pt'); }}>
                            <LangFlag src={Portugal} title="Português" alt="Português"/>
                            <LangSlcTxt>Português</LangSlcTxt>
                        </LangSlct>
                    </LangBoxSlct>
                    : null }
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
                        <TxtBtnMenuTop>{lang?.homeTitle}</TxtBtnMenuTop>
                    </BoxMenuTp>
                    <BoxMenuTp onClick={() => {setActualMenu(1); setActualNav(0)}} isActive={actualMenu === 1 ? true : false}>
                        <MdOutlineWifiTethering size={30} color="#fff" />
                        <TxtBtnMenuTop>{lang?.wifiTitle}</TxtBtnMenuTop>
                    </BoxMenuTp>
                    <BoxMenuTp onClick={() => {setActualMenu(2); setActualNav(0)}} isActive={actualMenu === 2 ? true : false}>
                        <MdOutlineSimCard size={30} color="#fff" />
                        <TxtBtnMenuTop>{lang?.WanTitle}</TxtBtnMenuTop>
                    </BoxMenuTp>
                    <BoxMenuTp onClick={() => {setActualMenu(3); setActualNav(0)}} isActive={actualMenu === 3 ? true : false}>
                        <BsGearFill size={30} color="#fff" />
                        <TxtBtnMenuTop>{lang?.AdvancedTitle}</TxtBtnMenuTop>
                    </BoxMenuTp>
                </LftOpts>
                <RighOpts>
                    <BoxMenuTp onClick={() => {setActualMenu(4); setActualNav(0)}} isActive={actualMenu === 4 ? true : false}>
                        <FaTools size={30} color="#fff" />
                        <TxtBtnMenuTop>{lang?.toolsTitle}</TxtBtnMenuTop>
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
                    <IPDHCP lang={actualLang} />
                    : actualMenu === 2 && actualNav === 0 ?
                    <APN lang={actualLang} />
                    : null }
                </MainContent>
            </ZoneBody>
        </Container>
    );
}