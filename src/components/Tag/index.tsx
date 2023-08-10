import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { TagContainer } from './styles'

interface TagIcon {
  icon: IconProp
  content: string
  type: 'profile' | 'issue'
}

export function Tag({ icon, content, type }: TagIcon) {
  return (
    <TagContainer type={type}>
      <FontAwesomeIcon icon={icon} />
      <span>{content}</span>
    </TagContainer>
  )
}
