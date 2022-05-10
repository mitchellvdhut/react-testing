import React, {useState} from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Button from "./components/button/button";
import ReactPageScroller from 'react-page-scroller';
import {asyncSearchByTerm} from "./search/search";


function App() {
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  function onInputChange(e: any) {
    setValue(e.target.value)
  }

  async function onSearch(e: any) {
    e.preventDefault()
    const results = await asyncSearchByTerm(value)
    setSearchResults(results)
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="heading">React testing</h1>
          <ReactPageScroller
            containerHeight={window.innerHeight * 0.4}
            containerWidth={window.innerWidth * 0.4}
          >
            <>
              <form className="searchInputWrapper">
                <input placeholder="Zoek op naam" value={value} onChange={onInputChange} className={"searchInput"}/>
                <button className={"searchButton"} onClick={onSearch}>
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
            </>
            <div className="searchInputWrapper">
              Testing 123
            </div>
            <Button />
          </ReactPageScroller>
        </div>
      </header>
    </div>
  );
}

export default App;
