import React, { Suspense, lazy } from "react";
import { ThemeProvider, CssBaseline, Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme";

// Lazy loading components
const Home = lazy(() => import("./component/home/Home.jsx"));
const Definition = lazy(() => import("./component/definition/Definition.jsx"));
const Bookmark = lazy(() => import("./component/bookmark/Bookmark.jsx"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            p: 2,
          }}
        >
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:word" element={<Definition />} />
                <Route path="/bookmark" element={<Bookmark />} />
              </Routes>
            </Suspense>
          </Router>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
