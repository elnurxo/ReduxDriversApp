import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Drivers from "./pages/drivers/Drivers";
import ErrorPage from "./pages/error";
import Favorites from "./pages/favorites/Favorites";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
