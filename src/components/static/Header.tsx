
import styled from "styled-components";
import {Link} from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {


  return (
        <Container bg='#221E63' cl='white' br="#221E63">
        <Wrapper>
            <Logo>
                <h1>Resolution</h1>
            </Logo>
            <Navigation>
            <Nav to="/">Data_Fecting</Nav>
                <Nav to="state managemant">State management</Nav>
                <Nav to="todo">Todo</Nav>
                <Button>
                    <IoIosArrowForward />
                    <h5>Get A Quote</h5>
                </Button>
            </Navigation>
        </Wrapper>
        </Container>
);
};

export default Header;

const Container = styled.div<{ bg: string; cl: string; br: string }>`
    height: 70px;
    width: 100%;
    background-color: ${(props) => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.br};
    color: ${(props) => props.cl};
    position: sticky;
	top: 0;
	z-index: 19189;
	transition: all 350ms;
`;
const Wrapper = styled.div`
    height: 50px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    h1{
        font-size: xx-large;
        font-weight: bolder;
    }
`;
const Navigation = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;
const Nav = styled(Link)`
    font-weight: bolder;
`;
const Button = styled.div`
    height: 50px;
    width: 150px;
    background-color:  #e6257d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 20px 0px 20px;
    cursor: pointer;
    transition: all 350ms;
	color: white;
    :hover{
        transform: scale(0.9);
        background-color: #fc8a4c;
    };
`;