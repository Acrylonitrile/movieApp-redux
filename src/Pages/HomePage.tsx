import "swiper/css"
import "swiper/css/navigation"
import CardRow from "../Molecules/CardRow"
import Slides from "../Molecules/Slides"
import { movieUrls, tvUrls } from "../Constants"
import { styled } from "styled-components"

function HomePage (): JSX.Element {
  return (
    <>
      <PageContent>
        <Slides urls={movieUrls} title="Trending Movies" mediatype="movie" />
        <CardRow
          url={movieUrls.topRated}
          mediatype="movie"
          title="Top Rated Movies"
          destination="topRated"
        />
        <CardRow
          url={movieUrls.upcoming ?? ""}
          mediatype="movie"
          title="Upcoming Movies"
          destination="upcoming"
        />
        <Slides urls={tvUrls} title="Trending Tv" mediatype="tv" />
        <CardRow
          url={tvUrls.popular}
          mediatype="tv"
          title="Popular Tv"
          destination="popular"
        />
      </PageContent>
    </>
  )
}

export default HomePage

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  //max-width: 96%;
`
