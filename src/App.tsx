import { Route, Routes } from "react-router";
import { PathE } from "./enum/pathE";
import "./App.css";
import { MainLayout } from "./components/mainLayout";
import { CatalogPage } from "./pages/CatalogPage";
import { ProductPage } from "./pages/ProductPage";
import { NotFound404 } from "./pages/404page";

function App() {
  return (
    <div>
      <Routes>
        <Route path={PathE.HOME} element={<MainLayout />}>
          <Route index element={<CatalogPage />} />
          <Route path={PathE.DETAILS} element={<ProductPage />} />
        </Route>
        <Route path={"*"} element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
