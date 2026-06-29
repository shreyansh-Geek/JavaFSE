package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.model.Department;
import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.model.Skill;
import com.cognizant.ormlearn.model.Stock;
import com.cognizant.ormlearn.repository.StockRepository;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.DepartmentService;
import com.cognizant.ormlearn.service.EmployeeService;
import com.cognizant.ormlearn.service.SkillService;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;
    private static StockRepository stockRepository;
    private static EmployeeService employeeService;
    private static DepartmentService departmentService;
    private static SkillService skillService;

    public static void main(String[] args) throws CountryNotFoundException {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);
        stockRepository = context.getBean(StockRepository.class);
        employeeService = context.getBean(EmployeeService.class);
        departmentService = context.getBean(DepartmentService.class);
        skillService = context.getBean(SkillService.class);

        LOGGER.info("Inside main");

        // Hands-on 1: Country Query Methods
        testGetAllCountries();
        testFindCountryByCode();
        testSearchByName();
        testSearchByNameSorted();
        testSearchByStartingLetter();

        // Hands-on 2: Stock Query Methods
        testGetStockByCodeAndDateBetween();
        testGetStockByCodeAndPriceGreaterThan();
        testGetTop3ByVolume();
        testGetTop3LowestByCode();

        // Hands-on 4: Many-to-One (Employee -> Department)
        testGetEmployee();
        testAddEmployee();
        testUpdateEmployee();

        // Hands-on 5: One-to-Many (Department -> Employee)
        testGetDepartment();

        // Hands-on 6: Many-to-Many (Employee <-> Skill)
        testAddSkillToEmployee();
    }

    // ========== Hands-on 1: Country Query Methods ==========

    private static void testGetAllCountries() {
        LOGGER.info("Start - getAllCountries");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End - getAllCountries");
    }

    private static void testFindCountryByCode() throws CountryNotFoundException {
        LOGGER.info("Start - findCountryByCode");
        Country country = countryService.findCountryByCode("IN");
        LOGGER.debug("Country:{}", country);
        LOGGER.info("End - findCountryByCode");
    }

    private static void testSearchByName() {
        LOGGER.info("Start - searchByName");
        List<Country> countries = countryService.searchByName("ou");
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End - searchByName");
    }

    private static void testSearchByNameSorted() {
        LOGGER.info("Start - searchByNameSorted");
        List<Country> countries = countryService.searchByNameSorted("ou");
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End - searchByNameSorted");
    }

    private static void testSearchByStartingLetter() {
        LOGGER.info("Start - searchByStartingLetter");
        List<Country> countries = countryService.searchByNameStartingWith("Z");
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End - searchByStartingLetter");
    }

    // ========== Hands-on 2: Stock Query Methods ==========

    private static void testGetStockByCodeAndDateBetween() {
        LOGGER.info("Start - getStockByCodeAndDateBetween");
        List<Stock> stocks = stockRepository.findByCodeAndDateBetween("FB",
                LocalDate.of(2019, 9, 1), LocalDate.of(2019, 9, 30));
        LOGGER.debug("stocks={}", stocks);
        LOGGER.info("End - getStockByCodeAndDateBetween");
    }

    private static void testGetStockByCodeAndPriceGreaterThan() {
        LOGGER.info("Start - getStockByCodeAndPriceGreaterThan");
        List<Stock> stocks = stockRepository.findByCodeAndCloseGreaterThan("GOOGL", new BigDecimal("1250"));
        LOGGER.debug("stocks={}", stocks);
        LOGGER.info("End - getStockByCodeAndPriceGreaterThan");
    }

    private static void testGetTop3ByVolume() {
        LOGGER.info("Start - getTop3ByVolume");
        List<Stock> stocks = stockRepository.findTop3ByOrderByVolumeDesc();
        LOGGER.debug("stocks={}", stocks);
        LOGGER.info("End - getTop3ByVolume");
    }

    private static void testGetTop3LowestByCode() {
        LOGGER.info("Start - getTop3LowestByCode");
        List<Stock> stocks = stockRepository.findTop3ByCodeOrderByCloseAsc("NFLX");
        LOGGER.debug("stocks={}", stocks);
        LOGGER.info("End - getTop3LowestByCode");
    }

    // ========== Hands-on 4: Many-to-One ==========

    private static void testGetEmployee() {
        LOGGER.info("Start - getEmployee");
        Employee employee = employeeService.get(1);
        LOGGER.debug("Employee:{}", employee);
        LOGGER.debug("Department:{}", employee.getDepartment());
        LOGGER.info("End - getEmployee");
    }

    private static void testAddEmployee() {
        LOGGER.info("Start - addEmployee");
        Employee employee = new Employee();
        employee.setName("Test Employee");
        employee.setSalary(60000);
        employee.setPermanent(true);
        employee.setDateOfBirth(new Date());
        Department department = departmentService.get(1);
        employee.setDepartment(department);
        employeeService.save(employee);
        LOGGER.debug("Employee:{}", employee);
        LOGGER.info("End - addEmployee");
    }

    private static void testUpdateEmployee() {
        LOGGER.info("Start - updateEmployee");
        Employee employee = employeeService.get(1);
        Department department = departmentService.get(2);
        employee.setDepartment(department);
        employeeService.save(employee);
        LOGGER.debug("Employee:{}", employee);
        LOGGER.info("End - updateEmployee");
    }

    // ========== Hands-on 5: One-to-Many ==========

    private static void testGetDepartment() {
        LOGGER.info("Start - getDepartment");
        Department department = departmentService.get(1);
        LOGGER.debug("Department:{}", department);
        LOGGER.debug("EmployeeList:{}", department.getEmployeeList());
        LOGGER.info("End - getDepartment");
    }

    // ========== Hands-on 6: Many-to-Many ==========

    private static void testAddSkillToEmployee() {
        LOGGER.info("Start - addSkillToEmployee");
        Employee employee = employeeService.get(2);
        Skill skill = skillService.get(3);
        Set<Skill> skillList = employee.getSkillList();
        skillList.add(skill);
        employee.setSkillList(skillList);
        employeeService.save(employee);
        LOGGER.debug("Employee Skills:{}", employee.getSkillList());
        LOGGER.info("End - addSkillToEmployee");
    }
}
