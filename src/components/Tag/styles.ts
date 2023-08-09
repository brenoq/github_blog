import { styled } from 'styled-components'

export const TagContainer = styled.div`
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
    color: ${(props) => props.theme['base-subtitle']};

    font-size: 1.6rem;
    font-weight: 400;
  }
`
