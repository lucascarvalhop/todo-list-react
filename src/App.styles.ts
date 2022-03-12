import styled from 'styled-components';

export const Container = styled.div`
  background-color: #17181F;
  color: #797a81;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #FFF;
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;
`;

export const ButtonClear = styled.button`
  display: flex;
  margin: 40px auto;
  padding: 10px;
  font-size: 17px;
  border-radius: 5px;
  border: none;
  &:hover{
    cursor: pointer;
    background-color: #C0C0C0;
  }
`;