import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './Reducers';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
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
            <Footer />
          </Provider>
        </>
    );
}

export default App;
