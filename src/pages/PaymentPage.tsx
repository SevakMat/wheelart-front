import MainContainer from "../hok/mainContainer/MainContainer";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from "../components/payment/payment";
import { CreatePaymet } from "../services/auth.service";


const PaymentPage = (): JSX.Element => {

  const makePayment = async () => {
    const stripe = await loadStripe('pk_test_51Oxq6W09PFox5FiCn3guz55Prn9hfG3CEeiB7HoHsEhZBe6aRCFQIXPe1Ey79pm7cqlbeEZ0rgVRLEAHSdnxv4x000jNt9BKVI')
    const responce = await CreatePaymet()
    const session = responce?.data
      console.log(session.id);
      
    const result = await stripe?.redirectToCheckout({
      sessionId: session?.id
    })

    if (result?.error) {
      console.log(result.error);

    }
  }


  return (
    <MainContainer>
        <div>
          <h1>Payment Form</h1>
          <button onClick={() => {
            makePayment()
          }}>
            payment
          </button>
          {/* <PaymentForm /> */}
        </div>
    </MainContainer>
  );
};
export default PaymentPage;
