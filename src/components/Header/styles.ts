import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 0 auto;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 144rem;

  margin: 0 auto;
`
