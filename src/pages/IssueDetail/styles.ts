import { styled } from 'styled-components'

export const IssueDetailContainer = styled.main`
  width: 100%;
  min-width: 144rem;

  margin: 0 auto;
`
export const IssueDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 4rem 3.2rem;
  margin: 0 auto;

  width: 86.4rem;

  text-align: justify;
  color: ${(props) => props.theme['base-text']};
  font-size: 1.6rem;
  line-height: 160%;

  & pre {
    width: 100%;
    font-size: 1.2rem;
  }

  & p {
    margin-top: 2rem;
  }

  & h1,
  h2,
  h3 {
    margin-top: 2rem;
  }

  & h1:first-child,
  h2:first-child,
  h3:first-child {
    margin-top: 0;
  }
`
