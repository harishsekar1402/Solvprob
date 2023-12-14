const Registerform = ({addName,setNewName, setnewdomain,setnewlocation, setnewnumber}) => {

    const typechangesname = (event) =>{
        console.log(event.target.value)
        setNewName(event.target.value)
      }
      const typechangesnumber = (event) =>{
        console.log(event.target.value)
        setnewnumber(event.target.value)
      }
      const typechangeslocation = (event) =>{
        console.log(event.target.value)
        setnewlocation(event.target.value)
      }
      const typechangesdomain = (event) =>{
        console.log(event.target.value)
        setnewdomain(event.target.value)
      }

      


    return (
        <div className="search-section">
        <h2>Add a number</h2>
          <form onSubmit={addName}>
            <div>
              <input className="input-box" onChange={typechangesname} placeholder="Enter the name"/><br/><br/>
              <input className="input-box" type="number" onChange={typechangesnumber} placeholder="Enter the Contact Number"/><br/><br/>
              <input className="input-box" onChange={typechangeslocation} placeholder="Enter the Location"/> <br/><br/>
              <input className="input-box" onChange={typechangesdomain} placeholder="Domain"/> <br/><br/>
            </div>
            <br/>
            <div>
              <button className="btn-reg" type="submit">Add</button>
            </div>
          </form>
        </div>
    )
}

export default Registerform;