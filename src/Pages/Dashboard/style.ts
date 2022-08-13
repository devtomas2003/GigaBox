import styled from "styled-components";

type propsSideMenu = {
    isActive: boolean;
}

type propsTopMenu = {
    isActive: boolean;
};

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
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
    padding: 13px;
    background: ${(props: propsTopMenu) => props.isActive ? '#007DF0' : '#007DFF'};
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

export const ZoneBody = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`;

export const LftMenu = styled.div`
    display: flex;
    flex-direction: column;
    background: #fcfcfc;
    width: 15vw;
    height: 100%;
    padding: 5px;
`;

export const MenuOption = styled.div`
    padding: 12px;
    color: ${(props: propsSideMenu) => props.isActive ? '#007DFF' : '#aaa'};
    user-select: none;
    width: fit-content;
    &:hover{
        cursor: pointer;
        color: ${(props: propsSideMenu) => props.isActive ? '#007DFF' : '#888'};
    }
`;

export const TxtMenu = styled.p`
    font-size: 18px;
`;

export const MainContent = styled.div`
    padding: 15px;
    width: 85vw;
`;