import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { styled } from "styled-components"
import { Navigation } from "swiper"
import { useEffect } from "react"
import type { IStoredMovie, MediaType } from "../Interfaces"
import { getDataHome, destinations } from "../redux/HomePage/actions"
import Card from "../Atoms/Card"
import { useDispatch, useSelector } from "react-redux"
import type { IStore } from "../redux/store"

interface Props {
  title: string
  url: string
  mediatype: MediaType
  destination: "topRated" | "upcoming" | "popular"
}

function CardRow ({ title, url, mediatype, destination }: Props): JSX.Element {
  const dispatch = useDispatch()
  const state: IStoredMovie = useSelector(
    (store: IStore) => store.home[mediatype][destination]
  )

  useEffect(() => {
    if (!state.hasFetched) {
      dispatch(getDataHome(url, destinations[mediatype][destination]))
    }
  }, [state.hasFetched])

  const moviesOrTv = state.list

  // console.log(moviesOrTv);
  return (
    <MainWrapper>
      <SwiperWrap>
        <SubHeader>{title}</SubHeader>
        <Swiper
          navigation
          modules={[Navigation]}
          slidesPerView={10}
          slidesPerGroup={5}
          rewind
          slidesOffsetBefore={20}
          spaceBetween={10}
        >
          {moviesOrTv.map((item) => (
            <SwiperSlide key={item.id}>
              <Card key={item.id} item={item} mediatype={mediatype} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
    </MainWrapper>
  )
}

export default CardRow

const MainWrapper = styled.div`
  padding: 20px 0px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0) 5%,
    95%,
    rgba(0, 0, 0, 1)
  );
`

const SwiperWrap = styled.div`
  /* background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  ); */
  z-index: 2;
`

const SubHeader = styled.div`
  font-size: 20px;
  padding: 0px 20px 10px 20px;
`
