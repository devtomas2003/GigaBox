import styled from "styled-components";

type propsTexts = {
    txtColor?: string;
}

export const Container = styled.div``;

export const ZoneView = styled.div`
    &:not(:first-child){
        margin-top: 25px;
    }
`;

export const TitleZone = styled.h1`
    color: #007DFF;
    font-family: sans-serif;
    font-weight: 100;
`;

export const Separator = styled.div`
    margin-top: 8px;
    height: 2px;
    background: #D9D9D9;
`;

export const BoxForm = styled.div`
    margin-top: 15px;
    width: 33vw;
`;

export const InputLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    &:not(:first-child){
        margin-top: 10px;
    }
`;

export const TextLbl = styled.label`
    font-size: 17px;
    color: ${(props: propsTexts) => props.txtColor === undefined ? "#444" : props.txtColor};
    white-space: nowrap;
    &:not(:first-child){
        margin-left: 3px;
    }
`;

export const TableVoz = styled.table`
    width: 100%;
    margin-top: 10px;
`;

export const TRVOZ = styled.tr`
    &:first-child{
        background: #f0f0f0;
    }
    background: #fafafa;
`;

export const TDVOZ = styled.td`
    padding: 5px;
    &:nth-child(1){
        width: 25%;
    }
    &:nth-child(2){
        width: 15%;
    }
    &:nth-child(3){
        width: 45%;
    }
`;

export const BoxCallState = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StateTxt = styled.p`
    color: #444;
    margin-left: 5px;
`;