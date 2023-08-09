import { styled } from 'styled-components'

export const IssueInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  margin-top: -9.2rem;
  padding: 3.2rem 3.2rem 3.2rem 4rem;

  width: 86.4rem;
  height: 21.2rem;

  border-radius: 1rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`
