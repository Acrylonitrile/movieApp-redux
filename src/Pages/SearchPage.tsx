import { styled } from "styled-components"
import SearchBar from "../Molecules/SearchBar"
import { useState, useEffect } from "react"
import FetchData from "../fetchData"
import { searchUrl } from "../Constants"
import type { IMovieorTv, MediaType } from "../Interfaces"
import SearchResults from "../Molecules/SearchResults"
import MediaButtons from "../Molecules/MediaButton"

function SearchPage (): JSX.Element {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<IMovieorTv[]>([])
  const [buttonState, setButtonState] = useState<"all" | MediaType>("all")

  const getData = async (): Promise<void> => {
    const data = await FetchData(searchUrl + `?query=${query}`)
    setResults(data.results)
  }

  const resultsByMedia = new Map([
    ["all", results],
    ["movie", results.filter((item) => item.media_type === "movie")],
    ["tv", results.filter((item) => item.media_type === "tv")]
  ])

  useEffect(() => {
    void getData()
  }, [query])

  return (
    <MainWrapper>
      <SearchBar setQuery={setQuery} />
      <MediaButtons buttonState={buttonState} setButtonState={setButtonState} />
      <SearchResults results={resultsByMedia.get(buttonState) ?? []} />
    </MainWrapper>
  )
}

export default SearchPage

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 96%;
`
