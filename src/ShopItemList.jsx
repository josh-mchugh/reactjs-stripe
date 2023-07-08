const bagels = [
    {
        name: "Plain Bagel",
        price: "1.60",
        imgUrl: "/plain.jpg"
    },
    {
        name: "Sesame Bagel",
        price: "1.60",
        imgUrl: "/sesame.jpg"
    },
    {
        name: "Cinnamon Raisin Bagel",
        price: "1.60",
        imgUrl: "/cinnamon-raisin.jpg"
    },
    {
        name: "Poppy Bagel",
        price: "1.60",
        imgUrl: "/poppy.jpg"
    }
];

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

function ShopItemList(props) {
    const onClick = () => {
        alert("clicked");
    };
    const items = bagels.map((item, index) =>
        <ShopItem key={index} {...item} onClick={onClick}/>
    );
    return (
        <article className="items">
          { items }
        </article>   
    );
}

export default ShopItemList;
