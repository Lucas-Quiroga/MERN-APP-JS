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

//INTERFACE PARA EL TIPO OBJETO
interface ProductData {
  name: string;
  priceUnitary: string;
  size: string;
  description: string;
  imgUrl: string;
}

//funcion para guardar el producto con la API
export async function saveProducts(productData: ProductData) {
  try {
    const formData = new FormData();
    Object.entries(productData).forEach(([key, value]) => {
      if (key === "image" && !value) {
        return;
      }
      formData.append(key, value);
    });
    const response = await axios.post(`${baseUrl}/products`, formData);
    return response;
  } catch (error) {
    console.log(error);
  }
}
