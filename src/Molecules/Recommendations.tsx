import { styled } from "styled-components"
import { useState, useEffect } from "react"
import Card from "../Atoms/Card"
import type { IMovieorTv, IPageDetails } from "../Interfaces"
import { baseUrl } from "../Constants"
import FetchData from "../fetchData"

function Recommmendations ({ mediatype, id }: IPageDetails): JSX.Element {
  const [recommendations, setRecommendations] = useState<IMovieorTv[]>([])
  const [status, setStatus] = useState<boolean>(false)

  const getData = async (): Promise<void> => {
    const data = await FetchData(`${baseUrl}${mediatype}/${id}/recommendations`)
    setStatus(true)
    setRecommendations(data.results)
  }
  useEffect(() => {
    setStatus(false)
  }, [id])
  useEffect(() => {
    if (!status) {
      void getData()
    }
  }, [status])

  return (
    <MainWrapper>
      {recommendations.map((item) => (
        <Card item={item} mediatype={item.media_type} key={item.id} />
      ))}
    </MainWrapper>
  )
}

export default Recommmendations

const MainWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
