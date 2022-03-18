import styled from "styled-components";

import { useSelector } from "react-redux";
import Profile from "./Profile";

const Navigation = () => {
  const user = useSelector((state) => state.userReducer);
  console.log(user);

  const loggedInComponent = user ? (
    <>
      <Profile />
    </>
  ) : (
    <>
      <NavItem>로그인</NavItem>
      <NavItem>회원 가입</NavItem>
    </>
  );
  return (
    <Container>
      <ColumnWrapper>
        <NavColumn>
          <NavItem>My-Todo</NavItem>
        </NavColumn>
        <NavColumn>
          <NavItem>About Us</NavItem>
          <NavItem>Dashboard</NavItem>
          <NavItem>Dashboard</NavItem>
        </NavColumn>
        <NavColumn>{loggedInComponent}</NavColumn>
      </ColumnWrapper>
    </Container>
  );
};

export default Navigation;

export const Container = styled.div`
  position: fixed;
  background: white;
  height: 80px;
  width: 100%;
`;

export const ColumnWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.div`
  font-size: 1.3rem;
  margin: 0 20px;
  padding: 5px;

  cursor: pointer;
`;
