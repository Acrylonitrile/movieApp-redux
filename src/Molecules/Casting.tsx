import { styled } from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"
import { imageBaseUrl } from "../Constants"
import type { IPersonDetails } from "../Interfaces"
import { useNavigate } from "react-router-dom"

interface Props {
  personDetails: IPersonDetails[]
}

function Casting ({ personDetails }: Props): JSX.Element {
  const navigate = useNavigate()
  return (
    <SwiperWrap>
      <Swiper
        navigation
        modules={[Navigation]}
        slidesPerView={6}
        slidesPerGroup={5}
        rewind
        slidesOffsetBefore={20}
        spaceBetween={10}
      >
        {personDetails.map((item) => (
          <SwiperSlide key={item.id}>
            <PersonWrap
              id={item.id.toString()}
              onClick={() => {
                navigate(`/person/${item.id}`)
              }}
            >
              <ProfilePic background={imageBaseUrl + item.profile_path} />
              <PersonName>{item.name}</PersonName>
              <PersonRole>{item.character}</PersonRole>
            </PersonWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrap>
  )
}

export default Casting

const SwiperWrap = styled.div`
  min-height: 140px;
  width: 100%;
  margin-bottom: 30px;
`

const PersonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`

const ProfilePic = styled.div<{ background: string }>`
  height: 140px;
  width: 100px;
  background-color: white;
  background-size: cover;
  background-image: ${(props) => `url(${props.background})`};
`

const PersonName = styled.div`
  font-size: 20px;
`
const PersonRole = styled.div`
  font-size: 16px;
  opacity: 0.7;
`
