import './App.css';
import { Sidebar } from './components/sidebar';
import { Header } from './components/header';
import { SubHeading } from './components/subheading';
import { hotelData } from './data';
import { DisplayCard } from './components/displayCard';

function App() {
  return (
    <div className="App">
       <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        <SubHeading />
        <div className="product-listing-container">
          {hotelData.map((data) => {
            return <DisplayCard data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
