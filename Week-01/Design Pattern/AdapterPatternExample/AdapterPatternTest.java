public class AdapterPatternTest {
    public static void main(String[] args) {
        PaymentProcessor payPal = new PayPalAdapter(new PayPalGateway());
        payPal.processPayment(150.00);

        PaymentProcessor stripe = new StripeAdapter(new StripeGateway());
        stripe.processPayment(250.00);
    }
}
