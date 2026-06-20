import java.util.Arrays;

public class SortingTest {
    public static void main(String[] args) {
        Order[] orders = {
            new Order(1, "Shreyansh Pandit", 2500),
            new Order(2, "Alice", 1500),
            new Order(3, "Bob", 4500),
            new Order(4, "Charlie", 800),
            new Order(5, "Diana", 3200)
        };

        Order[] bubbleOrders = Arrays.copyOf(orders, orders.length);
        SortOrders.bubbleSort(bubbleOrders);
        System.out.println("--- Bubble Sort (by Total Price) ---");
        for (Order o : bubbleOrders) {
            System.out.println(o);
        }

        Order[] quickOrders = Arrays.copyOf(orders, orders.length);
        SortOrders.quickSort(quickOrders, 0, quickOrders.length - 1);
        System.out.println("\n--- Quick Sort (by Total Price) ---");
        for (Order o : quickOrders) {
            System.out.println(o);
        }
    }
}
