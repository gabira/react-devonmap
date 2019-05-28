/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 20%;
  height: 80%;
  background: #939393;
  margin: 5% 0 10% 10px;
  padding: 10px;
  border-radius: 10px;
  border-right: 2px solid #0006;
  border-bottom: 2px solid #0006;
  z-index: ${props => (props.modal ? 0 : 1)};
  position: absolute;

  h2 {
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
    font-size: 18px;
    border-bottom: 2px solid #fff;
    padding-bottom: 10px;
  }

  ul {
    list-style: none;

    li {
      border: 1px solid #fff;
      border-radius: 5px;
      padding: 5px;
      background: #fff;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 28px;
        height: 100%;
        border-radius: 50%;
        margin: 0;
        padding: 0;
        border: 0;
      }

      strong {
        font-size: 14px !important;
      }

      small {
        font-style: italic;
        a {
          text-decoration: none;
          color: #f00;
        }
      }

      button {
        background: #d02f2f;
        border: 0;
        color: #fff;
        padding: 1px 6px 4px 6px;
        border-radius: 7px;
        cursor: pointer;
      }
    }
  }
`;
