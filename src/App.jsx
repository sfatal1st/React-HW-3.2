import Listing from './Listing';
import data from './etsy.json';
import './App.css';

const App = () => {
  const itemsData = data;
  console.log(itemsData);
  return (
    <>
      <h1>Список предложений</h1>
      <Listing items={itemsData} />
    </>
  );
};

export default App;
