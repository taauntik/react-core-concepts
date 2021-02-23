import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./myOne.css";

function App() {
  const heros = ["Auntik", "Siam", "Anim", "Kabir", "Abir", "Fahad"];
  const products = [
    { name: "Adobe", price: 20 },
    { name: "Macbook Air", price: 200 },
    { name: "Macbook Pro", price: 3000 },
    { name: "latop", price: 2003 },
    { name: "latptop1", price: 2001 },
  ];
  const productNames = products.map((product) => product.name);
  console.log(productNames);
  const herosName = heros.map((hero) => hero);
  console.log(herosName);
  return (
    <main>
      <Header />
      <Users />
      <Counter />
      {products.map((product) => (
        <MainContent products={product} />
      ))}
    </main>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onMouseMove={handleIncrease}>Increase</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {console.log(users)}
        {users.map((user) => (
          <li>{user.phone}</li>
        ))}
      </ul>
    </div>
  );
}

function MainContent(props) {
  const { name, price } = props.products;
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>That is a greate product</p>
      <h4>${price}</h4>
      <button className="btn">Buy now</button>
    </div>
  );
}

function Header(props) {
  return (
    <header>
      <nav>
        <img src={logo} alt="" width="100" />
        <ul className="navigation">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
