import './App.css';
import Expences from './components/Expences';

function App() {
  const expences = [
    // {
    //   id : "1",
    //   title : "book",
    //   amount : 500,
    //   date : new Date(2022, 4 ,21)
    // },
    // {
    //   id : "2",
    //   title : "shirt",
    //   amount : 700,
    //   date : new Date(2022, 5 ,21)
    // },
    // {
    //   id : "3",
    //   title : "cycle",
    //   amount : 2500,
    //   date : new Date(2021, 3 ,21)
    // },
    // {
    //   id : "4",
    //   title : "umbrela",
    //   amount : 100,
    //   date : new Date(2021, 1 ,21)
    // }
  ]
  return (
    <div className="App">
      <Expences/>
    </div>
  );
}

export default App;
