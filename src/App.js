import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FormPage from "./pages/FormPage";
import RecordsPage from "./pages/RecordsPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/records" element={<RecordsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
