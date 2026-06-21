public class EmailService {
    public void sendEmail(String to, String subject, String body) {
        System.out.println("Sending email to " + to);
    }

    public String formatMessage(String template, String name) {
        return template.replace("{name}", name);
    }
}
