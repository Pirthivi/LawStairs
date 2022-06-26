import styled from "styled-components";
import Judgement from "./Pages/Judgement";
import Header from "./Componets/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Articles from "./Pages/Articles";
import LawGernal from "./Pages/LawGernal";
import Elab from "./Pages/Elab";
import Mcqs from "./Pages/Mcqs";
import Books from "./Pages/Books";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/judgement" />} />
        <Route path="/judgement" element={<Judgement />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/Elibrary" element={<Elab />} />
        <Route path="/lawgernal" element={<LawGernal />} />
        <Route path="/mcqs" element={<Mcqs />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}

const Container = styled.div``;
const Content = styled.div``;
export default App;
