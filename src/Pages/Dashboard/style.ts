import styled from "styled-components";

export const Container = styled.div`

`;

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const LeftLogo = styled.div``;

export const ImgLogo = styled.img`
    width: 120px;
`;

export const InfoZone = styled.div`
    display: flex;
    flex-direction: row;
`;

export const BtnBox = styled.div`
    &:not(:first-child){
        margin-left: 20px;
    }
    &:hover{
        cursor: pointer;
    }
`;

export const LangSelector = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TxtActLang = styled.p`
    font-size: 17px;
`;

export const TopMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #007DFF;
`;

export const BoxMenuTp = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    &:hover{
        background: #007DF0;
        cursor: pointer;
    }
`;

export const TxtBtnMenuTop = styled.p`
    margin-left: 10px;
    color: #fff;
    font-size: 18px;
`;

export const LftOpts = styled.div`
    display: flex;
    flex-direction: row;
`;

export const RighOpts = styled.div`
    display: flex;
    flex-direction: row;
`;