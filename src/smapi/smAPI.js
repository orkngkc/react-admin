import axios from "axios";

// API'den müşteri verilerini çekmek için fonksiyon
export const fetchCustomers = async () => {
  try {
    const response = await axios.get("http://localhost:8003/SalesManager/customers"); // Axios ile GET isteği
    return response.data; // Gelen yanıtın data kısmını döndür
  } catch (error) {
    console.error("API'den veri alınırken bir hata oluştu:", error);
    throw error; // Hatayı fırlat, böylece bileşen bunu işleyebilir
  }
};

export const fetchDiscounts = async () => {

  try{

    const response = await axios.get("http://localhost:8003/SalesManager/discounts");
    return response.data;


  }catch(error){
    console.log("API'den veri alınırken bir hata oluştu:", error);
    throw error;
  }

};


// Yeni bir indirim oluştur
export const createDiscount = async (discountData) => {
  try {
    const response = await axios.post("http://localhost:8003/SalesManager/discounts", discountData);
    return response.data;
  } catch (error) {
    console.error("Yeni indirim oluşturulurken bir hata oluştu:", error);
    throw error; // Hata durumunda üst katmana fırlat
  }
};


// Tüm ürünleri getir
export const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8003/SalesManager/products"); // GET endpoint
    return response.data; // Ürünleri döndür
  } catch (error) {
    console.error("Ürünler alınırken bir hata oluştu:", error);
    throw error;
  }
};



export const setProductPriceAPI = async (productId, newPrice) => {
  try {
    const response = await axios.patch(
      `http://localhost:8003/SalesManager/products/${productId}/set-price`,
      { price: newPrice }, // Body doğru formatta JSON olmalı
      {
        headers: {
          "Content-Type": "application/json", // Doğru header'lar
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating product price:", error.response?.data || error.message);
    throw error;
  }
};

