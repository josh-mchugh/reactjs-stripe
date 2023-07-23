# ReactJS Stripe
This project's focus was to experiment with [Stripe's](Stripe's) payment processing functionality. This application represents a minimalistic e-commerce store that sells delicious bagels. Bagels can be added to the 'bag' and then purchased with Stripe's payment flow. Once the user has purchased their bagels, they will be notified via a successful payment page.


The client portion of the application is written in JavaScript with the React framework. The server implementation is written in Java and the Quarkus framework.


The client and server leverage the [Stripe SDK for React and Java](https://stripe.com/docs/development). The Stripe React SDK incorporates the [Elements component](https://stripe.com/payments/elements), which provide the checkout form and all the validation required to handle credit cards. The Stripe Java SDK ensures the transaction generates a secret key and the prices align with the prices from a secure source, such as the server, instead of the browser client. These two libraries work together to create a client secret associated with the transaction, which Stripe processes on their servers to minimize your e-commerce PCI compliance.



## Demonstration
![Example of checkingout with ReactJS and Stripe API](./documentation/example.gif)


## Run the client pplication
Witin the client directory, run
```shell
npm run dev
```
Witin a web browser navigate to `localhost:5173`


## Run the server application
Within the server directory, run
```shell
mvnw quarkus:dev -Dstripe.api.key=<stripe-secret-key> -Dquarkus.rest-client.stripe-api.url=https://api.stripe.com/
```
Replace `<stripe-secret-key>` with your personal secret key provided from Stripe
