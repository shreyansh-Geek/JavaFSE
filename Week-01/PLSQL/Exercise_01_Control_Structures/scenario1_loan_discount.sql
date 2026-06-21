DECLARE
    CURSOR c_customers IS
        SELECT c.CustomerID, c.DOB, l.LoanID, l.InterestRate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID;
    
    v_age NUMBER;
BEGIN
    FOR r IN c_customers LOOP
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, r.DOB) / 12);
        
        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = r.LoanID;
            
            DBMS_OUTPUT.PUT_LINE('Applied 1% discount to Loan ' || r.LoanID || 
                                 ' for customer age ' || v_age);
        END IF;
    END LOOP;
    
    COMMIT;
END;
/
