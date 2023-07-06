import './index.css';

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

function App() {
    return (
        <>
          <main className="container">
            <h1>Delicous Bagels</h1>
            <article className="items">
              {
                  bagels.map((bagel, index) => (
                      <section key={index} className="item">
                        <img className="item__image" src={bagel.imgUrl}/>
                        <div className="item__details">
                          <p className="item__name">{bagel.name}</p>
                          <p className="item__price">${bagel.price}</p>
                          <button className="item__btn">Add to bag</button>
                        </div>
                      </section>
                  ))
              }
            </article>
          </main>
        </>
    );
}

export default App;
