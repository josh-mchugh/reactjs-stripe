import { Outlet } from 'react-router-dom';
import Header from './header/Header';

function App() {
    return (
        <>
          <Header />
          <main className="container">
            <Outlet />
          </main>
          <footer className="footer">
            Copyright@2023
          </footer>
        </>
    );
}

export default App;
