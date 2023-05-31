import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const [page, setPage] = useState(window.location.pathname);

    useEffect(() => {
        setPage(page);
    }, []);

    return (
        <>
            <Content>

                <Link to={"/"}>
                    <Title>
                        Lacrei
                    </Title>
                </Link>

                <Pages>
                    <Link to={"/"}>
                        {page === "/"
                            ?
                            <Page istrue={true}>
                                <h2>Home</h2>
                            </Page>
                            :
                            <Page istrue={false}>
                                <h2>Home</h2>
                            </Page>
                        }
                    </Link>

                    <Link to={"/pessoa-usuaria"}>
                        {page === "/pessoa-usuaria"
                            ?
                            <Page istrue={true}>
                                <h2>Pessoa Usuária</h2>
                            </Page>
                            :
                            <Page istrue={false}>
                                <h2>Pessoa Usuária</h2>
                            </Page>
                        }
                    </Link>

                    <Link to={"/profissional"}>
                        {page === "/profissional"
                            ?
                            <Page istrue={true}>
                                <h2>Profissional</h2>
                            </Page>
                            :
                            <Page istrue={false}>
                                <h2>Profissional</h2>
                            </Page>
                        }
                    </Link>

                </Pages>

            </Content>
        </>
    );
}

const Content = styled.div`
    font-family: 'Nunito', sans-serif;
    width: 100%;
    height: 60px;
    background-color: var(--grey-header);
    padding-left: 64px;
    padding-right: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 1040px) {
        padding-left: 32px;
        padding-right: 32px; 
    }

    @media (max-width: 520px) {
        height: 78px;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
`;

const Title = styled.div`
    color: var(--green);
    font-size: 32px;
    font-weight: 700;
    cursor: pointer;

    :hover {
        opacity: 60%;
    }
`;

const Pages = styled.div`
    display: flex;
`;

const Page = styled.div`
    font-size: 16px;
    font-weight: 700;
    margin-left: 40px;
    cursor: pointer;

    h2 {
        color: ${props => props.istrue ? '#018762' : '#1F1F1F'};
    }

    :hover {
        opacity: 60%;
    }

    @media (max-width: 520px) {
        font-size: 14px;
        margin-left: 19px;
    }
`;