import { styled } from 'styled-components'

export const IssueInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: -9.2rem;
  margin-left: auto;
  margin-right: auto;
  padding: 3.2rem;

  width: 86.4rem;
  height: 16.8rem;

  border-radius: 1rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    width: 100%;

    & > span {
      color: ${(props) => props.theme['base-title']};

      font-size: 2.4rem;
      font-weight: 700;
      line-height: 130%;
    }

    & > a {
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;

      color: ${(props) => props.theme.blue};
      font-size: 1.2rem;
      font-weight: 700;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  main {
    color: ${(props) => props.theme['base-title']};
    font-family: Nunito;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 130%;

    margin-top: 2rem;
  }

  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin-top: 0.8rem;
    gap: 2.4rem;
  }
`
