const Workers = ({persons}) => {

    return (
        <div className="search-section">
        <h2>Registered Workers</h2>
          <div>
           {persons.map(array => 
           (<div>
            <p className="list-con">{array.name} : {array.domain} :  {array.location}</p>
            </div>)
          )}
          </div>
        </div>
    )
}

export default Workers;