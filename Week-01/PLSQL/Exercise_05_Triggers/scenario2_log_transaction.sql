CREATE OR REPLACE TRIGGER LogTransaction
    AFTER INSERT ON Transactions
    FOR EACH ROW
BEGIN
    INSERT INTO AuditLog (LogID, TransactionID, AccountID, Amount, TransactionType, LogDate)
    VALUES (audit_log_seq.NEXTVAL, :NEW.TransactionID, :NEW.AccountID, 
            :NEW.Amount, :NEW.TransactionType, SYSDATE);
END;
/
