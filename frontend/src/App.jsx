import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./Reset.css";
import AuthPage from "./Pages/Auth/AuthPage";
import Tour from "./Pages/Tour/Tour";
import Show from "./Pages/Show/Show";
import Shows from "./Pages/HomeShows/Shows";
import Carrinho from "./Pages/Carrinho/Carrinho";
import React, { useContext } from "react";
import CarrinhoPagamento from "./Pages/CarrinhoPagamento/CarrinhoPagamento";
import MeusIngressos from "./Pages/MeusIngressos/MeusIngressos";
import Perfil from "./Pages/Perfil/Perfil";
import Loader from "./components/utils/Loader";
import { LoadContext } from "./context/LoadContext";

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
`;

function App() {
  const loader = useContext(LoadContext);

  return (
    <AppDiv>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route
            path="/auth/signup"
            element={<AuthPage typeAuth={"signup"} />}
          />
          <Route path="/auth/login" element={<AuthPage typeAuth={"login"} />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/tours/:nome" element={<Tour />} />

          <Route path="/tours/:nome/:cidade" element={<Show />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/carrinho/pagamento" element={<CarrinhoPagamento />} />
          <Route path="/meusingressos" element={<MeusIngressos />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
      {loader.isLoading && <Loader />}
    </AppDiv>
  );
}

export default App;
