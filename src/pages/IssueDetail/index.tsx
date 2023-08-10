import { useParams } from 'react-router-dom'
import { IssueInfo } from './components/IssueInfo'

export function IssueDetail() {
  const { number } = useParams()

  return (
    <div>
      <IssueInfo />
      <h1>Rota: {number}</h1>
    </div>
  )
}
