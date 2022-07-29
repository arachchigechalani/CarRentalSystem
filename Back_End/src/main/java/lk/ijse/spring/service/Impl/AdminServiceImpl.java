package lk.ijse.spring.service.Impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.RentalRequest;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.RentalRequestRepo;
import lk.ijse.spring.service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@CrossOrigin
@Service
public class AdminServiceImpl implements AdminService {


    @Autowired
    private ModelMapper mapper;

    @Autowired
    private RentalRequestRepo rentalRequestRepo;

    @Override
    public List<RentalRequestDTO> getAllRentalRequest() {
        List<RentalRequest> all = rentalRequestRepo.findAll();
        return (List<RentalRequestDTO>) mapper.map(all,RentalRequestDTO.class);
    }

}
