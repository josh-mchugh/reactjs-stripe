import { Link } from 'react-router-dom';
import BagIcon from './BagIcon';

function Header() {
    return (
        <header className="container header">
          <Link className="header__brand" to="/">
            <h1>Delicious Bagels</h1>
          </Link>
          <BagIcon />
        </header>
    );
}

export default Header;
