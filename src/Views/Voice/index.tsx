import { useEffect, useRef, useState } from "react";
import { PropsLang, Voice as Langs } from "../../Utils/Langs";
import {
    BoxCallState,
    BoxForm,
    Container,
    InputLine,
    Separator, 
    StateTxt, 
    TableVoz, 
    TDVOZ, 
    TextLbl,
    TitleZone,
    TRVOZ,
    ZoneView
} from "./style";

import { MdCallMade } from "react-icons/md";

type PropsVoice = {
    lang: string;
};

export default function Voice(props: PropsVoice){
    
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
        function initializeVoice(){
            window.history.replaceState(null, "GigaBox", "/voice")    
        }
        if(!haveInitialize.current){
            initializeVoice();
            haveInitialize.current = true;
        }
    });
    return (
        <Container>
            <ZoneView>
                <TitleZone>{lang?.configVoice}</TitleZone>
                <Separator />
                <BoxForm>
                    <InputLine>
                        <TextLbl>{lang?.extTitle} +351 232864149</TextLbl>
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.extStatus}</TextLbl>
                        <TextLbl txtColor="#28a745">{lang?.ok}</TextLbl>
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.extState}</TextLbl>
                        <TextLbl txtColor="#28a745">{lang?.stateAct}</TextLbl>
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.userTxt} </TextLbl>
                        <TextLbl>starvoice</TextLbl>
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.passTxt} </TextLbl>
                        <TextLbl>B8EA9C9DF026</TextLbl>
                    </InputLine>
                </BoxForm>
                <TableVoz cellPadding={0} cellSpacing={0}>
                    <TRVOZ>
                        <TDVOZ>Data / Hora:</TDVOZ>
                        <TDVOZ>Número:</TDVOZ>
                        <TDVOZ>Tipo/Estado:</TDVOZ>
                        <TDVOZ>Duração:</TDVOZ>
                    </TRVOZ>
                    <TRVOZ>
                        <TDVOZ>14/08/2022 23:54:28</TDVOZ>
                        <TDVOZ>232894726</TDVOZ>
                        <TDVOZ>
                            <BoxCallState>
                                <MdCallMade size={18} color="#28a745" />
                                <StateTxt>Chamada de saída com sucesso</StateTxt>
                            </BoxCallState>
                        </TDVOZ>
                        <TDVOZ>23 segundos</TDVOZ>
                    </TRVOZ>
                </TableVoz>
            </ZoneView>
        </Container>
    );
}