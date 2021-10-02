import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export const Perfil = () => {
    let { id } = useParams();
    const apiRickAndMorty = `https://rickandmortyapi.com/api/character/${id}`;
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
    
    return (
        <div className="container"> 
            <div>
                <div  classNAme="card mx-auto" style={{width: 180}}>
                    <img src={data?.image} class="card-img-top" alt="..."/>
                    <div classNAme="card-body">
                        <p classNAme="card-text">{data?.name}</p>
                    </div>
                </div>           
            </div>

        </div>
    )
}
