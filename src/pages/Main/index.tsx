import { Link } from 'react-router-dom'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import {
  BlogPostsContainer,
  BlogPostsContent,
  IssueCard,
  IssuesContainer,
} from './styles'
import { useContext } from 'react'
import { IssuesContext } from '../../context/IssuesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Main() {
  const { issues } = useContext(IssuesContext)

  return (
    <div>
      <BlogPostsContainer>
        <BlogPostsContent>
          <Profile />
          <SearchForm />

          <IssuesContainer>
            {issues.map((issue) => (
              <Link key={issue.number} to={`/issue/` + issue.number}>
                <IssueCard>
                  <div>
                    <h1>{issue.title}</h1>
                    <span>
                      {formatDistanceToNow(new Date(issue.created_at), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  </div>
                  <p>{issue.body.replace(/#/g, '')}</p>
                </IssueCard>
              </Link>
            ))}
          </IssuesContainer>
        </BlogPostsContent>
      </BlogPostsContainer>
    </div>
  )
}
