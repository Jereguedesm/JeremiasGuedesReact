import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./ErrorPage.css"

const ErrorPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Error. Page not found</h1>
        <p>
            La página que ha seleccionado no existe o no se ha encontrado, será retornado a la página de inicio en tres segundos.
        </p>
    </div>
  )
}

export default ErrorPage