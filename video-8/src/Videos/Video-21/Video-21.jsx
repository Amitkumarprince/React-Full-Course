import seriesData from "../../api/seriesData.json"

// import "./Netflix.css"
import "./Netflix.module.css"
import {SeriesCard21 } from "./SeriesCard21"

export const Pass21 = () => {
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
            <SeriesCard21 key={curElem.id} data={curElem} />
          )
        })
      }
    </ul>
  )
}