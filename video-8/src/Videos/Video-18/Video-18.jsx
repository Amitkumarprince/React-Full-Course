import seriesData from "../../api/seriesData.json"
import { SeriesCard18 } from "./SeriesCard18"

import "./Netflix.css"

export const Pass18 = () => {
  return (
    <>
      <section className="container">
        <h1 className="card-heading">List of Best Netflix Series</h1>
        <NetflixSeries />
      </section>
    </>
  )
}

export const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {
        seriesData.map((curElem) => {
          return (
            <SeriesCard18 key={curElem.id} data={curElem} />
          )
        })
      }
    </ul>
  )
}