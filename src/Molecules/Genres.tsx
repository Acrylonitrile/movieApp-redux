import { useState, useEffect } from "react"
import FetchData from "../fetchData"

interface Props {
  url: string
  inputGenres: number[]
}

function DisplayGenres ({ url, inputGenres }: Props): JSX.Element {
  const [genreList, setGenreList] = useState<Map<number, string>>(new Map([]))
  const [status, setStatus] = useState<boolean>(false)

  const getData = async (): Promise<void> => {
    const genreData = await FetchData(url)
    setStatus(true)
    setGenreList(
      new Map(
        genreData.genres.map((genre: { id: number, name: string }) => {
          return [genre.id, genre.name]
        })
      )
    )
  }

  useEffect(() => {
    if (!status) void getData()
  }, [status])

  return <>{inputGenres.map((id) => (genreList.get(id) ?? " ") + "  ")}</>
}

export default DisplayGenres
