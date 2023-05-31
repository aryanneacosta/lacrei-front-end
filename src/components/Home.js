import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image1 from "../assets/image1.svg";

export default function Home() {
    return (
        <>
            <Header />
            <Content>
                <TextContent>
                    <Title>Boas vindas a Lacrei Saúde</Title>
                    <Text>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Text>
                    <Buttons>
                        <Link to={"/pessoa-usuaria"}>
                            <ButtonUser>Pessoa Usuária</ButtonUser>
                        </Link>

                        <Link to={"/profissional"}>
                            <ButtonPro>Profissional</ButtonPro>
                        </Link>

                    </Buttons>
                </TextContent>
                <Img>
                    <img src={image1} alt="image1" />
                </Img>
            </Content>
            <Footer />
        </>
    );
}

const Content = styled.div`
    width: 100%;
    margin: 64px 64px 0 64px;
    display: flex;
    justify-content: space-between;
    font-family: 'Nunito', sans-serif;
    padding-right: 128px;
`;

const TextContent = styled.div`
    width: 453px;
`;

const Title = styled.div`
    font-size: 48px;
    font-weight: 700;
    color: var(--dark-grey);
    line-height: 65px;
`;

const Text = styled.div`
    margin-top: 32px;
    font-size: 24px;
    color: var(--grey-text);
    line-height: 33px;
`;

const Buttons = styled.div`
    margin-top: 48px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 113px;
`;

const ButtonUser = styled.div`
    height: 48px;
    width: 192px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--green);
    color: var(--white);
    font-size: 18px;
    font-weight: 700;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    :hover {
        opacity: 60%;
    }
`;

const ButtonPro = styled.div`
    height: 48px;
    width: 192px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    color: var(--green);
    font-size: 18px;
    font-weight: 700;
    border: 2px solid var(--green);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    :hover {
        opacity: 60%;
    }
`;

const Img = styled.div`
    margin-bottom: 16px;

    img {
        width: 555px;

    }
    
`;