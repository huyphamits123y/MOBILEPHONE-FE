import React from "react";
import styled from "styled-components";
export const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
`;

export const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 20px;
`;

export const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.h1`
  font-size: 24px;
  color: #28a745;
  margin: 0;
`;

export const CompanyLocation = styled.p`
  font-size: 16px;
  color: #555;
  margin: 5px 0;
`;

export const JobButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`;

export const ImagesSection = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

export const Image = styled.img`
  width: 240px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

export const BenefitsSection = styled.div`
padding:25px;
  display: flex;
  gap: 20px;
  margin: 20px 0;
  justify-content: space-between;
`;

export const BenefitItem = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
`;

export const BenefitText = styled.p`
  font-size: 14px;
  color: #333;
`;

export const DescriptionSection = styled.div`
  margin-top: 20px;
`;

export const SectionHeading = styled.h2`
  font-size: 18px;
  color: #28a745;
`;

export const CompanyInfo = styled.div`
  margin-top: 20px;
`;

export const InfoHeading = styled.h3`
 font-weight:bold;
  font-size: 16px;
  color: #000;
`;

export const InfoText = styled.p`

  font-size: 16px;
  color: #555;
`;
