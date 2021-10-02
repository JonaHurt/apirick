import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
export const Characters = () => {
    const apiRickAndMorty = 'https://rickandmortyapi.com/api/character';
    const [data, setData] = useState(null);
    const characterApi = async () => {
        try {
            const response = await axios.get(apiRickAndMorty)
        } catch(error){

        }
    }

    useEffect(() => {
        axios.get(`${apiRickAndMorty}`).then((response) => {
            setData(response.data);
          });
    }, [])
    console.log(data?.results);
    return (
        <div className="container">
            { data?.results.map( (data) => 
            <div>
            <Link key={data.id} to={`/Perfil/${data.id}`}>
                <div  classNAme="card mx-auto" style={{width: 180}}>
                    <img src={data.image} class="card-img-top" alt="..."/>
                    <div classNAme="card-body">
                        <p classNAme="card-text">{data.name}</p>
                    </div>
                </div>
            </Link>
            </div>
            )}   
        </div>
    )
}
export default Characters