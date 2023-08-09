import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { TagContainer } from './styles'

interface TagIcon {
  icon: IconProp
  content: string
}

export function Tag({ icon, content }: TagIcon) {
  return (
    <TagContainer>
      <FontAwesomeIcon icon={icon} />
      <span>{content}</span>
    </TagContainer>
  )
}
