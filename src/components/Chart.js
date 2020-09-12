import React from "react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils/src";

const brandInfo = getStyle("info") || "#20a8d8";

const MainChart = ({ configs, data, ...props }) => {
  const dates = data.map((item) => item[0]);
  const numbers = data.map((item) => item[1]);
  const defaultDatasets = [
    {
      label: "My First dataset",
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: brandInfo,
      borderWidth: 2,
      data: numbers,
    },
  ];

  return (
    <CChartLine
      datasets={defaultDatasets}
      options={configs}
      labels={dates}
      {...props}
    />
  );
};

export default MainChart;
