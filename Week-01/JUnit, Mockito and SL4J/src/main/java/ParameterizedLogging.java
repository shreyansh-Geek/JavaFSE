import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLogging {
    private static final Logger logger = LoggerFactory.getLogger(ParameterizedLogging.class);

    public static void main(String[] args) {
        String accountId = "ACC-1001";
        double amount = 2500.50;
        String status = "SUCCESS";

        logger.info("Transaction: Account={}, Amount=${}, Status={}", accountId, amount, status);
        logger.warn("Low balance warning for account: {}", accountId);
        logger.error("Failed to process transaction for account: {} | Error: {}", accountId, "Insufficient funds");
    }
}
