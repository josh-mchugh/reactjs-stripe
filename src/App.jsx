import { Outlet } from 'react-router-dom';
import Bag from './Bag';
import './index.css';

function App() {
    return (
        <>
          <header className="container header">
            <h1>Delicous Bagels</h1>
            <Bag />
          </header>
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
