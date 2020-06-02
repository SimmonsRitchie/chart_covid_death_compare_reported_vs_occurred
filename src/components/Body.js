import React from "react";
import ChartDaily from "./ChartDaily/ChartDaily";
import {COLORS} from "../utils/constants"
import convertDatesToUnix from "../utils/convertDatesToUnix"
import CustomLegend from "../components/ChartDaily/Legend"
import {
  ComposedChart,
  Legend
} from 'recharts';

class Body extends React.Component {
  render() {
    const { data } = this.props
    const { reported, occurred } = data
    const reportedClean = convertDatesToUnix(reported);
    const occurredClean = convertDatesToUnix(occurred);
    const deathsDailyLegend = <CustomLegend label1="Daily deaths" label2="7 day avg." />;
    return (
      <div className="body__container">
      <ChartDaily 
        title="Deaths by day reported"
        chartType="deaths"
        data={reportedClean}
        dataKey={"newDeaths"}
        customLegend={deathsDailyLegend}
        colorFill={COLORS.deaths[1]}
        colorStroke={COLORS.deaths[0]}
      />
      <ChartDaily 
        title="Deaths by day they occurred"
        chartType="deaths"
        data={occurredClean}
        dataKey={"newDeaths"}
        customLegend={deathsDailyLegend}
        colorFill={COLORS.cases[1]}
        colorStroke={COLORS.cases[0]}
      />
      </div>
    );
  }
}

export default Body;
