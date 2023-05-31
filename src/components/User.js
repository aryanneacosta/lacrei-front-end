import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import image2 from "../assets/image2.svg";

export default function User() {
    return (
        <>
            <Header />
            <Content>
                <TextContent>
                    <Title>Pessoa Usuária</Title>
                    <Text>A Lacrei garante que pessoas LGBTQIAPN+ recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</Text>
                </TextContent>
                <Img>
                    <img src={image2} alt="image2" />
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
    width: 550px;
`;

const Title = styled.div`
    font-size: 48px;
    font-weight: 700;
    color: var(--dark-grey);
    line-height: 65px;
`;

const Text = styled.div`
    width: 545px;
    margin-top: 32px;
    font-size: 24px;
    font-weight: 400;
    color: var(--grey-text);
    line-height: 33px;
    padding-left: 21px;
    border-left: 5px solid var(--green);
`;

const Img = styled.div`
    margin-bottom: 16px;

    img {
        width: 540px;
    }
`;