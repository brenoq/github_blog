import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AvatarContainer, InfoContainer, ProfileContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { Tag } from '../../../../components/Tag'
import { useContext } from 'react'
import { IssuesContext } from '../../../../context/IssuesContext'

export function Profile() {
  const { user } = useContext(IssuesContext)

  return (
    <ProfileContainer>
      <AvatarContainer src="https://github.com/brenoq.png" alt="" />

      <InfoContainer>
        <header>
          <span>{user.name}</span>
          <a
            href={'https://github.com/' + user.login}
            target="_blank"
            rel="noreferrer"
          >
            <span>GITHUB</span>
            <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <main>
          <p>{user.bio}</p>
        </main>
        <footer>
          <Tag icon={faGithub} content={user.login} type="profile" />
          <Tag icon={faBuilding} content={user.company} type="profile" />
          <Tag
            icon={faUserGroup}
            content={user.followers + ' Seguidores'}
            type="profile"
          />
        </footer>
      </InfoContainer>
    </ProfileContainer>
  )
}
