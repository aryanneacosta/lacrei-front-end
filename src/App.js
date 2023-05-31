import GlobalStyle from "./assets/globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Professional from "./components/Professional";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pessoa-usuaria" element={<User />} />
          <Route path="/profissional" element={<Professional />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
