import java.util.HashMap;

public class Inventory {
    private HashMap<Integer, Product> productMap;

    public Inventory() {
        productMap = new HashMap<>();
    }

    public void addProduct(Product product) {
        productMap.put(product.getProductId(), product);
        System.out.println("Added: " + product);
    }

    public void updateProduct(int productId, String name, int quantity, double price) {
        Product product = productMap.get(productId);
        if (product != null) {
            product.setProductName(name);
            product.setQuantity(quantity);
            product.setPrice(price);
            System.out.println("Updated: " + product);
        } else {
            System.out.println("Product with ID " + productId + " not found.");
        }
    }

    public void deleteProduct(int productId) {
        Product removed = productMap.remove(productId);
        if (removed != null) {
            System.out.println("Deleted: " + removed);
        } else {
            System.out.println("Product with ID " + productId + " not found.");
        }
    }

    public void displayAll() {
        if (productMap.isEmpty()) {
            System.out.println("Inventory is empty.");
        } else {
            for (Product p : productMap.values()) {
                System.out.println(p);
            }
        }
    }
}
