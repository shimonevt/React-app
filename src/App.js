import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
const App = (props) => {
  return (
    <div className="App-wrapper">
      <Header />
      <Nav />
      <div className="App-content">
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              messagesPage={props.state.messagesPage}
              addMessage={props.addMessage}
              updateNewMessageText={props.updateNewMessageText}
            />
          )}
        />
        <Route
          path="/profile"
          component={() => (
            <Profile
              addPost={props.addPost}
              profilePage={props.state.profilePage}
              updateNewPostText={props.updateNewPostText}
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
