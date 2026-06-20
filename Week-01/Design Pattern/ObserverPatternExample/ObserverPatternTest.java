public class ObserverPatternTest {
    public static void main(String[] args) {
        StockMarket appleStock = new StockMarket("AAPL", 150.00);

        Observer mobileApp = new MobileApp("MobileApp");
        Observer webApp = new WebApp("WebApp");

        appleStock.registerObserver(mobileApp);
        appleStock.registerObserver(webApp);

        appleStock.setPrice(155.50);
        appleStock.setPrice(160.75);
    }
}
