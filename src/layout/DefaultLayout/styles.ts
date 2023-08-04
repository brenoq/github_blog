import { styled } from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  background: ${(props) => props.theme['base-background']};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 144rem;
  margin: 0 auto;
`
