import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer/Footer";
import NavBar from "components/NavBar";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Dahborad de Venda</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">
              Taxa de sucesso vendass
            </h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5>Todas vendass</h5>
            <DonutChart />
          </div>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
