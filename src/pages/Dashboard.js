import React from "react";
import { useSelector } from "react-redux";
import {
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow,
} from "@coreui/react";
import DatePicker from "../components/DatePicker";
import Chart from "../components/Chart";

const Dashboard = () => {
  const { statistics, error } = useSelector((state) => {
    return state;
  });

  return (
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            {error.msg && <p style={{ color: "red" }}>* {error.msg}</p>}
            <h4 id="traffic" className="card-title mb-0">
              Traffic
            </h4>
            <div className="small text-muted">November 2017</div>
          </CCol>
          <CCol sm="7" className="d-none d-md-block">
            <CButtonGroup className="float-right mr-3">
              <DatePicker data={statistics} />
            </CButtonGroup>
          </CCol>
        </CRow>
        <Chart
          config={statistics.chartConfig ? statistics.chartConfig : []}
          data={statistics.data ? statistics.data : []}
          style={{ height: "300px", marginTop: "40px" }}
        />
      </CCardBody>
      <CCardFooter>
        <CRow className="text-center">
          <CCol md sm="12" className="mb-sm-2 mb-0">
            <div className="text-muted">Well</div>
            <strong>1500</strong>
            <CProgress
              className="progress-xs mt-2"
              precision={1}
              color="info"
              value={90}
            />
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
  );
};

export default Dashboard;
