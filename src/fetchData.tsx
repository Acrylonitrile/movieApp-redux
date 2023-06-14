/* eslint-disable @typescript-eslint/space-before-function-paren */
import { options } from "./Constants"

async function FetchData(url: string): Promise<any> {
  const data = await (await fetch(url, options)).json()
  return data
}

export default FetchData
