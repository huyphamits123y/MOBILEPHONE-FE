import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  background-color: #00b14f;
  color: #fff;
  padding: 15px;
  border-radius: 8px 8px 0 0;

  h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }

  ul {
    list-style: none;
    padding: 0;
    font-size: 0.9em;

    li {
      margin-bottom: 0.5em;
      &:before {
        content: '✔';
        color: #fff;
        margin-right: 5px;
      }
    }
  }
`;

export const Title = styled.h3`
  font-size: 1.4em;
  color: #00b14f;
  margin: 20px 0;
`;

export const SubTitle = styled.p`
  font-size: 0.9em;
  color: #777;
`;

export const FormField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input, select, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
  }

  input[type="date"] {
    padding-left: 15px;
  }

  &.inline {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    div {
      width: 50%;
    }
  }
`;

export const SaveButton = styled.button`
  background-color: #00b14f;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  width: 100%;
`;
export const FormFieldd = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input, select, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
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
