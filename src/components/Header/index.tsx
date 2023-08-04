import { HeaderContainer, HeaderContent } from './styles'

import cover from '../../assets/cover.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={cover} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}
