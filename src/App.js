import { useState , useEffect } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';


const App = () => {
  const [searchField , setSearchField] = useState('');
  const [monster , setMonsters] = useState([]);
  const [filteredMonster , setFilterMonsters] = useState(monster);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters((users) ));

  } , []);

  useEffect(() => {
    const newFilteredMonsters = monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);

  } , [monster,searchField]);
 
  
  const onSearchChanger = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);


  };
 
  return (
    <div className="App">
        <h1 className='app-title'>Welcome</h1>

        <SearchBox 
        className='monsters-search-box' 
        onChangeHandler = {onSearchChanger} 
        placeholder='search monesters'/>

        <CardList monster={filteredMonster}/>
        </div>
  );
};


  



export default App;
