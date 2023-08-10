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

export function IssueInfo() {
  return (
    <IssueInfoContainer>
      <header>
        <Link to="/">
          <FontAwesomeIcon size="xs" icon={faChevronLeft} />
          <span>VOLTAR</span>
        </Link>
        <a href="http://github.com/brenoq" target="_blank" rel="noreferrer">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
        </a>
      </header>
      <main>
        <p>JavaScript data types and data structures</p>
      </main>
      <footer>
        <Tag icon={faGithub} content="brenoq" type="issue" />
        <Tag icon={faCalendarDay} content="Há 1 dia" type="issue" />
        <Tag icon={faComment} content="5 comentários" type="issue" />
      </footer>
    </IssueInfoContainer>
  )
}
