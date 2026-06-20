public class PayPalPayment implements PaymentStrategy {
    private String email;

    public PayPalPayment() {
        this.email = "shreyanshloop07@gmail.com";
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " using PayPal account shreyanshloop07@gmail.com");
    }
}
