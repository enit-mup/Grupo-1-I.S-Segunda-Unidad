import React from 'react'
import { Link } from 'react-router-dom'
import * as ImIcons from "react-icons/im"
import '../styles/LoginTutorados.css'
import { useState } from 'react'
import axios from "axios";

const LoginTutorados = () => {
    const [loginUsername,setLoginUsername]=useState("");
    const [loginPassword,setLoginPassword]=useState("");
    const login=()=>{
        axios.post('http://localhost:4000/links/add',{
                username:loginUsername,
                password:loginPassword,
            }).then((res)=>console.log(res));
    };
    return (
        <div className="fondoLog1 ">
            <div className="regresar">
                    <Link to="/LogMenu" style={{ textDecoration: 'none' }}>
                        <ImIcons.ImCross className="icono"/>
                    </Link>
                </div>
            <br />
            <div className="Principal">  
                <div className="containerLogin">
                    <h2 className="title">Tutorado</h2>
                    <img className="lo"src="../imagenes/Tutorado.JPG" alt=""/>
                    <div className="form-group">
                        <label><b>Ingrese Usuario:</b> </label>
                        <br />
                        <input
                        type="text"
                        className="form-control"
                        name="username"         
                        placeholder="Usuario"
                        onChange={(e)=>setLoginUsername(e.target.value)}
                        />
                        <br />
                        <label> <b>Ingrese Contraseña:</b>  </label>
                        <br />
                        <input
                        type="password"
                        className="form-control"
                        name="password"          
                        placeholder="*********"
                        onChange={(e)=>setLoginPassword(e.target.value)}
                        />
                        <br />
                        <Link to="/Tutorado_Menu" style={{ textDecoration: 'none' }}>
                            <button className="ingresar" onClick={login}>Iniciar Sesión</button>
                        </Link>
                    </div>
                </div>
            </div>
           
        </div>
    )
    }

export default LoginTutorados
