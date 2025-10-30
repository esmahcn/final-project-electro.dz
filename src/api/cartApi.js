const API_URL = "http://localhost:5000/api/cart";

// ✅ Add item to cart
export const addToCart = async (userId, product) => {
  try {
    const res = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, product }),
    });
    return await res.json();
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

// ✅ Get user cart
export const getCart = async (userId) => {
  try {
    const res = await fetch(`${API_URL}/${userId}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};

// ✅ Remove item from cart
export const removeFromCart = async (userId, productId) => {
  try {
    const res = await fetch(`${API_URL}/remove`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, productId }),
    });
    return await res.json();
  } catch (error) {
    console.error("Error removing from cart:", error);
  }
};
