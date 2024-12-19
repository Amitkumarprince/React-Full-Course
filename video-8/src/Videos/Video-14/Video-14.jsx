import seriesData from "../../api/seriesData.json"
import { SeriesCard14 } from "./SeriesCard14"

export const Video14 = () => {
  return (
    <ul>
      {
        seriesData.map((curElem) => {
          return (
            <SeriesCard14 key={curElem.id} data={curElem} />
          )
        })
      }
    </ul>
  )
}