import styled from "styled-components";

type prospInput = {
    inpsize?: number;
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
    white-space: nowrap;
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
    width: ${(props: prospInput) => props.inpsize === undefined ? '100%' : props.inpsize + "px"};
    &::-webkit-input-placeholder {
        text-align: right;
        margin-right: 2px;
    }
`;

export const InpDynCk = styled.input`
    margin-left: 5px;
    padding: 4px;
    width: 20px;
    height: 20px;
`;

export const BoxBtns = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: flex-end;
`;

export const BtnAct = styled.div`
    display: flex;
    flex-direction: row;
    background: #28a745;
    align-items: center;
    border-radius: 5px;
    user-select: none;
    padding: 10px;
    &:hover{
        background: #249e40;
        cursor: pointer;
    }
`;

export const BtnTxt = styled.p`
    color: #fff;
    margin-left: 5px;
    font-size: 17px;
`;