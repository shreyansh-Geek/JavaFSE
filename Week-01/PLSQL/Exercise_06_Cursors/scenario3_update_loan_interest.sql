DECLARE
    CURSOR c_loans IS
        SELECT LoanID, CustomerID, InterestRate, LoanAmount
        FROM Loans
        FOR UPDATE;
    
    v_new_rate NUMBER;
BEGIN
    FOR r IN c_loans LOOP
        IF r.LoanAmount > 10000 THEN
            v_new_rate := r.InterestRate - 0.5;
        ELSE
            v_new_rate := r.InterestRate - 0.25;
        END IF;
        
        UPDATE Loans
        SET InterestRate = v_new_rate
        WHERE CURRENT OF c_loans;
        
        DBMS_OUTPUT.PUT_LINE('Loan ' || r.LoanID || ': Rate changed from ' || 
                             r.InterestRate || '% to ' || v_new_rate || '%');
    END LOOP;
    
    COMMIT;
END;
/
