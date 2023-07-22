import {  } from "./ApiRequest/PostApiRequest";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ByCategoryPage from "./pages/ByCategoryPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

function App() {
  return (

      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/byCategory/:id" element={<ByCategoryPage/>}/>
              <Route path="/details/:id" element={<DetailsPage/>}/>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
