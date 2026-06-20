public class ForecastingTest {
    public static void main(String[] args) {
        double initialValue = 10000;
        double growthRate = 0.05;
        int years = 10;

        double recursiveResult = FinancialForecaster.predictFutureValue(initialValue, growthRate, years);
        System.out.println("Recursive Prediction: $" + String.format("%.2f", recursiveResult));

        double optimizedResult = FinancialForecaster.predictFutureValueOptimized(initialValue, growthRate, years);
        System.out.println("Optimized Prediction: $" + String.format("%.2f", optimizedResult));
    }
}
