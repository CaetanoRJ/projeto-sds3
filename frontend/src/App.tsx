import DataTable from "assets/components/DataTable";
import Footer from "assets/components/Footer/Footer";
import NavBar from "assets/components/NavBar";
import React from "react";

function App() {
  return (
    <>
      <NavBar />
      <h1 className="container text-primary">Olá Mundo / React clean!</h1>
      <DataTable />
      <Footer />
    </>
  );
}

export default App;
