import styled from 'styled-components';

export const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;

  img {
    min-width: 220px;
    width: 275px;
    max-height: 330px;
    border: 1px solid #ddd;
    border-radius: 10px;
  }

  .text-side {
    margin-left: 30px;
    .summary {
      color: #5f5f5f;
      line-height: 1.5;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    img {
      margin-bottom: 20px;
      margin: auto;
    }
    .text-side {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h2 {
    margin: 0;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
  }

  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;
