import seriesData from "../../api/seriesData.json"
import { SeriesCard } from "./SeriesCard"

export const Video13 = () => {
  return (
    <ul>
      {
        seriesData.map((curElem) => {
          return (
            <SeriesCard key={curElem.id} data={curElem} />
          )
        })
      }
    </ul>
  )
}