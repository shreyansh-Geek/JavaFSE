public class FinancialForecaster {

    public static double predictFutureValue(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return predictFutureValue(initialValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static double predictFutureValueOptimized(double initialValue, double growthRate, int years) {
        return initialValue * Math.pow(1 + growthRate, years);
    }
}
