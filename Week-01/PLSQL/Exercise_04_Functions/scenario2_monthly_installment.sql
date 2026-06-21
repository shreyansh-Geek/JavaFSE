CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment(
    p_loan_amount NUMBER,
    p_annual_rate NUMBER,
    p_years NUMBER
) RETURN NUMBER IS
    v_monthly_rate NUMBER;
    v_months NUMBER;
    v_installment NUMBER;
BEGIN
    v_monthly_rate := p_annual_rate / 100 / 12;
    v_months := p_years * 12;
    
    IF v_monthly_rate = 0 THEN
        v_installment := p_loan_amount / v_months;
    ELSE
        v_installment := p_loan_amount * v_monthly_rate * 
            POWER(1 + v_monthly_rate, v_months) / 
            (POWER(1 + v_monthly_rate, v_months) - 1);
    END IF;
    
    RETURN ROUND(v_installment, 2);
END;
/
