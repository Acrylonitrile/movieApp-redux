import { styled } from "styled-components"
import PersonDetails from "../Molecules/PersonDetails"
import { useParams } from "react-router-dom"
import CardRowPerson from "../Molecules/CardRowPerson"
import { useDispatch, useSelector } from "react-redux"
import type { IStore } from "../redux/store"
import { useEffect } from "react"
import type { IPersonPageData } from "../redux/PersonPage/reducers"
import { getPersonInfo } from "../redux/PersonPage/actions"

function PersonPage (): JSX.Element {
  const dispatch = useDispatch()
  const { personId } = useParams() as {
    personId: string
  }

  const state = useSelector(
    (store: IStore) => store.persons.get(personId) as IPersonPageData
  )

  useEffect(() => {
    console.log("dispatch")
    dispatch(getPersonInfo(personId))
  }, [personId])

  console.log(useSelector((store) => store))
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (state) {
    return (
      <MainWrapper>
        <PersonDetails details={state.basic} />
        <SubHeader>Stars In:</SubHeader>
        <CardRowPerson title="Movies" mediatype="movie" list={state.movie} />
        <CardRowPerson title="TV Shows" mediatype="tv" list={state.tv} />
      </MainWrapper>
    )
  } else return <></>
}

export default PersonPage

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const SubHeader = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
`
