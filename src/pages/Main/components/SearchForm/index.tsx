import { useContext } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { IssuesContext } from '../../../../context/IssuesContext'

import {
  SearchFormContainer,
  SearchFormContent,
  SearchFormInfo,
} from './styles'
import { useForm } from 'react-hook-form'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { issues, searchIssues } = useContext(IssuesContext)

  const totalIssues = issues.length

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchIssues(data: SearchFormInput) {
    searchIssues(data.query)
  }

  return (
    <SearchFormContainer>
      <SearchFormInfo>
        <strong>Publicações</strong>
        <span>{totalIssues + ' publicações'}</span>
      </SearchFormInfo>
      <SearchFormContent
        action="submit"
        onSubmit={handleSubmit(handleSearchIssues)}
      >
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
          disabled={isSubmitting}
        />
      </SearchFormContent>
    </SearchFormContainer>
  )
}
