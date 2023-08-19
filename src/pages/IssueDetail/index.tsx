// import { useParams } from 'react-router-dom'
import { IssueInfo } from './components/IssueInfo'
import Markdown from 'react-markdown'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { IssueDetailContainer, IssueDetailContent } from './styles'
import { useContext } from 'react'
import { IssuesContext } from '../../context/IssuesContext'
import { useParams } from 'react-router-dom'

export interface Issues {
  number: number
  title: string
  user: string
  created_at: string
  comments: string
  body: string
}

export function IssueDetail() {
  const { number } = useParams()
  const { issues } = useContext(IssuesContext)

  const data = issues.filter((issue) => issue.number === Number(number))

  return (
    <IssueDetailContainer>
      <IssueInfo
        owner={data[0].user.login}
        date={data[0].created_at}
        comments={data[0].comments}
      />
      <IssueDetailContent>
        <Markdown
          components={{
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            code({ node, inline, className, children, style, ...props }) {
              const match = /language-(\w+)/.exec(className || '')

              return !inline && match ? (
                <SyntaxHighlighter
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={oneDark}
                  {...props}
                />
              ) : (
                <code className={className || ''} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {data[0].body}
        </Markdown>
      </IssueDetailContent>
    </IssueDetailContainer>
  )
}
