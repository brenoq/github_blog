import { styled } from 'styled-components'

export const BlogPostsContainer = styled.main`
  width: 100%;
  min-width: 144rem;

  margin: 0 auto;
`

export const BlogPostsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const IssuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;

  margin-top: 4.8rem;
  margin-bottom: 23.4rem;

  a {
    text-decoration: none;
  }
`

export const IssueCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 41.6rem;
  height: 26rem;
  padding: 3.2rem;

  border-radius: 1rem;
  border: 2px solid ${(props) => props.theme['base-post']};
  background: ${(props) => props.theme['base-post']};

  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: first baseline;
    gap: 1.6rem;

    h1 {
      width: 27.5rem;
      min-height: 6.4rem;

      color: ${(props) => props.theme['base-title']};
      font-size: 2rem;
      font-weight: 700;
      line-height: 160%;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      padding: 0.5rem 0;

      color: ${(props) => props.theme['base-span']};
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 160%;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;

    color: ${(props) => props.theme['base-text']};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 160%;
  }
`
