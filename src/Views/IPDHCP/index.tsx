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

export default function IPDHCP(){
    return (
        <Container>
            <ZoneView>
                <TitleZone>Configurar IP</TitleZone>
                <Separator />
                <BoxForm>
                    <InputLine>
                        <TextLbl>Router IP Address:</TextLbl>
                        <InpDyn inpsize={150} type="text" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                </BoxForm>
            </ZoneView>
            <ZoneView>
                <TitleZone>Configurar DHCP</TitleZone>
                <Separator />
                <BoxForm>
                    <InputLine>
                        <TextLbl>Enable Server:</TextLbl>
                        <InpDynCk type="checkbox" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>IP Range: 192.168.</TextLbl>
                        <InpDyn inpsize={50} type="text" autoComplete="on" autoCapitalize="off" />
                        <TextLbl>.</TextLbl>
                        <InpDyn inpsize={50} type="text" autoComplete="on" autoCapitalize="off" />
                        <TextLbl>- 192.168.</TextLbl>
                        <InpDyn inpsize={50} type="text" autoComplete="on" autoCapitalize="off" />
                        <TextLbl>.</TextLbl>
                        <InpDyn inpsize={50} type="text" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>Subnet Mask: 255.255.255.0</TextLbl>
                    </InputLine>
                    <InputLine>
                        <TextLbl>DNS Primário:</TextLbl>
                        <InpDyn type="text" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>DNS Secundário:</TextLbl>
                        <InpDyn type="text" autoComplete="on" autoCapitalize="off" />
                    </InputLine>
                    <InputLine>
                        <TextLbl>Lease Time:</TextLbl>
                        <InpDyn type="text" autoComplete="on" autoCapitalize="off" placeholder="Minutes" />
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