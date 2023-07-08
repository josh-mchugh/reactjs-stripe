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
    const items = props.items.map((item, index) =>
        <ShopItem key={index} {...item} onClick={props.onClick}/>
    );
    return (
        <article className="items">
          { items }
        </article>   
    );
}

export default ShopItemList;
