import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header'
import '../CapasEstilo/home.css'
import '../MediaQuery/mediaquery.css'
import { Link } from 'react-router-dom';


const Home = () => {

    const [Usuarios, setusuarios] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:3000/api/usuarios')
      .then(({data})=>{
        setusuarios(data);
      }).catch(({err})=>{
          console.log(err);
      })
    }, [])

  return (
    <div className='home'>
        <Header/>
        <section className='lista_usuarios' id='lista_usuarios'>
            {
              Usuarios.map(list => (
                <div key={list._id} className='contenedor'>
                  <div >
                    <div className='cabecera_card'>
                      <h5>Nombre: {list.nombre} </h5> 
                    </div>
                  </div>
                  <div className='info'>
                      <p><strong>Apellido:</strong> {list.apellido} </p>
                      <p><strong>Edad:</strong> {list.edad} </p>
                      <p><strong>Teléfono:</strong> {list.telefono} </p>
                      <p><strong>Correo:</strong> {list.correo} </p>
                    </div>
                  <div className='btns_cards'>
                        <button onClick={()=>{DeleteUser(list._id)}} className='eliminar' id='eliminar'>Eliminar</button>
                        <Link className='editar' to={'/edit/'+ list._id}>Editar</Link>
                    </div>
                </div>
              ))          
            }
        </section>
    </div>
  )
  function DeleteUser(id) {
    axios.delete('http://localhost:3000/api/usuarios/'+id)
    .then(({data})=>{
      console.log(data);
    }).catch(({err})=>{
      console.log(err);
    })
      location.reload();
  }

}
export default Home;