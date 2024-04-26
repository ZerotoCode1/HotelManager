import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config";
import Page404 from "./pages/Page404";
import AuthenticationProvider from "./providers/AuthenticationProvider";
import { Slide, ToastContainer } from "react-toastify";
import routes from "./routes/routes";
import PrivateRoute from "./components/PrivateRoute";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import "react-toastify/dist/ReactToastify.css";
import LoadingPageGlobal, { GlobalLoadingPage } from "./components/Global/Loading";
import LoadingPageService from "./services/loadingPage";
import React from "react";
import PopupService from "./services/popupPage";
import GlobalPopupConfirm, { GlobalPopupConfirmRef } from "./components/Global/Popup";

const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const App = () => {
  LoadingPageService.instance = React.useRef<GlobalLoadingPage | any>(null);
  PopupService.instance = React.useRef<GlobalPopupConfirmRef | any>(null);

  const renderContent = () => {
    return (
      <>
        <Router>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Slide}
          />
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  key={`${route.path}-layout`}
                  path={route.path}
                  element={
                    route.isPrivateRoute ? (
                      <PrivateRoute>
                        <route.layout>
                          <Outlet />
                        </route.layout>
                      </PrivateRoute>
                    ) : (
                      <route.layout>
                        <Outlet />
                      </route.layout>
                    )
                  }
                >
                  {route.routeChild.map((child, idx) => {
                    return (
                      <Route
                        key={`${child.path}-${idx}`}
                        path={child.path}
                        element={
                          <Suspense fallback={<span>Loading...</span>}>
                            <ErrorBoundary FallbackComponent={ErrorFallback}>
                              {child.isPrivateRoute ? (
                                <PrivateRoute>
                                  <child.component />
                                </PrivateRoute>
                              ) : (
                                <child.component />
                              )}
                            </ErrorBoundary>
                          </Suspense>
                        }
                      />
                    );
                  })}
                </Route>
              );
            })}

            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
        <LoadingPageGlobal ref={LoadingPageService.instance} />
        <GlobalPopupConfirm ref={PopupService.instance} />
      </>
    );
  };

  return (
    <I18nextProvider i18n={i18n}>
      <AuthenticationProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              p: {
                margin: 0,
              },
            }}
          />
          {renderContent()}
        </ThemeProvider>
      </AuthenticationProvider>
    </I18nextProvider>
  );
};

export default App;
