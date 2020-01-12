/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_pdnXOCLV9JN2fQVgNEAr88OL00jijFCmnJ');

export const bookTour = async tourId => {
  try {
    // 1) Get check out session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-sessions/${tourId}`
    );
    console.log(session);
    // 2) Create check out form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
