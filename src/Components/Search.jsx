const Search = ({persons, location, setlocation, checkdom,setcheckdom}) => {

      const domaincheck = (event) =>{
        setcheckdom(event.target.value)
      }
      const handleSelectChange = (event) =>{
        setlocation(event.target.value)
      }

    const dropdownvals = Array.from(new Set(persons.map(array => array.location)));
    const filteredData = persons.filter(item => (
    (location === '' || item.location.toLowerCase().includes(location.toLowerCase())) &&
    (checkdom === '' || item.domain.toLowerCase().includes(checkdom.toLowerCase()))
  ));
    return (
        <div className="home">
        <div className="display">
        <h1 className="home-title">Welcome to Solvprob<br/> An Online Home Service Companion !!!</h1>

        <div className="home-grid">
            <div className="home-grid-content">
            
            <div className="home-grid-img">
            <img src="https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg" alt="plumber" />
            <p>Electrician</p>
            </div>

            <div className="home-grid-img">
            <img src="https://bathsense.asianpaints.com/content/dam/ap-bathsense-revamp/findaplumber/plumberd.png" alt="plumber" />
            <p>Plumber</p>
            </div>

            <div className="home-grid-img">
            <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvb2tpbmd8ZW58MHx8MHx8fDA%3D" alt="plumber" />
            <p>Cook</p>
            </div>

            <div className="home-grid-img">
            <img src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/483717698ConstructionLaborer.jpg=ws1280x960" alt="plumber" />
            <p>Carpenter</p>
            </div>

            <div className="home-grid-img">
            <img src="https://cananywhere.com/wp-content/uploads/2017/06/office-shifting.jpg" alt="plumber" />
            <p>House Shifting</p>
            </div>

            <div className="home-grid-img">
            <img src="https://isetnepal.org.np/wp-content/uploads/2020/03/IMG_6653.jpg" alt="" />
            <p>Masons</p>
            </div>

            </div>
        </div>
        </div>
        
        <div className="search-section">
        <h2 >Search a skilled professional</h2>
            <div className="search-area">
          Search : <select value={location} onChange={handleSelectChange}>
            <option value="none">Location</option>
            {dropdownvals.map((item,index) => (
              <option key={index} value={item}>{item}</option>
            ))}
            {/* <option value="madurai">Madurai</option>
            <option value="chennai">Chennai</option>
            <option value="pollachi">Pollachi</option> */}
          </select>
          <input type="text" onChange={domaincheck}/>
          </div>
          <ul>
            
            {filteredData.map((array,index) => (
                <li className="list-con" key={index}>{array.name} : {array.domain} : {array.number}</li>
                ))}
          </ul>
        </div>
        </div>
    )
}

export default Search;