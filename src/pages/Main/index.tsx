import { Header } from '../../components/Header'
import { BlogPostsContainer, BlogPostsContent } from './styles'

export function Main() {
  return (
    <div>
      <Header />

      <BlogPostsContainer>
        <BlogPostsContent>
          <h1>Posts</h1>
        </BlogPostsContent>
      </BlogPostsContainer>
    </div>
  )
}
