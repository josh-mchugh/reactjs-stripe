import BagIcon from './BagIcon';
import './bag.css';

function Bag(props) {
    return (
        <a className="bag" onClick={props.onClick}>
          <BagIcon className="bag__icon"/>
          Cart (0)
        </a>
    );
};

export default Bag;

