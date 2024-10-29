import { Route, Routes } from "react-router-dom";
import appRoutes from "./routes/AppRoutes";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, ThemeProvider } from "@mui/material";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { useAppSelector } from "./hooks/storeHooks";
import { getTheme } from "./features/themes";
import { useEffect, useState } from "react";
import { HOME_PATH } from "./data/routes";

function App() {
  const appTheme = useAppSelector((state) => state.options.appTheme);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  useEffect(() => {
    if (window.location.pathname === HOME_PATH) setIsLogged(true);
    else setIsLogged(false);
  }, []);
  return (
    <>
      <ThemeProvider theme={getTheme(appTheme)}>
        <Grid
          id={!isLogged ? "main-container" : "main-container-darker"}
          sx={{ minHeight: "100%" }}
          container
          direction="column"
          alignItems="stretch"
        >
          <Grid item>
            <Header />
          </Grid>
          <Grid
            item
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Routes>
              {appRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
