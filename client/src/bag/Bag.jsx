import { Form } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatter } from '../CurrencyFormatter';

const mapStateToProps = (state) => ({
    bag: state.bag
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

function Item(props) {
    return (
        <section className="bag__item">
          <img src={props.imgUrl}/>
          <p className="name">{props.name}</p>
          <p className="price">{formatter.format(props.price)}</p>
        </section>
    );
}

function Bag(props) {
    const items = props.bag.map(item =>
        <Item key={item.id} {...item} />
    );
    const total = props.bag.reduce((accumulator, item) =>
        accumulator + item.price,
        0
    );
    return (
        <article className="bag">
          { items }
          <section className="bag__summary">
            <p className="bag__total">Total: { formatter.format(total) }</p>
            <Form className="bag__checkout" method="get" action="/checkout">
              <button className="checkout__btn" type="submit">Checkout</button>
            </Form>
          </section>
        </article>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bag);
