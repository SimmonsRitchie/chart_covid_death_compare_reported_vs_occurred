import { csv } from "d3-fetch";
import dayjs from 'dayjs';
import DEATHS from "~/data/data.csv";
import movingAvg from "./movingAvg";

export const loadData = () => {
  /* Fetch and parse files.*/
  return Promise.all([
    csv(DEATHS),
  ]).then(([deaths]) => {
    const data = {}
    // Reported deaths
    let cleanReported = deaths.map((item) => {
      const {date, reported} = item
      const cleanDate = dayjs(date, 'YYYY-MM-DD')
      const newDeaths = +reported >= 0 ? +reported : 0
      return {
        date: cleanDate,
        newDeaths
      }
    })
    // add moving avg
    const reportedAvg = movingAvg(cleanReported, 7, 'newDeaths')
    cleanReported = cleanReported.map((item, idx) => {
      return {
        ...item,
        avg: reportedAvg[idx]
      }
    })
    // Occurred deaths
    let cleanOccurred = deaths.map((item) => {
      const {date, occurred} = item
      const cleanDate = dayjs(date, 'YYYY-MM-DD')
      const newDeaths = +occurred >= 0 ? +occurred : 0
      return {
        date: cleanDate,
        newDeaths
      }
    })
    // add moving avg
    const occurredAvg = movingAvg(cleanOccurred, 7, 'newDeaths')
    cleanOccurred = cleanOccurred.map((item, idx) => {
      return {
        ...item,
        avg: occurredAvg[idx]
      }
    })
    data['reported'] = cleanReported
    data['occurred'] = cleanOccurred
    return data
  })
};
