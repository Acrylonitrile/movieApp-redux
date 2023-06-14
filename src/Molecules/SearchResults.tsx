import Card from "../Atoms/Card"
import { styled } from "styled-components"
import type { IMovieorTv } from "../Interfaces"

interface Props {
  results: IMovieorTv[]
}

function SearchResults ({ results }: Props): JSX.Element {
  return (
    <>
      <MainWrapper>
        {results.map((item) => (
          <Card item={item} mediatype={item.media_type} key={item.id} />
        ))}
      </MainWrapper>
    </>
  )
}

export default SearchResults

const MainWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`
