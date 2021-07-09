import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
const App = (props) => {
  return (
    <div className="App-wrapper">
      <Header />
      <Nav />
      <div className="App-content">
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer
              dialogsPage={props.state.dialogsPage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/profile"
          component={() => (
            <Profile
              dispatch={props.dispatch}
              profilePage={props.state.profilePage}
            />
          )}
        />
        <Route path="/settings" component={Settings} />
        <Route path="/news" component={News} />
      </div>
    </div>
  );
};

export default App;
