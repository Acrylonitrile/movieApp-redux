import { styled } from "styled-components"
import { videoBaseUrl } from "../Constants"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import type { VideoDetails } from "../Interfaces"

interface Props {
  videos: VideoDetails[]
}

function VideoSection ({ videos }: Props): JSX.Element {
  const [currentVideo, setCurrentVideo] = useState(videos[0].key)
  return (
    <MainWrapper>
      <VideoWrap>
        <Iframe src={videoBaseUrl + currentVideo} />
      </VideoWrap>
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
          {videos.map((item) => (
            <SwiperSlide key={item.key}>
              <VideoTitleWrap
                onClick={() => {
                  setCurrentVideo(item.key)
                }}
              >
                <FontAwesomeIcon icon={faPlay} />
                {item.name}
              </VideoTitleWrap>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
    </MainWrapper>
  )
}

export default VideoSection

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`

const VideoWrap = styled.div`
  width: inherit;
  height: 500px;
  background-color: white;
  margin-bottom: 20px;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

const SwiperWrap = styled.div`
  height: 140px;
  width: 100%;
`

const VideoTitleWrap = styled.div`
  width: 200px;
  min-height: 70px;
  background-color: black;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  text-align: center;
`
