import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
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

export const AvatarContainer = styled.img`
  width: 14.8rem;
  height: 14.8rem;

  border-radius: 0.8rem;
`

export const InfoContainer = styled.div`
  header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

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
    }
  }

  main {
    margin-top: 0.8rem;

    & > p {
      color: ${(props) => props.theme['base-text']};
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 160%;
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin-top: 2.4rem;
    gap: 2.4rem;

    & > div {
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
    }
  }
`
