import { styled } from "styled-components"
import {
  TextWrapper,
  Title,
  SubHeader,
  Description
} from "../Atoms/SingleSlide"
import type { IMovieorTv, MediaType } from "../Interfaces"
import { imageBaseUrl, movieUrls, tvUrls } from "../Constants"
import DisplayGenres from "./Genres"

interface Genres {
  id: number
  name: string
}

interface IBasicDetails {
  mediatype: MediaType
  details: IMovieorTv
}

function BasicDetails ({ mediatype, details }: IBasicDetails): JSX.Element {
  const genreList =
    mediatype === "movie" ? movieUrls.genreList : tvUrls.genreList

  const genreIds = details.genres.map((item: Genres) => item.id)

  return (
    <DetailsArea background={imageBaseUrl + details.backdrop_path}>
      <TextWrapper>
        <Title>{details.name ?? details.title}</Title>
        <SubHeader>
          <DisplayGenres url={genreList} inputGenres={genreIds} />
        </SubHeader>
        <Description>{details.overview}</Description>
      </TextWrapper>
    </DetailsArea>
  )
}

export default BasicDetails

const DetailsArea = styled.div<{ background: string }>`
  height: 600px;
  width: 100%;
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0%;
`
