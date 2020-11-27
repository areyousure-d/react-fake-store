import React, { FC, useEffect } from "react";

import { useAuth } from "../../hooks";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";

import "./nullstyles.css";
import "./app.css";

const App: FC = () => {
  // auto authentication
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user) {
      auth.signin("demo@gmail.com", "demo");
    }
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
