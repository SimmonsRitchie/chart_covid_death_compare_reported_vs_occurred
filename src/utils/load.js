import { csv } from "d3-fetch";
import dayjs from 'dayjs';
import DEATHS from "~/data/deaths__pa-nj__new-daily.csv";
import movingAvg from "./calcAvg";

export const loadData = () => {
  /* Fetch and parse files.*/
  return Promise.all([
    csv(DEATHS),
  ]).then(([deaths]) => {
    const data = {}
    // PA
    let cleanPa = deaths.map((item) => {
      const {date, pa} = item
      const cleanDate = dayjs(date, 'YYYY-MM-DD')
      const newDeaths = +pa >= 0 ? +pa : 0
      return {
        date: cleanDate,
        newDeaths
      }
    })
    // add moving avg
    const paAvg = movingAvg(cleanPa, 7, 'newDeaths')
    cleanPa = cleanPa.map((item, idx) => {
      return {
        ...item,
        avg: paAvg[idx]
      }
    })
    // NJ
    let cleanNj = deaths.map((item) => {
      const {date, nj} = item
      const cleanDate = dayjs(date, 'YYYY-MM-DD')
      const newDeaths = +nj >= 0 ? +nj : 0
      return {
        date: cleanDate,
        newDeaths
      }
    })
    // add moving avg
    const njAvg = movingAvg(cleanNj, 7, 'newDeaths')
    cleanNj = cleanNj.map((item, idx) => {
      return {
        ...item,
        avg: njAvg[idx]
      }
    })
    data['pa'] = cleanPa
    data['nj'] = cleanNj
    return data
  })
};
