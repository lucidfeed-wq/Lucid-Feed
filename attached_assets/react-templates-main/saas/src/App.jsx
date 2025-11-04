import Root from "./routes/root.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PreLoader from "./components/PreLoader.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <PreLoader />
  ) : (
    <>
      <Root />
    </>
  );
};

export default App;
