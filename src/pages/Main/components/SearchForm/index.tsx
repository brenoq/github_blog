import {
  SearchFormContainer,
  SearchFormContent,
  SearchFormInfo,
} from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormInfo>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </SearchFormInfo>
      <SearchFormContent action="submit">
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchFormContent>
    </SearchFormContainer>
  )
}
