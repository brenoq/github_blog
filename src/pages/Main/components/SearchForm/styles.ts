import { styled } from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  width: 86.4rem;
  margin-top: 7.2rem;
`

export const SearchFormInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 86.4rem;

  strong {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 160%;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    text-align: right;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
  }
`

export const SearchFormContent = styled.form`
  input {
    border-radius: 0.6rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};

    width: 86.4rem;
    padding: 1.2rem 1.6rem;

    color: ${(props) => props.theme['base-label']};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 160%;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
