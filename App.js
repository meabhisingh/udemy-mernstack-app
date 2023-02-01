import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

const stripeKey =
  "pk_test_51LyelkSAVdOdLf5gfOn61Erm7ZujAA4BsYpEzsaA2HKX8zLdQx32yLxX3ztd5bumqZuMT0WiWwZA7CJIeVtmgAal00yq5buYGi";

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="6-pack-ecom.com"
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
}
