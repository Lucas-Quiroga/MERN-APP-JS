/**
 * SEPARAMOS LA FUNCION DE OBTENER CON LA API LOS PRODUCTOS
 */

import axios from "axios";

const baseUrl = "http://localhost:8080/v1";

//funcion para consumir la API
export async function getProducts() {
  //usamos tryCatch para controlar los errores del consumo de los ENDPOINTS
  try {
    const response = await axios({
      url: `${baseUrl}/products`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
