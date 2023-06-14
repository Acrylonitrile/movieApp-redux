export const GET_PERSON = 'GET_PERSON'

export interface ISagaActionPerson {
  type: string
  id: string
}

export const getPersonInfo = (id: string): ISagaActionPerson => (
  {
    type: GET_PERSON,
    id
  }
)
