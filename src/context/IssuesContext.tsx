import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Issues {
  id: number
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

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, user }}>
      {children}
    </IssuesContext.Provider>
  )
}
