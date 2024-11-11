import React from 'react';
import styled from 'styled-components';

// Styled Components
// export const Container = styled.div`
//   width: 100%;
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 20px;
//   background-color: #f9f9f9;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// export const Title = styled.h2`
//   font-size: 20px;
//   color: #333;
//   margin-bottom: 15px;
// `;

// export const FormGroup = styled.div`
//   margin-bottom: 15px;
// `;

// export const Label = styled.label`
//   display: block;
//   font-size: 14px;
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   font-size: 14px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   margin-bottom: 10px;
// `;

// export const TextArea = styled.textarea`
//   width: 100%;
//   padding: 10px;
//   font-size: 14px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   height: 80px;
// `;

// export const Select = styled.select`
//   width: 100%;
//   padding: 10px;
//   font-size: 14px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// export const Button = styled.button`
//   padding: 10px 20px;
//   font-size: 14px;
//   font-weight: bold;
//   color: white;
//   background-color: #4CAF50;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #45a049;
//   }
// `;

// export const ToggleContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 15px;
// `;

// export const ToggleLabel = styled.label`
//   font-size: 14px;
//   margin-left: 10px;
// `;

// export const RadioGroup = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 15px;
// `;

// export const RadioLabel = styled.label`
//   display: flex;
//   align-items: center;
// `;

// export const RadioInput = styled.input`
//   margin-right: 5px;
// `;

// export const SaveButton = styled(Button)`
//   width: 100%;
// `;






// export const FormContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 20px;
// `;

// export const Section = styled.div`
//   width: 48%;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 20px;
// `;

// export const Title = styled.h3`
//   font-size: 1.5rem;
//   color: #0070c9;
//   margin-bottom: 20px;
//   border-bottom: 1px solid #ccc;
//   padding-bottom: 10px;
// `;

// export const InputGroup = styled.div`
//   margin-bottom: 15px;
// `;

// export const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
//   font-size: 1rem;
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// export const Textarea = styled.textarea`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// export const SaveButton = styled.button`
//   padding: 10px 20px;
//   background-color: #0070c9;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;





export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;

  button {
    flex: 1;
    padding: 10px;
    background-color: transparent;
    border: none;
    font-weight: bold;
    cursor: pointer;

    &.active {
      border-bottom: 2px solid #007bff;
      color: #007bff;
    }
  }
`;

export const Section = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
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

export const SaveButton = styled.button`
  background-color: #ccc;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;