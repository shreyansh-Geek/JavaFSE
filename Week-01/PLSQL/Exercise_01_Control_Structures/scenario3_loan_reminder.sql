DECLARE
    CURSOR c_loans_due IS
        SELECT l.LoanID, l.EndDate, c.Name, c.CustomerID
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR r IN c_loans_due LOOP
        DBMS_OUTPUT.PUT_LINE('REMINDER: Customer ' || r.Name || 
                             ' (ID: ' || r.CustomerID || 
                             ') has Loan ' || r.LoanID || 
                             ' due on ' || TO_CHAR(r.EndDate, 'YYYY-MM-DD'));
    END LOOP;
    
    IF c_loans_due%NOTFOUND THEN
        DBMS_OUTPUT.PUT_LINE('No loans due within the next 30 days.');
    END IF;
END;
/
