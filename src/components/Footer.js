import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FacebookLogo from "../assets/facebookLogo.svg";
import InstagramLogo from "../assets/instagramLogo.svg";
import LinkedinLogo from "../assets/linkedinLogo.svg";

export default function Footer() {
    const [page, setPage] = useState(window.location.pathname);

    useEffect(() => {
        setPage(page);
    }, []);

    return (
        <>
            <Content>

                <Border></Border>

                <Pages>

                    <Link to={"/"}>
                        {page === "/"
                            ?
                            <Page istrue={true}>
                                <h3>Home</h3>
                            </Page>
                            :
                            <Page istrue={false}>
                                <h3>Home</h3>
                            </Page>
                        }
                    </Link>

                    <Link to={"/pessoa-usuaria"}>
                        {page === "/pessoa-usuaria"
                            ?
                            <Page istrue={true}>
                                <h3>Pessoa Usuária</h3>
                            </Page>
                            :
                            <Page istrue={false}>
                                <h3>Pessoa Usuária</h3>
                            </Page>
                        }
                    </Link>

                    <Link to={"/profissional"}>
                        {page === "/profissional"
                            ?
                            <Page istrue={true}>
                                <h3>Profissional</h3>
                            </Page>
                            :
                            <Page istrue={false}>
                                <h3>Profissional</h3>
                            </Page>
                        }
                    </Link>
                </Pages>

                <Links>
                    
                    <a href="https://www.facebook.com/lacrei.saude" target="_blank">
                        <img src={FacebookLogo} alt="FacebookLogo" />
                    </a>

                    <a href="https://www.instagram.com/lacrei.saude/" target="_blank">
                        <img src={InstagramLogo} alt="InstagramLogo" />
                    </a>
                    
                    <a href="https://www.linkedin.com/company/lacrei/" target="_blank">
                        <img src={LinkedinLogo} alt="LinkedinLogo" />
                    </a>
                    
                </Links>

                <Text>Desafio Front-end Lacrei</Text>

            </Content>
        </>
    );
}

const Content = styled.div`
    font-family: 'Nunito', sans-serif;
    height: 158px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 64px;

    @media (max-width: 1040px) {
        margin-left: 32px;
    }

    @media (max-width: 520px) {
        height: 159px;
        margin-left: 16px;
    }
`;

const Border = styled.div`
    margin-right: 128px;
    border-top: 1px solid;
    border-color: var(--light-green);

    @media (max-width: 1040px) {
        margin-right: 64px;
    }

    @media (max-width: 520px) {
        margin-right: 32px;
    }
`;

const Pages = styled.div`
    display: flex;
    margin-top: 32px;

    @media (max-width: 520px) {
        height: 65px;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 16px;
    }
`;

const Page = styled.div`
    color: var(--dark-grey);
    font-size: 16px;
    margin-right: 40px;

    h3 {
        font-weight: ${props => props.istrue ? '700' : '400'};
    }

    @media (max-width: 520px) {
        font-size: 14px;
    }
`;

const Links = styled.div`
    margin-top: 28px;

    img {
        color: var(--green);
        height: 32px;
        width: 32px;
        margin-right: 40px;
    }

    @media (max-width: 520px) {
        margin-top: 12px;

        img {
            margin-right: 30px;
        }
    }
`;

const Text = styled.div`
    margin-top: 28px;
    color: var(--grey-text);
    font-size: 12px;
    font-weight: 400;

    @media (max-width: 520px) {
        margin-top: 12px;
    }
`;