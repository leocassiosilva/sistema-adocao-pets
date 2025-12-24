import { useState, useEffect } from 'react'
import api from '../../utils/api'


function Home(){
    const [pets, setPets] = useState([])
    
      useEffect(() => {
        api.get('/pets').then((response) => {
          setPets(response.data.pets)
          console.log("Alert")
        })
      }, [])

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
        </div>
    )
} 

export default Home;