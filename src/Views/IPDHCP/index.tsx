import {
    Container,
    ZoneView,
    TitleZone,
    Separator,
    BoxForm,
    InputLine,
    TextLbl,
    InpDyn,
    InpDynCk,
    BoxBtns,
    BtnAct,
    BtnTxt
} from "./style";

import { FaRegSave } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { PropsLang, IP as Langs } from "../../Utils/Langs";

type PropsIPDHCP = {
    lang: string;
};

export default function IPDHCP(props: PropsIPDHCP){
    
    const [lang, setLangs] = useState<PropsLang>();

    useEffect(() => {
        function changeLang(){
            if(props.lang === "pt"){
                setLangs(Langs.pt);
            }else{
                setLangs(Langs.en);
            }
        }
        changeLang();
    }, [props.lang]);

    const haveInitialize = useRef<boolean>(false);
    useEffect(() => {
        function initializeIPDHCP(){
            window.history.replaceState(null, "GigaBox", "/ip")    
        }
        if(!haveInitialize.current){
            initializeIPDHCP();
            haveInitialize.current = true;
        }
    });

    return (
        <Container>
            <ZoneView>
                <TitleZone>{lang?.configIP}</TitleZone>
                <Separator />
                <BoxForm>
                    <InputLine>
                        <TextLbl>{lang?.routerIP}</TextLbl>
                        <InpDyn inpsize={150} type="text" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                </BoxForm>
            </ZoneView>
            <ZoneView>
                <TitleZone>{lang?.configDHCP}</TitleZone>
                <Separator />
                <BoxForm>
                    <InputLine>
                        <TextLbl>{lang?.dhcpEnable}</TextLbl>
                        <InpDynCk type="checkbox" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.ipRange} 192.168.</TextLbl>
                        <InpDyn inpsize={50} type="text" autoComplete="on" autoCapitalize="off" />
                        <TextLbl>.</TextLbl>
                        <InpDyn inpsize={50} type="text" autoComplete="on" autoCapitalize="off" />
                        <TextLbl>- 192.168.</TextLbl>
                        <InpDyn inpsize={50} type="text" autoComplete="on" autoCapitalize="off" />
                        <TextLbl>.</TextLbl>
                        <InpDyn inpsize={50} type="text" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.submask} 255.255.255.0</TextLbl>
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.mainDNS}</TextLbl>
                        <InpDyn type="text" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.bckDNS}</TextLbl>
                        <InpDyn type="text" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.leaseTxt}</TextLbl>
                        <InpDyn type="text" autoComplete="on" autoCapitalize="off" placeholder={lang?.mins} />
                    </InputLine>
                </BoxForm>
            </ZoneView>
            <BoxBtns>
                <BtnAct>
                    <FaRegSave size={20} color="#fff" />
                    <BtnTxt>{lang?.saveBtn}</BtnTxt>
                </BtnAct>
            </BoxBtns>
        </Container>
    );
}