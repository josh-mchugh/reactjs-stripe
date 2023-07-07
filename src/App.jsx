import Bag from './Bag';
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
    const onClick = () => {
        alert("Clicked");
    };
    return (
        <>
          <header className="container header">
            <h1>Delicous Bagels</h1>
            <Bag onClick={onClick}/>
          </header>
          <main className="container">
            <article className="items">
              {
                  bagels.map((bagel, index) => (
                      <section key={index} className="item">
                        <img className="item__image" src={bagel.imgUrl}/>
                        <div className="item__details">
                          <p className="item__name">{bagel.name}</p>
                          <p className="item__price">${bagel.price}</p>
                          <button className="item__btn" onClick={onClick}>Add to bag</button>
                        </div>
                      </section>
                  ))
              }
            </article>
          </main>
          <footer className="footer">
            Copyright@2023
          </footer>
        </>
    );
}

export default App;
