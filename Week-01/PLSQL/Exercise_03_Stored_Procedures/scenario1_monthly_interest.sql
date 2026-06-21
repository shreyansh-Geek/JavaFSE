CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 1 / 100),
        LastModified = SYSDATE
    WHERE AccountType = 'Savings';
    
    DBMS_OUTPUT.PUT_LINE('Monthly interest of 1% applied to all savings accounts.');
    COMMIT;
END;
/
