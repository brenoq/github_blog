import { Profile } from './components/Profile'
import { BlogPostsContainer, BlogPostsContent } from './styles'

export function Main() {
  return (
    <div>
      <BlogPostsContainer>
        <BlogPostsContent>
          <Profile />
        </BlogPostsContent>
      </BlogPostsContainer>
    </div>
  )
}
