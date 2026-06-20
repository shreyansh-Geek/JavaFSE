import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "T-Shirt", "Clothing"),
            new Product(3, "Book", "Education"),
            new Product(4, "Phone", "Electronics"),
            new Product(5, "Shoes", "Footwear")
        };

        System.out.println("--- Linear Search ---");
        int index = SearchUtil.linearSearch(products, "Book");
        if (index != -1) {
            System.out.println("Found at index " + index + ": " + products[index]);
        } else {
            System.out.println("Not found.");
        }

        Arrays.sort(products, Comparator.comparing(Product::getProductName, String.CASE_INSENSITIVE_ORDER));

        System.out.println("\n--- Sorted Products (for Binary Search) ---");
        for (Product p : products) {
            System.out.println(p);
        }

        System.out.println("\n--- Binary Search ---");
        index = SearchUtil.binarySearch(products, "Phone");
        if (index != -1) {
            System.out.println("Found at index " + index + ": " + products[index]);
        } else {
            System.out.println("Not found.");
        }
    }
}
