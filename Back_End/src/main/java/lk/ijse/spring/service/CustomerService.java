package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Car;

import java.util.List;

public interface CustomerService {
    void saveCustomer(RegisterCustomerDTO registerCustomerDTO);
    void updateCustomerInformation(CustomerDTO customer);
    List<CarDTO> viewCars();

    void existUserCustomerAccount(String userName);

    void existEmail(String Email);

    String getNewId();

    void checkUserAccount(String userName,String password);

    void existCustomerLicence(String custId);
}
