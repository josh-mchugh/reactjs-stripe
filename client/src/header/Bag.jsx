import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BagIcon from './BagIcon';

const mapStateToProps = (state) => ({
    count: state.bag.length
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

function Bag(props) {
    return (
        <Link className="header__bag" to="/bag">
          <BagIcon className="header__icon"/>
          Bag ({props.count})
        </Link>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bag);
