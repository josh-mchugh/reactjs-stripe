import BagIcon from './BagIcon';
import './bag.css';

function Bag(props) {
    return (
        <section className="bag">
          <BagIcon className="bag__icon"/>
          Cart (0)
        </section>
    );
};

export default Bag;

