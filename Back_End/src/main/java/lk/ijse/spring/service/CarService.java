package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;

import java.util.List;

public interface CarService {
    void addCar(CarDTO carDTO);
    void editCar(CarDTO carDTO);
    void deleteCar(CarDTO carDTO);
    public List<CarDTO> getAllCars();
}
