import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Issues {
  number: number
  title: string
  user: { login: string }
  created_at: string
  comments: string
  body: string
}

interface User {
  name: string
  login: string
  company: string
  bio: string
  followers: string
}

interface IssuesContextType {
  issues: Issues[]
  user: User
}

export const IssuesContext = createContext({} as IssuesContextType)

interface IssuesProviderProps {
  children: ReactNode
}

export function IssesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])
  const [user, setUser] = useState({} as User)

  async function fetchUser() {
    const response = await api.get('users/brenoq')

    const { name, login, company, bio, followers } = response.data

    setUser({ name, login, company, bio, followers } as User)
  }

  async function fetchIssues() {
    const response = await api.get('repos/brenoq/github_blog/issues')

    const data = response.data.map((issue: Issues) => ({
      number: issue.number,
      title: issue.title,
      user: issue.user,
      created_at: issue.created_at,
      comments: issue.comments,
      body: issue.body,
    }))

    setIssues(data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, user }}>
      {children}
    </IssuesContext.Provider>
  )
}
