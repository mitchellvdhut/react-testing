import React, {useState} from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {searchByTerm} from "./search/search";

function App() {
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  function onInputChange(e: any) {
    setValue(e.target.value)
  }

  async function onSearch(e: any) {
    e.preventDefault()
    const results = searchByTerm(value)
    setSearchResults(results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="heading">React testing</h1>
            <div style={{width: '40vw'}}>
              <form className="searchInputWrapper">
                <input
                  placeholder="Zoek op naam"
                  value={value}
                  onChange={onInputChange}
                  className={"searchInput"}
                  id={"searchInput"}
                  data-testid={"searchInput"}
                  autoFocus
                />
                <button
                  className={"searchButton"}
                  disabled={!value}
                  onClick={onSearch}
                  data-testid="searchButton"
                >
                  <FontAwesomeIcon icon={faSearch}/>
                </button>
              </form>

              <table className={"searchResults"}>
                {searchResults.length > 0 &&
                  <tr>
                    <th>Id:</th>
                    <th>Naam:</th>
                  </tr>
                }
                {
                  searchResults.map((item:any) => (
                    <tr key={item.id}>
                      {Object.values(item).map((val:any) => (
                        <td>{val}</td>
                      ))}
                    </tr>
                  ))
                }
              </table>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
