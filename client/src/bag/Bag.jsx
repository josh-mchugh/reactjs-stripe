import { Form, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatter } from '../CurrencyFormatter';

const mapStateToProps = (state) => ({
    bag: state.bag
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

function EmptyBag() {
    return (
        <section className="empty-bag">
          <h2 className="empty-bag__header">Bag is empty</h2>
          <p className="empty-bag__instruction">Add a product to your back to checkout.</p>
          <Link className="empty-bag__link" to="/">
            Back to shopping
          </Link>
        </section>
    );
}

function BagForm(props) {
    const items = props.bag.map(item =>
        <Item key={item.id} {...item} />
    );
    const total = props.bag.reduce((accumulator, item) =>
        accumulator + item.price,
        0
    );
    return (
        <>
          { items }
          <section className="bag__summary">
            <p className="bag__total">
              Total: { formatter.format(total) }
            </p>
            <Form className="bag__checkout"
                  method="get"
                  action="/checkout"
            >
              <button className="checkout__btn" type="submit">
                Checkout
              </button>
            </Form>
          </section>
        </>
    );
}

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
    const emptyBag = props.bag.length === 0;
    return (
        <article className="bag">
          {emptyBag ? <EmptyBag /> : <BagForm {...props}/>}  
        </article>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bag);
