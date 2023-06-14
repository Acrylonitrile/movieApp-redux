import { styled } from "styled-components"
import { imageBaseUrl } from "../Constants"
import { useNavigate } from "react-router-dom"
import type { IMovieorTv, MediaType } from "../Interfaces"

interface Props {
  item: IMovieorTv
  mediatype: MediaType
}

function Card ({ item, mediatype }: Props): JSX.Element {
  // console.log(background);
  const navigate = useNavigate()

  return (
    <CardWrap
      background={imageBaseUrl + item.poster_path}
      onClick={() => {
        navigate(`/page/${mediatype}/${item.id}`)
      }}
    >
      {item.poster_path !== "" ? "" : item.name ?? item.title}
    </CardWrap>
  )
}

export default Card

const CardWrap = styled.div<{ background: string }>`
  width: 130px;
  height: 200px;
  background-size: cover;
  background-color: black;
  background-image: ${(props) => `url(${props.background})`};
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`
