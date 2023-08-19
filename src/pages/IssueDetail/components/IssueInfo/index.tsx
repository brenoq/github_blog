import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IssueInfoContainer } from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Tag } from '../../../../components/Tag'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface IssuesInfoProps {
  owner: string
  date: string
  comments: string
}

export function IssueInfo({ owner, date, comments }: IssuesInfoProps) {
  const dateFormatted = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <IssueInfoContainer>
      <header>
        <Link to="/">
          <FontAwesomeIcon size="xs" icon={faChevronLeft} />
          <span>VOLTAR</span>
        </Link>
        <a
          href="http://github.com/brenoq/github_blog"
          target="_blank"
          rel="noreferrer"
        >
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
        </a>
      </header>
      <main>
        <p>JavaScript data types and data structures</p>
      </main>
      <footer>
        <Tag icon={faGithub} content={owner} type="issue" />
        <Tag icon={faCalendarDay} content={dateFormatted} type="issue" />
        <Tag
          icon={faComment}
          content={comments + ' comentários'}
          type="issue"
        />
      </footer>
    </IssueInfoContainer>
  )
}
