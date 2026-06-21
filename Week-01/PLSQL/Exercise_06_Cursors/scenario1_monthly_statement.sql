DECLARE
    CURSOR c_transactions IS
        SELECT t.TransactionID, t.AccountID, t.Amount, t.TransactionType, t.TransactionDate,
               a.CustomerID, c.Name
        FROM Transactions t
        JOIN Accounts a ON t.AccountID = a.AccountID
        JOIN Customers c ON a.CustomerID = c.CustomerID
        WHERE EXTRACT(MONTH FROM t.TransactionDate) = EXTRACT(MONTH FROM SYSDATE)
          AND EXTRACT(YEAR FROM t.TransactionDate) = EXTRACT(YEAR FROM SYSDATE)
        ORDER BY c.CustomerID, t.TransactionDate;
    
    v_prev_customer NUMBER := -1;
BEGIN
    FOR r IN c_transactions LOOP
        IF r.CustomerID != v_prev_customer THEN
            DBMS_OUTPUT.PUT_LINE('');
            DBMS_OUTPUT.PUT_LINE('--- Statement for ' || r.Name || ' (ID: ' || r.CustomerID || ') ---');
            v_prev_customer := r.CustomerID;
        END IF;
        
        DBMS_OUTPUT.PUT_LINE(r.TransactionDate || ' | ' || r.TransactionType || 
                             ' | $' || r.Amount || ' | Account: ' || r.AccountID);
    END LOOP;
END;
/
