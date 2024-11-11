import React from 'react';
import styled from 'styled-components';


export const Container = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  width: 100%;
`;

export const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: left;
  span {
    color: #27ae60;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const Thead = styled.thead`
  background-color: #2c3e50;
  color: white;
`;

export const Th = styled.th`
  padding: 12px 20px;
  text-align: left;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Tbody = styled.tbody`
  background-color: #fff;
`;

export const Td = styled.td`
  padding: 12px 20px;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
  font-size: 14px;
  color: #2c3e50;
`;

export const JobTitle = styled.div`
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 4px;
`;

export const Company = styled.div`
  color: #7f8c8d;
  font-size: 12px;
  margin-bottom: 8px;
`;

export const Status = styled.div`
  color: #2980b9;
  font-size: 12px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${(props) => (props.cancel ? '#e74c3c' : '#ecf0f1')};
  color: ${(props) => (props.cancel ? 'white' : '#2c3e50')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => (props.cancel ? '#c0392b' : '#3498db')};
    color: white;
  }
`;

export const JobRow = styled.tr`
  &:hover {
    background-color: #f1f1f1;
  }
`;
export const SupportContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
`;

export const TitleOptions = styled.h2`
  color: #2c3e50;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #7f8c8d;
  margin-bottom: 20px;
`;

export const SupportOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const SupportButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-radius: 50px;
  background-color: #fff;
  color: #2c3e50;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #ddd;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #27ae60; /* Màu xanh lá */
    color: #fff; /* Chữ trắng */
  }

  img {
    margin-right: 10px;
  }
`;
