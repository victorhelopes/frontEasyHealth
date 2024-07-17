import { BrowserRouter } from "react-router-dom";
import PagesRoutes from "./routes";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles/>

      <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"/>
      
      <BrowserRouter>
        <PagesRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
