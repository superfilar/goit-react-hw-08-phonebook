import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  color: white;
`;
export const Input = styled.input`
  width: 350px;
  margin-bottom: 15px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  padding: 10px;
  font-size: 14px;
  color: grey;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  padding: 5px 10px 5px;

  background: rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  margin-left: 15px;
  :focus,
  :hover {
    color: green;
  }
`;

export const Span = styled.span`
  display: flex;
  margin-bottom: 3px;
`;
