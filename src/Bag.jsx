import { Link } from 'react-router-dom';
import BagIcon from './BagIcon';
import './bag.css';

function Bag(props) {
    return (
        <Link className="bag" to="/cart">
          <BagIcon className="bag__icon"/>
          Bag (0)
        </Link>
    );
};

export default Bag;

