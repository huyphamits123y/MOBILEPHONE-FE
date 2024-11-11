import React from "react";
import styled from "styled-components"
export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  background-color:#EEEEEE
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const JobList = styled.div`
  
  flex-wrap: wrap;
  
  gap: 15px;
`;

export const JobCard = styled.div`
  
  background-color: #f9f9f9;
  border:1px solid black;
  margin:10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  cursor:pointer;

  height:230px;
   &:hover
  {
  border: 1px solid #1E90FF;
  }

`;

export const JobTitle = styled.h2`
  font-size: 18px;
  color: #d32f2f;
  margin-bottom: 10px;
`;

export const Company = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #666;
`;

export const Salary = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ApplyButton = styled.button`
  background-color: #FFFFCC;
  color: #FFCC00;
  padding: 10px;
  border: none;

  cursor: pointer;

  justify-content: flex-end;
  margin-top: auto;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  font-size: 16px;
`;