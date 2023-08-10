import { styled } from 'styled-components'

interface typeProps {
  type: 'profile' | 'issue'
}

export const TagContainer = styled.div<typeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  svg {
    width: 1.8rem;
    height: 1.8rem;

    color: ${(props) => props.theme['base-label']};
  }

  span {
    color: ${(props) =>
      props.type === 'profile'
        ? (props) => props.theme['base-subtitle']
        : (props) => props.theme['base-span']};

    font-size: 1.6rem;
    font-weight: 400;
  }
`
