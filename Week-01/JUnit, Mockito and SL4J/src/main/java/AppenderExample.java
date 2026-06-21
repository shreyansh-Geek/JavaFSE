import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AppenderExample {
    private static final Logger logger = LoggerFactory.getLogger(AppenderExample.class);

    public static void main(String[] args) {
        logger.info("Application started");
        logger.debug("Loading configuration...");
        logger.warn("Configuration file not found, using defaults");
        logger.error("Failed to connect to database", new Exception("Connection timeout"));
        logger.info("Application shutdown complete");
    }
}
