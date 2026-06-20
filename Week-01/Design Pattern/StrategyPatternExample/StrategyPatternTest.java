public class StrategyPatternTest {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext();

        context.setPaymentStrategy(new CreditCardPayment("1234567890123456"));
        context.executePayment(100.00);

        context.setPaymentStrategy(new PayPalPayment());
        context.executePayment(200.00);
    }
}
