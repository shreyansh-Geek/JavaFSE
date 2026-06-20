import java.util.Arrays;
import java.util.Comparator;

public class LibraryTest {
    public static void main(String[] args) {
        Book[] books = {
            new Book(1, "Java Programming", "James Gosling"),
            new Book(2, "Data Structures", "Robert Lafore"),
            new Book(3, "Clean Code", "Robert C. Martin"),
            new Book(4, "Algorithms", "CLRS"),
            new Book(5, "Design Patterns", "Gang of Four")
        };

        System.out.println("--- Linear Search ---");
        int index = LibrarySearch.linearSearchByTitle(books, "Clean Code");
        if (index != -1) {
            System.out.println("Found at index " + index + ": " + books[index]);
        } else {
            System.out.println("Not found.");
        }

        Arrays.sort(books, Comparator.comparing(Book::getTitle, String.CASE_INSENSITIVE_ORDER));

        System.out.println("\n--- Sorted Books (for Binary Search) ---");
        for (Book b : books) {
            System.out.println(b);
        }

        System.out.println("\n--- Binary Search ---");
        index = LibrarySearch.binarySearchByTitle(books, "Algorithms");
        if (index != -1) {
            System.out.println("Found at index " + index + ": " + books[index]);
        } else {
            System.out.println("Not found.");
        }
    }
}
