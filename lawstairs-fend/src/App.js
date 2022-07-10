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
import Login from "./Pages/Login";
import PushPdf from "./Pages/PushPdf";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to="/judgement" />} />
        <Route exact path="/judgement" element={<Judgement />} />
        <Route exact path="/articles" element={<Articles />} />
        <Route exact path="/Elibrary" element={<Elab />} />
        <Route exact path="/lawgernal" element={<LawGernal />} />
        <Route exact path="/mcqs" element={<Mcqs />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/addData" element={<PushPdf />} />
      </Routes>
    </Router>
  );
}

export default App;
