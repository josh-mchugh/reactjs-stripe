import { Link } from 'react-router-dom';
import Bag from './Bag';

function Header() {
    return (
        <header className="container header">
          <Link className="header__brand" to="/">
            <h1>Delicious Bagels</h1>
          </Link>
          <Bag />
        </header>
    );
}

export default Header;
