/* eslint-disable @typescript-eslint/space-before-function-paren */
import { styled } from "styled-components"
import { useParams } from "react-router-dom"
import ImageSection from "../Molecules/ImageSection"
import BasicDetails from "../Molecules/BasicDetails"
import VideoSection from "../Molecules/VideoSection"
import Recommmendations from "../Molecules/Recommendations"
import { useEffect } from "react"
import Casting from "../Molecules/Casting"
import { getDetails } from "../redux/DetailsPage/actions"
import { useDispatch, useSelector } from "react-redux"
import type { IDetails } from "../redux/DetailsPage/reducers"
import type { IStore } from "../redux/store"
import type { MediaType } from "../Interfaces"

function DetailsPage (): JSX.Element {
  const dispatch = useDispatch()
  const { mediatype, id } = useParams() as {
    mediatype: MediaType
    id: string
  }
  const state: IDetails = useSelector(
    (store: IStore) => store.details[mediatype].get(id) as IDetails
  )

  useEffect(() => {
    console.log("dispatch")
    dispatch(getDetails(mediatype, id))
  }, [id])
  console.log(useSelector((store: IStore) => store))
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (state) {
    return (
      <>
        <MainWrapper>
          <BasicDetails mediatype={mediatype} details={state.basic} />
          <DoubleColumn>
            <Col>
              <SectionTitle>Cast:</SectionTitle>
              <Casting personDetails={state.cast} />
              <ImageSection images={state.images} />
              <VideoSection videos={state.videos} />
            </Col>
            <ColSmall>
              <SectionTitle>Recommended:</SectionTitle>
              <Recommmendations
                mediatype={mediatype}
                id={id}
                key={Math.random()}
              />
            </ColSmall>
          </DoubleColumn>
        </MainWrapper>
      </>
    )
  } else return <></>
}

export default DetailsPage

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
`

const DoubleColumn = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  padding: 50px;
`
const ColSmall = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  padding: 50px 0px;
  font-size: 30px;
  text-align: center;
  max-height: 1400px;
  overflow: scroll;
  background-color: #261a1a;
`

const SectionTitle = styled.div`
  text-align: center;
  font-size: 30px;
  margin: 20px 0px;
`
