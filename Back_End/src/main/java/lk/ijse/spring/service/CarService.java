package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.RentalRequestDTO;

import java.util.List;

public interface CarService {
    void addCar(CarDTO carDTO);
    void editCar(CarDTO carDTO);
    void deleteCar(String carId);


    public List<CarDTO> getAllCars();
}
