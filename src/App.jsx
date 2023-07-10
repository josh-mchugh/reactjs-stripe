import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './Reducers';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';

const store = createStore(reducer);

function App() {
    return (
        <>
          <Provider store={store}>
            <Header />
            <main className="container">
              <Outlet />
            </main>
            <footer className="footer">
              Copyright@2023
            </footer>
          </Provider>
        </>
    );
}

export default App;
