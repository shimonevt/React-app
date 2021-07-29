import "./App.css";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
const App = (props) => {
  return (
    <div className="App-wrapper">
      <HeaderContainer />
      <Nav />
      <div className="App-content">
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer/>
          )}
        />
        <Route
          path="/profile/:userId?"
          render={() => (<ProfileContainer/>)}
        />
        <Route
          path="/users"
          render={() => (<UsersContainer/>)}
        />
        <Route path="/settings" component={Settings} />
        <Route path="/news" component={News} />
      </div>
    </div>
  );
};

export default App;
