import { styled } from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"
import { imageBaseUrl } from "../Constants"
import type { ImageDetails } from "../Interfaces"
import { useState } from "react"

interface Props {
  images: ImageDetails[]
}

function ImageSection ({ images }: Props): JSX.Element {
  const [currentImage, setCurrentImage] = useState(images[0].file_path)
  return (
    <MainWrapper>
      <BigImgWrap background={imageBaseUrl + currentImage}></BigImgWrap>
      <SwiperWrap>
        <Swiper
          navigation
          modules={[Navigation]}
          slidesPerView={3}
          slidesPerGroup={5}
          rewind
          slidesOffsetBefore={20}
          spaceBetween={10}
        >
          {images.map((item) => (
            <SwiperSlide key={Math.random()}>
              <SmallImgWrap
                background={imageBaseUrl + item.file_path}
                onClick={() => {
                  setCurrentImage(item.file_path)
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
    </MainWrapper>
  )
}

export default ImageSection

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

const BigImgWrap = styled.div<{ background: string }>`
  width: inherit;
  height: 500px;
  background-color: white;
  margin-bottom: 20px;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
`

const SmallImgWrap = styled.div<{ background: string }>`
  width: 200px;
  height: 140px;
  background-color: white;
  background-size: cover;
  background-image: ${(props) => `url(${props.background})`};
  &:hover {
    cursor: pointer;
  }
`

const SwiperWrap = styled.div`
  height: 140px;
  width: 100%;
`
