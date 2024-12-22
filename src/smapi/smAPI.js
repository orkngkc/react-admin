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

export const fetchOrders = async () => {
  const response = await axios.get(`http://localhost:8003/SalesManager/orders`);
  return response.data;
};

export const fetchOrderItems = async () => {
  const response = await axios.get(`http://localhost:8003/SalesManager/orderItems`);
  return response.data;
};

export const fetchRefunds = async () => {
  try {
    const response = await axios.get("http://localhost:8003/SalesManager/refunds");
    return response.data; // Backend'den gelen veriler
  } catch (error) {
    console.error("Refunds could not be fetched:", error);
    throw error;
  }
};

// 2. Refund statüsünü güncelle (Approve veya Disapprove)
export const updateRefundStatus = async (refundId, status) => {
  try {
    const response = await axios.put(`http://localhost:8003/SalesManager/refunds/${refundId}/${status}`, { status });
    return response.data; // Güncellenmiş refund kaydı
  } catch (error) {
    console.error("Refund status could not be updated:", error);
    throw error;
  }
};


export const fetchRefundsWithProductNames = async () => {
  try {
    // Refunds, Order Items ve Products verilerini paralel olarak çek
    const [refundsData, orderItemsData, productsData] = await Promise.all([
      fetchRefunds(),
      fetchOrderItems(),
      fetchProducts(),
    ]);
    console.log("Refunds Data:", refundsData);
    console.log("Order Items Data:", orderItemsData);
    console.log("Products Data:", productsData);


    // Refund verilerini işleyip formatlıyoruz
    const refundsWithProductNames = refundsData.map((refund) => {
      // Refund'un order_item_id'sini sakla
      const orderItemId = refund.order_item_id;
      console.log(orderItemId);

      // order_items tablosunda order_item_id'yi bul ve product_id'yi al
      const orderItem = orderItemsData.find((item) => item.order_item_id === orderItemId);
      const productId = orderItem?.product_id; // product_id bulunamazsa undefined olur
      console.log(productId);

      // products tablosunda product_id'yi bul ve product_name'i al
      const product = productsData.find((product) => product.product_id === productId);
      const productName = product?.name || "Unknown Product"; // Ürün bulunamazsa varsayılan isim
      console.log(productName);

      // Sonuçları geri döndürmek için refund objesini genişlet ve product_name ekle
      return {
        ...refund, // Refund'un mevcut tüm verilerini koru
        product_name: productName, // Elde edilen ürün ismini ekle
      };
    });

    return refundsWithProductNames; // İşlenmiş refund listesi
  } catch (error) {
    console.error("Refunds with Product Names could not be fetched:", error);
    throw error; // Hata durumunda fırlat
  }
};