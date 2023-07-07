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
          <header className="container header">
            <h1>Delicous Bagels</h1>
            <section className="header__bag">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="bag__icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Cart (0)
            </section
>
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
                          <button className="item__btn">Add to bag</button>
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
