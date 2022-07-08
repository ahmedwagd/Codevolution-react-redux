import { Provider } from 'react-redux';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import SweetContainer from './components/SweetContainer';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import PostContainer from './components/PostContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer iceCream />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <br />
        <br />
        <div>
          <SweetContainer />
        </div>
        <PostContainer />
      </div>
    </Provider>
  );
}

export default App;
