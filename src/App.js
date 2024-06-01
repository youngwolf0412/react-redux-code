import Counter from "./components/Counter.js";
import Header from "./components/Header.js";
import Auth from "./components/Auth.js";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      { !isAuth && <Auth /> }
      { isAuth && <UserProfile /> }
      <Counter />
    </>
  );
}

export default App;
