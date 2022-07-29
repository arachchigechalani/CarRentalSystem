package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@RequestMapping("customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    CustomerService customerService;





    @GetMapping(path = "ifExistUserAccount")
    public ResponseUtil ifExistUserAccount(@RequestParam String userName){
        customerService.existUserCustomerAccount(userName);
        return new ResponseUtil(200,"UserAccount Free",null);
    }

    @PostMapping(path = "addCustomer",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil registerCustomer(@RequestBody RegisterCustomerDTO registerCustomerDTO) {

        customerService.saveCustomer(registerCustomerDTO);

        return new ResponseUtil(200, "Customer Added Complete", "null");

    }



    @SneakyThrows
    @PostMapping(path = "uploadIdImage")
    public ResponseUtil uploadImageID(@RequestParam("ID") MultipartFile multipartFiles, @RequestParam String custId){

        String pathDirectory="D:\\2 sem projects\\SpringCarRental_Front_Back\\CarRentalSystem\\Back_End\\src\\main\\resources\\static\\images\\IDCardImage";
        String imageName=custId+"ID_CARD"+".jpeg";
        Files.copy(multipartFiles.getInputStream(), Paths.get(pathDirectory+ File.separator+imageName), StandardCopyOption.REPLACE_EXISTING);

        return new ResponseUtil(200,"ID_CARD image added success..",null);
    }

    @SneakyThrows
    @PostMapping(path = "uploadLicenceImage")
    public ResponseUtil uploadImageLicence(@RequestParam("Licence")MultipartFile multipartFiles, @RequestParam String custId){

        String pathDirectory="D:\\2 sem projects\\SpringCarRental_Front_Back\\CarRentalSystem\\Back_End\\src\\main\\resources\\static\\images\\LicenceImage";
        String imageName=custId+"Licence_CARD"+".jpeg";
        Files.copy(multipartFiles.getInputStream(), Paths.get(pathDirectory+ File.separator+imageName), StandardCopyOption.REPLACE_EXISTING);

        return new ResponseUtil(200,"Licence_Card image added success..",null);
    }






    @PutMapping
    public ResponseUtil updateCustomerInformation(@RequestBody CustomerDTO customerDTO) {
        customerService.updateCustomerInformation(customerDTO);

        return new ResponseUtil(200, "Updated Customer Information", "null");

    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil ViewAllCar() {
        List<Car> cars = customerService.viewCars();

        return new ResponseUtil(200, "All Car Details Received", cars);

    }

    @PostMapping(path = "rentalRequest")
    public ResponseUtil rentalRequest(@RequestBody RentalRequestDTO rentalRequestDTO ){

        customerService.rentalRequest(rentalRequestDTO);
        return new ResponseUtil(200, "Rental Request Received","null");

    }

}
