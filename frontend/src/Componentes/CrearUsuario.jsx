import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../CapasEstilo/crearusuario.css'
import Header from './Header';

const CrearUsuario = () => { 
  
  // Todo: Pasar la variable contador a un estado
  let contador = 0;
  let id = useParams();

  useEffect(()=>{
    if (contador === 1) {
      traeruser();
    }
      contador++;
  }, [])

  function traeruser(e) {
    let url = document.URL;
    const ObjectURL = new URL(url);
    Disabledbtns(ObjectURL);

        if (ObjectURL.pathname.split('/')[1] === 'edit') {
              axios.get('http://localhost:3000/api/usuarios/'+id.id)
              .then(({data})=>{
                nombre.value = data.nombre;
                apellidos.value = data.apellido;
                edad.value = data.edad;
                telefono.value = data.telefono;
                correo.value = data.correo;
              }).catch(({err})=>{
                  console.log(err);
              })
        }
  }

  return (
    <div className='container_form'>
        <Header/> 
        <form action="" className='formulario' id='formula'>
            <div className='cabecera'>
              <h1>Crear Usuarios</h1>
            </div>
            <p>Nombre:</p>
                <input  type='text' id='nombre' placeholder='Ingresar el nombre del usuario'/>
            <p>Apellidos:</p>
                <input  type='text' id='apellidos' placeholder='Ingresar los apellidos'/>
            <p>Edad:</p>
                <input  type='number' id='edad' placeholder='18'/>
            <p>Teléfono</p>
                <input type='tel' id='telefono' placeholder='000-000-0000'/>
            <p>Correo:</p>
                <input type='text' id='correo' placeholder='Ingresar correo eléctronico'/>
            <div className='btns' id='btns'>
              <button className='crear_u' id='crear_u' onClick={(e)=>{e.preventDefault(); CrearUsuario()}}>Crear Usuario</button>
              <button id='actua_u' className='actua_u' onClick={(e)=>{e.preventDefault(); ActualizarUsuario()}}>Actualizar Usuario</button>
            </div>
       </form>
    </div>
  ) 
  function CrearUsuario() {
      let crear = true;
      ActualizarUsuario(crear);

  }
  function ActualizarUsuario(crear) {
    let formulario = document.getElementById('formula');
    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let edad = document.getElementById('edad');
    let telefono = document.getElementById('telefono');
    let correo = document.getElementById('correo');

    let NewUser = {
      nombre: nombre.value,
      apellido: apellidos.value,
      edad: edad.value,
      telefono: telefono.value,
      correo: correo.value
    }
   
    if (crear) {
      axios.post('http://localhost:3000/api/usuarios',NewUser)
      .then(({data})=>{
        console.log(data);
      }).catch(({err})=>{
        console.log(err);
      }) 

    } else {

      axios.put('http://localhost:3000/api/usuarios/'+id.id, NewUser)
      .then(({data})=>{
        console.log(data);
      }).catch(({err})=>{
        console.log(err);
      })
    }

    for (let index = 0; index < formulario.children.length; index++) {
      if (formulario.children[index].type !== undefined) {
        formulario.children[index].value = '';
      }
      
    }

    // let nombre = document.getElementById('nombre');
    // let apellidos = document.getElementById('apellidos');
    // let edad = document.getElementById('edad');
    // let telefono = document.getElementById('telefono');
    // let correo = document.getElementById('correo');

    // let NewUser = {
    //   nombre: nombre.value,
    //   apellido: apellidos.value,
    //   edad: edad.value,
    //   telefono: telefono.value,
    //   correo: correo.value
    // }

  }
  function Disabledbtns(path) {
    let btnAct = document.getElementById('actua_u');
    let btnCre = document.getElementById('crear_u');

      if (path.pathname.split('/')[1] !== 'edit') {
        btnAct.disabled = true;
        btnCre.disabled = false;
      }else{
        btnAct.disabled = false;
        btnCre.disabled = true;
      }
  }
}

export default CrearUsuario;