package lk.ijse.spring.service.Impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarServiceImpl implements CarService {
    @Autowired
    private CarRepo carRepo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void addCar(CarDTO carDTO) {
        if (!carRepo.existsById(carDTO.getVehicleId())) {
            carRepo.save(mapper.map(carDTO, Car.class));
        } else {
            throw new RuntimeException("Car Already Exist");
        }
    }

    @Override
    public void editCar(CarDTO carDTO) {

    }

    @Override
    public void deleteCar(CarDTO carDTO) {

    }

    @Override
    public List<CarDTO> getAllCars() {
        List<Car> all = carRepo.findAll();
        List<CarDTO> allcars=new ArrayList<>();
        for (Car car : all) {
            allcars.add(mapper.map(car,CarDTO.class));
        }

        return allcars;
    }
}
