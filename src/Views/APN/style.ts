import styled from "styled-components";

type propsTexts = {
    txtColor?: string;
}

type propsBtns = {
    isMain: boolean;
};

export const Container = styled.div``;

export const ZoneView = styled.div``;

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
    width: 35vw;
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
    white-space: nowrap;
    color: ${(props: propsTexts) => props.txtColor === undefined ? "#444" : props.txtColor};
    &:not(:first-child){
        margin-left: 3px;
    }
`;

export const InpDyn = styled.input`
    margin-left: 5px;
    background: #F3F3F3;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 4px;
    width: 100%;
`;

export const SlctInpt = styled.select`
    margin-left: 5px;
    background: #F3F3F3;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 4px;
    width: 100%;
`;

export const OptionInp = styled.option``;

export const BoxBtns = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: flex-end;
`;

export const BtnAct = styled.div`
    display: flex;
    flex-direction: row;
    background: ${(props: propsBtns) => props.isMain ? '#28a745' : '#eee'};
    color: ${(props: propsBtns) => props.isMain ? '#fff' : '#444'};
    align-items: center;
    border-radius: 5px;
    user-select: none;
    padding: 10px;
    &:hover{
        background: ${(props: propsBtns) => props.isMain ? '#249e40' : '#e5e5e5'};
        cursor: pointer;
    }
    &:not(:last-child){
        margin-right: 10px;
    }
`;

export const BtnTxt = styled.p`
    margin-left: 8px;
    font-size: 17px;
`;

export const TableAPNs = styled.table`
    width: 100%;
    margin-top: 10px;
`;

export const TRAPN = styled.tr`
    &:first-child{
        background: #f0f0f0;
    }
    background: #fafafa;
`;

export const TDAPN = styled.td`
    padding: 5px;
    &:nth-child(1){
        width: 15%;
    }
    &:nth-child(2){
        width: 40%;
    }
`;

export const BtnsBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export const BtnActAPN = styled.div`
    &:hover{
        cursor: pointer;
    }
    &:not(:first-child){
        margin-left: 5px;
    }
`;