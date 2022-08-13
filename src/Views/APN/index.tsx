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
    OptionInp
} from "./style";

import { FaRegSave } from "react-icons/fa";

export default function APN(){
    return (
        <Container>
            <ZoneView>
                <TitleZone>Definições de APN</TitleZone>
                <Separator />
                <BoxForm>
                    <InputLine>
                        <TextLbl>APN:</TextLbl>
                        <InpDyn type="text" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>Utilizador:</TextLbl>
                        <InpDyn type="text" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>Password:</TextLbl>
                        <InpDyn type="password" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>Tipo de APN:</TextLbl>
                        <SlctInpt>
                            <OptionInp>Apenas Dados</OptionInp>
                            <OptionInp>Apenas Voz</OptionInp>
                            <OptionInp>Dados + Voz</OptionInp>
                        </SlctInpt>
                    </InputLine>
                    <InputLine>
                        <TextLbl>Estado:</TextLbl>
                        <TextLbl txtColor="#249e40">Conectado</TextLbl>
                    </InputLine>
                </BoxForm>
            </ZoneView>
            <BoxBtns>
                <BtnAct>
                    <FaRegSave size={20} color="#fff" />
                    <BtnTxt>Guardar</BtnTxt>
                </BtnAct>
            </BoxBtns>
        </Container>
    );
}