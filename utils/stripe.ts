

import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51Q0vdYRZozRKGddD58H7hXRT2cEEIHHWVQaN2phqHnctMoTONkHXuVCzUyYAHqBdecM4atpASXA5t0sNlchrNo4200ElWas88G"
    );
  }
  return stripePromise;
};

export default getStripe;
