import seriesData from "../../api/seriesData.json"
import { SeriesCard } from "./SeriesCard"

export const NetflixSeries13 = () => {
  return (
    <ul>
      {
        seriesData.map((curElem) => {
          return (
            <SeriesCard  data={curElem} />
          )
        })
      }
    </ul>
  )
}