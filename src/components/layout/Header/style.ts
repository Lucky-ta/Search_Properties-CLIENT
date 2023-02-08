import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    background-color: #ffffff;
    justify-content: space-between;
    padding: 1rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;


    button {
        display: flex;
        gap: 1rem;
        border-radius: 4px;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        padding: 1.5rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

        &:hover {
            background-color: #eff1f4;
        }
    };
    .profile-button {
        padding: 0.1rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        border-radius: 20rem;
        min-width: 12rem;
    }


    div {
        display: flex;
        align-items: center;
        gap: 0.1rem;
        font-size: 1.3rem;
        font-weight: bold;

        span {
            border-left: 1px solid #C6C7C9;
            padding-left: 0.5rem;
            cursor: pointer;
        }
    }
`;
