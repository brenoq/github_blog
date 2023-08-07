import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AvatarContainer, InfoContainer, ProfileContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

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
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>brenoq</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>DBSeller</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </footer>
      </InfoContainer>
    </ProfileContainer>
  )
}
