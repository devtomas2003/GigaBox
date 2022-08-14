import { useEffect, useRef, useState } from "react";
import { PropsLang, Roaming as Langs } from "../../Utils/Langs";
import {
    BoxBtns,
    BoxForm,
    BtnAct,
    BtnTxt,
    Container,
    InpDynCk,
    InputLine,
    Separator,
    TextLbl,
    TitleZone,
    ZoneView
} from "./style";

import { FaRegSave } from "react-icons/fa";

type PropsRoaming = {
    lang: string;
};

export default function Roaming(props: PropsRoaming){
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
        function initializeRoaming(){
            window.history.replaceState(null, "GigaBox", "/roaming")    
        }
        if(!haveInitialize.current){
            initializeRoaming();
            haveInitialize.current = true;
        }
    });
    return (
        <Container>
            <ZoneView>
                <TitleZone>{lang?.configRoaming}</TitleZone>
                <Separator />
                <BoxForm>
                    <InputLine>
                        <TextLbl>{lang?.allowData} </TextLbl>
                        <InpDynCk type="checkbox" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.allowVoice} </TextLbl>
                        <InpDynCk type="checkbox" />
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