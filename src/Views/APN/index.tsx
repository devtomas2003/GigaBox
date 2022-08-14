import {
    Container,
    ZoneView,
    TitleZone,
    Separator,
    BoxForm,
    InputLine,
    InpDyn,
    TextLbl,
    BoxBtns,
    BtnAct,
    BtnTxt,
    SlctInpt,
    OptionInp,
    TableAPNs,
    TRAPN,
    TDAPN,
    BtnsBox,
    BtnActAPN
} from "./style";

import { FaRegSave } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { PropsLang, APN as Langs } from "../../Utils/Langs";

type PropsAPN = {
    lang: string;
};

export default function APN(props: PropsAPN){
    
    const [lang, setLangs] = useState<PropsLang>();
    const [activeAPNAction, setActiveAPNAction] = useState<number>(0);

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
        function initializeAPN(){
            window.history.replaceState(null, "GigaBox", "/apn")    
        }
        if(!haveInitialize.current){
            initializeAPN();
            haveInitialize.current = true;
        }
    });

    function resetAPNs(){
        const reset = confirm("Têm a certeza que deseja repor os APNs?");
    }

    return (
        <Container>
            { activeAPNAction === 0 ?
            <>
                <ZoneView>
                    <TitleZone>{lang?.configAPN}</TitleZone>
                    <Separator />
                    <TableAPNs cellPadding={0} cellSpacing={0}>
                        <TRAPN>
                            <TDAPN>{lang?.smallAPN}</TDAPN>
                            <TDAPN>{lang?.apnTit}</TDAPN>
                            <TDAPN>{lang?.typeAPN}</TDAPN>
                            <TDAPN>{lang?.mccTit}</TDAPN>
                            <TDAPN>{lang?.mncTit}</TDAPN>
                            <TDAPN>{lang?.accTit}</TDAPN>
                        </TRAPN>
                        <TRAPN>
                            <TDAPN>Star Net</TDAPN>
                            <TDAPN>starlabs.imm.pt</TDAPN>
                            <TDAPN>{lang?.dataTxt}</TDAPN>
                            <TDAPN>268</TDAPN>
                            <TDAPN>50</TDAPN>
                            <TDAPN>
                                <BtnsBox>
                                    <BtnActAPN>
                                        <BsFillPencilFill size={18} color="#444" title={lang?.sugEdit} />
                                    </BtnActAPN>
                                    <BtnActAPN>
                                        <BsFillTrashFill size={18} color="#444" title={lang?.sugRem} />
                                    </BtnActAPN>
                                </BtnsBox>
                            </TDAPN>
                        </TRAPN>
                        <TRAPN>
                            <TDAPN>Star Voz</TDAPN>
                            <TDAPN>voz.imm.pt</TDAPN>
                            <TDAPN>{lang?.voiceTxt}</TDAPN>
                            <TDAPN>268</TDAPN>
                            <TDAPN>50</TDAPN>
                            <TDAPN>
                                <BtnsBox>
                                    <BtnActAPN>
                                        <BsFillPencilFill size={18} color="#444" />
                                    </BtnActAPN>
                                    <BtnActAPN>
                                        <BsFillTrashFill size={18} color="#444" />
                                    </BtnActAPN>
                                </BtnsBox>
                            </TDAPN>
                        </TRAPN>
                    </TableAPNs>
                </ZoneView>
                <BoxBtns>
                    <BtnAct isMain={false} onClick={() => { resetAPNs(); }}>
                        <BiReset size={20} color="#444" />
                        <BtnTxt>{lang?.resetBtn}</BtnTxt>
                    </BtnAct>
                    <BtnAct isMain={true} onClick={() => { setActiveAPNAction(1); }}>
                        <IoMdAdd size={20} color="#fff" />
                        <BtnTxt>{lang?.addAPN}</BtnTxt>
                    </BtnAct>
                </BoxBtns>
            </>
            : activeAPNAction === 1 ?
            <>
            <ZoneView>
                <TitleZone>{lang?.addAPN}</TitleZone>
                <Separator />
                <BoxForm>
                    <InputLine>
                        <TextLbl>{lang?.apnTit}:</TextLbl>
                        <InpDyn type="text" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.userlbl}</TextLbl>
                        <InpDyn type="text" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.passlbl}</TextLbl>
                        <InpDyn type="password" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.typeAPN}:</TextLbl>
                        <SlctInpt>
                            <OptionInp>{lang?.dataTxt}</OptionInp>
                            <OptionInp>{lang?.voiceTxt}</OptionInp>
                            <OptionInp>{lang?.dataVozTxt}</OptionInp>
                        </SlctInpt>
                    </InputLine>
                    <InputLine>
                        <TextLbl>{lang?.serviceState}</TextLbl>
                        <TextLbl txtColor="#249e40">Conectado</TextLbl>
                    </InputLine>
                </BoxForm>
            </ZoneView>
            <BoxBtns>
                <BtnAct isMain={true}>
                    <FaRegSave size={20} color="#fff" />
                    <BtnTxt>{lang?.saveBtn}</BtnTxt>
                </BtnAct>
            </BoxBtns>
            </>
            : null }
        </Container>
    );
}