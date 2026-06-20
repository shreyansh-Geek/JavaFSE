public class LibrarySearch {

    public static int linearSearchByTitle(Book[] books, String title) {
        for (int i = 0; i < books.length; i++) {
            if (books[i].getTitle().equalsIgnoreCase(title)) {
                return i;
            }
        }
        return -1;
    }

    public static int binarySearchByTitle(Book[] sortedBooks, String title) {
        int left = 0, right = sortedBooks.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = title.compareToIgnoreCase(sortedBooks[mid].getTitle());
            if (cmp == 0) {
                return mid;
            } else if (cmp < 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }
}
