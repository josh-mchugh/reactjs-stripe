import { connect } from 'react-redux';
import { addToBag } from '../Actions';
import { useLoaderData } from 'react-router-dom';
import { formatter } from '../CurrencyFormatter';

function loader() {
    return {
        items: [
            {
                id: "c8b4",
                name: "Plain Bagel",
                price: 1.60,
                imgUrl: "/plain.jpg"
            },
            {
                id: "1e6d",
                name: "Sesame Bagel",
                price: 1.60,
                imgUrl: "/sesame.jpg"
            },
            {
                id: "020f",
                name: "Cinnamon Raisin Bagel",
                price: 1.60,
                imgUrl: "/cinnamon-raisin.jpg"
            },
            {
                id: "af96",
                name: "Poppy Bagel",
                price: 1.60,
                imgUrl: "/poppy.jpg"
            }
        ]
    };
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    onClick: (item) => ( dispatch(addToBag(item)) ),
    dispatch: dispatch
});

function Product(props) {
    return (
        <section className="item">
          <img className="item__image" src={props.imgUrl}/>
          <div className="item__details">
            <p className="item__name">{props.name}</p>
            <p className="item__price">{formatter.format(props.price)}</p>
            <button className="item__btn" onClick={props.onClick}>
              Add to bag
            </button>
          </div>
        </section>
    );
}

function Products(props) {
    const { items } = useLoaderData();
    const products = items.map((item) =>
        <Product key={item.id} {...item} onClick={() => props.onClick(item)}/>
    );
    return (
        <article className="items">
          { products }
        </article>
    );
}

const connectedProducts = connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);

export {
    connectedProducts as default,
    loader
};
