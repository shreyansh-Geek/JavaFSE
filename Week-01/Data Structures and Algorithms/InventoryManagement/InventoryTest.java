public class InventoryTest {
    public static void main(String[] args) {
        Inventory inv = new Inventory();

        inv.addProduct(new Product(101, "Laptop", 10, 75000));
        inv.addProduct(new Product(102, "Mouse", 50, 500));
        inv.addProduct(new Product(103, "Keyboard", 30, 1200));

        System.out.println("\n--- All Products ---");
        inv.displayAll();

        System.out.println("\n--- Updating Product 102 ---");
        inv.updateProduct(102, "Wireless Mouse", 40, 650);

        System.out.println("\n--- Deleting Product 103 ---");
        inv.deleteProduct(103);

        System.out.println("\n--- Final Inventory ---");
        inv.displayAll();
    }
}
