import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin:10px auto;
  width: 90%;
  background-color: #f5f5f5;
`;

export const JobList = styled.div`
  width: 40%;
  background-color: #fff;
  padding: 20px;
  overflow-y: auto;
  border-right: 1px solid #ddd;
`;

export const JobItem = styled.div`
  background-color: ${({ selected }) => (selected ? '#ffe6cc' : '#fff')};
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  width:500px;
  
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const JobHeader = styled.div`
  margin-left: 10px;
`;

export const Title = styled.h3`
  font-size: 15px;
  margin: 0;
  color: #333;
`;

export const Company = styled.div`
  font-size: 15px;
  color: #777;
  margin-top: 5px;
`;

export const Location = styled.div`
  font-size: 15px;
  margin-top:5px;
  color: #555;
`;

export const Salary = styled.div`
  font-size: 15px;
  color: #ff5722;
  margin-top: 5px;
`;

export const JobFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Deadline = styled.div`
  font-size: 12px;
  color: #777;
`;

export const JobDetails = styled.div`
  flex-grow: 1;
  padding: 10px;
  background-color: #fff;
  overflow-y: auto;

  color: #333;
 
  

  h2 {
    font-size: 20px;
    color: #333;
  }

  p {
    margin: 10px 0;
    font-size: 14px;
    color: #555;
  }
`;

export const Tag = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${({ tag }) => (tag === 'HOT' ? '#ff4d4d' : '#ffa500')};
  width: 35px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 10px;
`;






export const CardContainer = styled.div`
  width: 500px;
  margin-bottom:10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor:pointer;
  padding: 16px;
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Badge = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  background-color: #ff4d4f;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
`;

export const JobTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const Companyz = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;

  & span {
    margin-left: 8px;
    font-size: 16px;
  }

  & img {
    width: 20px;
    height: 20px;
  }
`;

export const Locationz = styled.div`
  font-size: 14px;
  color: #999;
  margin: 4px 0;
`;

export const Salaryz = styled.div`
  font-size: 14px;
  color: #e74c3c;
  font-weight: bold;
  margin: 8px 0;
`;

export const Details = styled.div`
  font-size: 14px;
  color: #333;
  
  line-height: 1.6;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:10px;
  font-size: 14px;

  .time-remaining {
    color: #666;
  }

  .more-info {
    color: #1890ff;
    cursor: pointer;
    text-decoration: underline;
  }
`;



export const HeaderImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;
export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin: 16px 0;
`;
export const WrapperButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  background-color: ${(props) => (props.primary ? '#ff4d4f' : '#e0e0e0')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  &:hover {
    opacity: 0.9;
  }
`;
export const SalaryInfo = styled.div`
  margin: 16px 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  gap: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
export const JobInfo = styled.div`
  font-size: 14px;
  color: #555;
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;
export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 16px 0 8px 0;
`;
export const JobDescription = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 14px;
  color: #333;

  li {
    margin-bottom: 8px;
  }
`;
