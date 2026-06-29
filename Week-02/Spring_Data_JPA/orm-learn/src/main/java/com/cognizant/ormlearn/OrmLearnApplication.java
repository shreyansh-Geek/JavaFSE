package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) throws CountryNotFoundException {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);

        LOGGER.info("Inside main");

        testGetAllCountries();
        testFindCountryByCode();
        testAddCountry();
        testUpdateCountry();
        testDeleteCountry();
    }

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

    private static void testAddCountry() throws CountryNotFoundException {
        LOGGER.info("Start - addCountry");
        Country newCountry = new Country("ZZ", "TestLand");
        countryService.addCountry(newCountry);
        Country fetched = countryService.findCountryByCode("ZZ");
        LOGGER.debug("Added country:{}", fetched);
        LOGGER.info("End - addCountry");
    }

    private static void testUpdateCountry() throws CountryNotFoundException {
        LOGGER.info("Start - updateCountry");
        countryService.updateCountry("ZZ", "TestLandUpdated");
        Country updated = countryService.findCountryByCode("ZZ");
        LOGGER.debug("Updated country:{}", updated);
        LOGGER.info("End - updateCountry");
    }

    private static void testDeleteCountry() {
        LOGGER.info("Start - deleteCountry");
        countryService.deleteCountry("ZZ");
        LOGGER.debug("Deleted country ZZ");
        LOGGER.info("End - deleteCountry");
    }
}
