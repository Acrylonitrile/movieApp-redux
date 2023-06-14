import { styled } from "styled-components"
import "swiper/css"
import "swiper/css/navigation"
import type { IStoredMovie, MediaType, TimePeriod, Urls } from "../Interfaces"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import { useState, useEffect } from "react"
import "react-loading-skeleton/dist/skeleton.css"
import SingleSlide from "../Atoms/SingleSlide"
import { useDispatch, useSelector } from "react-redux"
import { getDataHome } from "../redux/HomePage/actions"
import type { IStore } from "../redux/store"

interface Props {
  urls: Urls
  title: string
  mediatype: MediaType
}

function Slides ({ urls, title, mediatype }: Props): JSX.Element {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("day")
  const dispatch = useDispatch()

  const state: IStoredMovie = useSelector(
    (store: IStore) => store.home[mediatype].trending[timePeriod]
  )

  useEffect(() => {
    if (!state.hasFetched) {
      dispatch(
        getDataHome(
          urls.trending + timePeriod,
          `${mediatype.toUpperCase()}_TRENDING_${timePeriod.toUpperCase()}`
        )
      )
    }
  }, [state.hasFetched])

  const changeData = (timeOfButton: TimePeriod): void => {
    if (timePeriod !== timeOfButton) {
      setTimePeriod(timeOfButton)
    }
  }

  const movieList = state.list
  return (
    <MainWrapper>
      <SwiperWrap>
        <SwipeHeader>
          <Spantext>{title}</Spantext>
          <TabButton
            onClick={() => {
              changeData("day")
            }}
          >
            Today
          </TabButton>
          <TabButton
            onClick={() => {
              changeData("week")
            }}
          >
            This Week
          </TabButton>
        </SwipeHeader>
        <Swiper navigation modules={[Navigation]} rewind slidesPerView={"auto"}>
          {movieList.map((item) => (
            <SwiperSlide key={item.id}>
              <SingleSlide
                item={item}
                genreList={urls.genreList}
                mediatype={mediatype}
                key={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
    </MainWrapper>
  )
}

export default Slides

const MainWrapper = styled.div`
  position: relative;
`

const SwiperWrap = styled.div`
  height: 600px;
  width: 100%;
  & .swiper {
    height: 100%;
  }
`
const SwipeHeader = styled.div`
  height: auto;
  position: absolute;
  top: 20px;
  left: 80px;
  z-index: 2;
`

const TabButton = styled.button`
  width: 100px;
  border: none;
  height: 50px;

  background-color: rgba(0, 0, 0, 0);
  color: white;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  }
`

const Spantext = styled.span`
  margin-right: 20px;
  font-size: 25px;
`
