import { useLoaderData } from 'react-router-dom';

function loader() {
    return {
        items: [
            {
                id: "c8b4",
                name: "Plain Bagel",
                price: "1.60",
                imgUrl: "/plain.jpg"
            },
            {
                id: "1e6d",
                name: "Sesame Bagel",
                price: "1.60",
                imgUrl: "/sesame.jpg"
            },
            {
                id: "020f",
                name: "Cinnamon Raisin Bagel",
                price: "1.60",
                imgUrl: "/cinnamon-raisin.jpg"
            },
            {
                id: "af96",
                name: "Poppy Bagel",
                price: "1.60",
                imgUrl: "/poppy.jpg"
            }
        ],
        onClick: () => {
            alert("clicked");
        }
    };
}

function ShopItem(props) {
    return (
        <section className="item">
          <img className="item__image" src={props.imgUrl}/>
          <div className="item__details">
            <p className="item__name">{props.name}</p>
            <p className="item__price">${props.price}</p>
            <button className="item__btn" onClick={props.onClick}>
              Add to bag
            </button>
          </div>
        </section>
    );
}

function ShopItemList() {
    const { items, onClick } = useLoaderData();
    const shopItems = items.map((item) =>
        <ShopItem key={item.id} {...item} onClick={onClick}/>
    );
    return (
        <article className="items">
          { shopItems }
        </article>   
    );
}

export { ShopItemList as default, loader };
