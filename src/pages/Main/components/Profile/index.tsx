import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AvatarContainer, InfoContainer, ProfileContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { Tag } from '../../../../components/Tag'

export function Profile() {
  return (
    <ProfileContainer>
      <AvatarContainer src="https://github.com/brenoq.png" alt="" />

      <InfoContainer>
        <header>
          <span>Breno Quirino</span>
          <a href="http://github.com/brenoq" target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <main>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </main>
        <footer>
          <Tag icon={faGithub} content="brenoq" />
          <Tag icon={faBuilding} content="DBSeller" />
          <Tag icon={faUserGroup} content="32 seguidores" />
        </footer>
      </InfoContainer>
    </ProfileContainer>
  )
}
