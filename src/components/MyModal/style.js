/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-bottom: 10px;
  }

  input:text {
    width: 100%;
  }

  button {
    width: 100%;
    color: #fff;
    border: 0;
    padding: 5px 0;
    margin: 5px 0;
    border-radius: 5px;
    cursor: pointer;

    &[type='button'] {
      background: #d02f2f;
    }

    &[type='submit'] {
      background: #4050b6;
    }
  }
`;

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
