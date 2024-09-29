import { FaUser, FaLock } from "react-icons/fa6";
import Button from '../components/Button';
import styled from "styled-components";
import InputField from "../components/InputField";
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate(); 

    // Handle login logic here
    const handleLogin = () => {
        // After successful login logic, navigate to dashboard
        navigate("/dashboard");
    }
    
    return (
        <Container>
            <Content>
                <h1>Login</h1>
                <Group>
                    <InputField icon={<FaUser fontSize="20px" />} type="email" placeholder="Enter Your Email" />
                    <InputField icon={<FaLock fontSize="20px" />} type="password" placeholder="Password" />
                    <ResetPass>
                        <a href="">Forgot password</a>
                        <a href="/register">Don't have an account?</a>
                    </ResetPass>
                </Group>
                <ButtonWrapper>
                    <Button purpose="Login" onClick={handleLogin} />
                </ButtonWrapper>    
            </Content>
        </Container>
    )
}

export default Login;


// Styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: url(images/background.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    align-items: center;
    justify-content: center;
    color: white;
    height: 100vh;

    h1 {
        color: white;
        margin-bottom: 10px;
    }
`;

const Group = styled.div`
    transform: translateX(-15px);
`;

const ButtonWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 100%; 
`;

const Content = styled.div`
    h1 {
        transform: translateX(10px);
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    backdrop-filter: blur(8px);
    border-radius: 10px;
`;

const ResetPass = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 18px;
    width: 100%;

    a {
        text-decoration: none;
        color: #ffffff;
        font-weight: 300;
        font-size: 13px;

        &:hover {
            color: #22a354;
        }
    }
`;
