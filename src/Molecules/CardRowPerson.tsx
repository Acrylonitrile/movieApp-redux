import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { styled } from "styled-components"
import { Navigation } from "swiper"
import type { IMovieorTv, MediaType } from "../Interfaces"
import Card from "../Atoms/Card"

interface Props {
  title: string
  list: IMovieorTv[]
  mediatype: MediaType
}

function CardRowPerson ({ title, list, mediatype }: Props): JSX.Element {
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
          {list.map((item) => (
            <SwiperSlide key={item.id}>
              <Card key={item.id} item={item} mediatype={mediatype} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
    </MainWrapper>
  )
}

export default CardRowPerson

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
  z-index: 2;
`

const SubHeader = styled.div`
  font-size: 20px;
  padding: 0px 20px 10px 20px;
`
