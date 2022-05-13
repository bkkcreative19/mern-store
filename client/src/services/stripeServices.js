import axios from "axios";

export const createCharge = async (totalAmount, paymentMethod, error) => {
  if (!error) {
    console.log("Stripe 23 | token generated!", paymentMethod);
    try {
      const { id } = paymentMethod;
      const response = await axios.post("http://localhost:5000/stripe/charge", {
        amount: totalAmount * 100,

        id: id,
      });

      if (response.data.success) {
      }
    } catch (error) {}
  }
};
