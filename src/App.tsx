import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { IssesProvider } from './context/IssuesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <IssesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssesProvider>
    </ThemeProvider>
  )
}
