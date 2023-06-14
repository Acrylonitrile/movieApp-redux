import { styled } from "styled-components"
import type { MediaType } from "../Interfaces"

interface Props {
  buttonState: "all" | MediaType
  setButtonState: (input: "all" | MediaType) => void
}

function MediaButtons ({ buttonState, setButtonState }: Props): JSX.Element {
  const states: Array<{ state: "all" | MediaType, text: string }> = [
    { state: "all", text: "All" },
    { state: "movie", text: "Movies" },
    { state: "tv", text: "TV Shows" }
  ]
  const changeState = (state: "all" | MediaType): void => {
    if (buttonState !== state) setButtonState(state)
  }

  return (
    <>
      <ButtonWrapper>
        {states.map((item) => (
          <Button
            state={item.state}
            givenState={buttonState}
            onClick={() => {
              changeState(item.state)
            }}
            key={Math.random()}
          >
            {item.text}
          </Button>
        ))}
      </ButtonWrapper>
    </>
  )
}

export default MediaButtons

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 300px;
  padding: 20px 0px;
  overflow: hidden;
  border: 2px solid white;
  border-radius: 50px;
  margin-bottom: 30px;
`

const Button = styled.button<{
  state: "all" | MediaType
  givenState: "all" | MediaType
}>`
  height: 40px;
  color: white;
  background-color: ${(props) =>
    props.givenState === props.state ? " #00314b" : " #141414"};
  flex-grow: 1;
  border: none;
`
