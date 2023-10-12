import React from 'react';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/userRedux';
import { BsHouseDoor } from 'react-icons/bs';

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  margin-left: 10px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = () => {
    navigate('/signup');
  };

  const signin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const homePage = () => {
    navigate('/');
  };

  return (
    <Container>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Search style={{ color: 'gray', fontSize: 16 }} />
          <Input placeholder="Search" />
        </SearchContainer>
      </Left>
      <Center onClick={homePage}>
        <Logo>
          ROMAX <BsHouseDoor />
        </Logo>
      </Center>
      {user ? (
        <Right>
          <MenuItem onClick={() => navigate('/user/profile')}>{`Hi, ${user.username}`}</MenuItem>
          <MenuItem>Instant Evaluation</MenuItem>
          <MenuItem onClick={handleLogout}>LOG OUT</MenuItem>
        </Right>
      ) : (
        <Right>
          <MenuItem>Instant Evaluation</MenuItem>
          <MenuItem onClick={signup}>REGISTER</MenuItem>
          <MenuItem onClick={signin}>LOG IN</MenuItem>
        </Right>
      )}
    </Container>
  );
};

export default Navbar;
