// import { useParams } from 'react-router-dom'
import { IssueInfo } from './components/IssueInfo'
import Markdown from 'react-markdown'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { IssueDetailContainer, IssueDetailContent } from './styles'

export function IssueDetail() {
  // const { number } = useParams()
  const markdown =
    '### Introduction\r\n\r\nConditional statements are crucial components of any programming language, and JavaScript is no exception. These statements allow developers to create decision-making processes in their code, enabling dynamic and responsive interactions. In this article, we will explore the "if" statement in JavaScript, its syntax, and provide practical examples to showcase its usage.\r\n\r\n### The "if" Statement:\r\nIn JavaScript, the "if" statement is a fundamental control structure used to execute a block of code based on a specified condition. The syntax of the "if" statement is as follows:\r\n\r\n```javascript\r\nif (condition) {\r\n    // Code to be executed if the condition is true\r\n}\r\n```\r\n\r\nExample 1: Checking for Even Numbers\r\n\r\n```javascript\r\nlet number = 10;\r\n\r\nif (number % 2 === 0) {\r\n    console.log("The number is even.");\r\n} else {\r\n    console.log("The number is odd.");\r\n}\r\n```\r\n\r\nExample 2: User Authentication\r\n\r\n```javascript\r\nlet username = "user123";\r\nlet password = "pass456";\r\n\r\nif (username === "user123" && password === "pass456") {\r\n    console.log("Authentication successful. Welcome, user!");\r\n} else {\r\n    console.log("Authentication failed. Invalid credentials.");\r\n}\r\n```\r\n\r\n### Nested "if" Statements:\r\nDevelopers can also use nested "if" statements to create more complex decision trees. This allows for finer control over program behavior based on multiple conditions.\r\n\r\n```javascript\r\nlet num = 15;\r\n\r\nif (num > 10) {\r\n    if (num % 2 === 0) {\r\n        console.log("The number is greater than 10 and even.");\r\n    } else {\r\n        console.log("The number is greater than 10 but odd.");\r\n    }\r\n} else {\r\n    console.log("The number is not greater than 10.");\r\n}\r\n```\r\n\r\n### Conclusion\r\n\r\nConditional statements, particularly the "if" statement, are indispensable tools in JavaScript programming. They empower developers to write dynamic and responsive code that can make decisions based on specific conditions. By mastering the "if" statement and its variations, programmers can create more intelligent and interactive applications, enhancing the overall user experience. Whether it\'s validating user input, implementing game mechanics, or responding to various events, the "if" statement remains a cornerstone of JavaScript development.'

  return (
    <IssueDetailContainer>
      <IssueInfo />
      {/* <h1>Rota: {number}</h1> */}
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
          {markdown}
        </Markdown>
      </IssueDetailContent>
    </IssueDetailContainer>
  )
}
