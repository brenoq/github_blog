import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main'
import { IssueDetail } from './pages/IssueDetail'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/issue" element={<IssueDetail />} />
      </Route>
    </Routes>
  )
}
