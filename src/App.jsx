import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme";
import Home from "./component/home/Home.jsx";
import Definition from "./component/definition/Definition.jsx";
import Bookmark from "./component/bookmark/Bookmark.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:word" element={<Definition />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
