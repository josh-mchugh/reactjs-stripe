import Bag from './Bag';
import ShopItemList from './ShopItemList';
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
            <ShopItemList items={bagels} onClick={onClick}/>
          </main>
          <footer className="footer">
            Copyright@2023
          </footer>
        </>
    );
}

export default App;
