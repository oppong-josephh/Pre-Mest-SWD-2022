import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";
import items from "./items";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="card-component">
        <Card
          image={items[0].image}
          status={items[0].status}
          star={items[0].star}
          rating={items[0].rating}
          reviewCount={items[0].reviewCount}
          title={items[0].title}
          cost={items[0].cost}
          person={items[0].person}
        />
        <Card
          image={items[1].image}
          status={items[1].status}
          star={items[1].star}
          rating={items[1].rating}
          reviewCount={items[1].reviewCount}
          title={items[1].title}
          cost={items[1].cost}
          person={items[1].person}
        />
        <Card
          image={items[2].image}
          star={items[2].star}
          rating={items[2].rating}
          reviewCount={items[2].reviewCount}
          title={items[2].title}
          cost={items[2].cost}
          person={items[2].person}
        />
      </section>
    </div>
  );
}

export default App;
