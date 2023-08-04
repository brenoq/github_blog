import { HeaderContent } from './styles'

import cover from '../../assets/cover.svg'

export function Header() {
  return (
    <HeaderContent>
      <img src={cover} alt="" />
    </HeaderContent>
  )
}
