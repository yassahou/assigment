import { useState } from "react"

const PersonCard = () => {
   const [persons, setPersons] = useState([{
    firstName: 'John',
    lastName: 'Doe',
    age: 45,
    hairColor: 'Black'
  },
    {
      firstName: 'Smith',
      lastName: 'John',
      age: 88,
      hairColor: 'Browm'
    }
   ])
    const increeAge = (index) => {
        setPersons(prevPerson => {
            const newPerson = [...prevPerson]
            newPerson[index] = { ...newPerson[index], age: newPerson[index].age++ }
            return newPerson
        })
    }


    return (
        < div className="d-grid">
            {persons.map((person, index) => {
                return (
                    <div key={index} className="m-auto text-justify">
                        <h1 className="lead fs-1 fw-bold mt-3">{`${person.firstName}, ${person.lastName}`}</h1>
                        <p className="lead fs-5">Age: {person.age}</p>
                        <p className="lead fs-5">Hair Color: {person.hairColor}</p>
                        <button
                            onClick={()=> {increeAge(index)}}
                            className="btn btn-success p-2 mt-2"
                        >
                            {`Birthday Button For ${person.firstName}, ${person.lastName}`}
                        </button>
                    </div>
                    )
               })}
        </div >
    )
}

export default PersonCard;