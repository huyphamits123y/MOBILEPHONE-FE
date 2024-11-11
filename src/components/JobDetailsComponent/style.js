import React from "react";
import styled from "styled-components";
export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 80px;
`;

export const JobInfo = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const JobTitle = styled.h1`
  font-size: 24px;
  color: #2b6cb0;
`;

export const CompanyName = styled.p`
  font-size: 16px;
  color: #4a5568;
  margin: 4px 0;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #718096;
`;

export const JobStatus = styled.p`
  font-size: 12px;
  color: #718096;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#3182ce" : "white")};
  color: ${(props) => (props.primary ? "white" : "#3182ce")};
  border: 1px solid #3182ce;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#2b6cb0" : "#ebf8ff")};
  }
`;

export const MainContent = styled.div`
  border-top: 1px solid #e2e8f0;
`;

export const Tabs = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Tab = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  background: none;
  padding: 10px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#2b6cb0" : "#718096")};
  border-bottom: ${(props) => (props.active ? "2px solid #2b6cb0" : "none")};
`;

export const JobDetails = styled.div`
  padding: 20px 0;
  font-size: 14px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  color: #2d3748;
  margin-bottom: 10px;
`;

export const InfoGroup = styled.div`
  margin-bottom: 20px;
`;

export const Icon = styled.span`
  margin-right: 8px;
`;

