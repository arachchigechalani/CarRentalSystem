package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.ImageDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.FileDownloadUtil;
import lk.ijse.spring.util.FileUploadUtil;
import lk.ijse.spring.util.ResponseUtil;
import lk.ijse.spring.util.SearchFile;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@RequestMapping("car")
@CrossOrigin
public class CarController {

    @Autowired
    private CarService carService;

    @Autowired
    private FileDownloadUtil downloadUtil;

    @Autowired
    private SearchFile searchFile;

    @Autowired
    private FileUploadUtil uploadFile;

    @GetMapping(path = "getCar")
    public ResponseUtil getCarById(@RequestParam String id){
        CarDTO car = carService.getCarById(id);
        return new ResponseUtil(200,"Get All Cars",car);
    }

    @PostMapping(path = "addCar", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addCar(@RequestBody CarDTO carDTO) {

        carService.addCar(carDTO);

        return new ResponseUtil(200, "Car Added complete", null);
    }

    @PostMapping(path = "test")
    @CrossOrigin
    public String testMethod(@RequestParam("carId") String carId, @RequestParam("carName") String carName){
        System.out.println("ok requested");
        return "Hello Test is ok request received";
    }


    @SneakyThrows
    @PostMapping(path = "addCarImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addCarImage(@RequestParam(value = "param") MultipartFile[] multipartFile , @RequestParam("carId") String carId){

        String pathDirectory="D:\\2 sem projects\\SpringCarRental_Front_Back\\CarRentalSystem\\Back_End\\src\\main\\resources\\static\\images\\CarImage\\";

        String [] carImageView={"Front","Back","Side","Interior"};

        for (int i = 0; i < multipartFile.length; i++) {
            String[] split=multipartFile[i].getContentType().split("/");
            if (split[1].equals("jpeg") || split[1].equals("png")){
                String imageName=carId+carImageView[i]+".jpeg";
                //Files.copy(multipartFile[i].getInputStream(), Paths.get(pathDirectory+imageName), StandardCopyOption.REPLACE_EXISTING);
                uploadFile.saveFile(pathDirectory+imageName,multipartFile[i]);

            }else {
                return new ResponseUtil(404,"please..  must be Car images type  jpeg or png",null);

            }

        }

        return new ResponseUtil(200,"Car images added complete",null);
    }

    @GetMapping(path = "getCarImage" , produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<?> getCarImage(@RequestParam String carId,@RequestParam String view){

        ImageDTO imageDTO = new ImageDTO(carId, "car", view);
        Resource fileAsResource = downloadUtil.getFileAsResource(imageDTO);

        if (fileAsResource==null){
            return ResponseEntity.badRequest().contentType(MediaType.APPLICATION_JSON).body("Car Image not found");
        }
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(fileAsResource);
    }

    @PutMapping(path = "updateCar", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCar(@RequestBody CarDTO carDTO){
        carService.editCar(carDTO);
        return new ResponseUtil(200,"car Details Updated",null);
    }


    @SneakyThrows
    @PostMapping(path = "updateCarImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCarImage(@RequestParam(value = "carImage") MultipartFile multipartFile , @RequestParam("carId") String carId ,@RequestParam("view") String view){

        String pathDirectory="D:\\2 sem projects\\SpringCarRental_Front_Back\\CarRentalSystem\\Back_End\\src\\main\\resources\\static\\images\\CarImage\\";

        if (searchFile.searchFile(pathDirectory,carId+view+".jpeg")){
            Files.copy(multipartFile.getInputStream(),Paths.get(pathDirectory+File.separator+carId+view+".jpeg"),StandardCopyOption.REPLACE_EXISTING);
            return new ResponseUtil(200,"car Image Updated",null);
        }
        return new ResponseUtil(200,"car Image Update Fail",null);
    }



    @DeleteMapping(path = "deleteCar",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCar(@RequestParam String carId){
        carService.deleteCar(carId);
        return new ResponseUtil(200,"car Delete success",null);
    }


    @SneakyThrows
    @DeleteMapping(path = "deleteCarImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCarAllImages(@RequestParam String carId){
        String pathDirectory="D:\\2 sem projects\\SpringCarRental_Front_Back\\CarRentalSystem\\Back_End\\src\\main\\resources\\static\\images\\CarImage\\";
        String [] carImageView={"Front","Back","Side","Interior"};

        for (int i=0; i<carImageView.length; i++){
            Files.deleteIfExists(Paths.get(pathDirectory+File.separator+carId+carImageView[i]+".jpeg"));
        }

        return new ResponseUtil(200,"car Delete success",null);
    }


    @GetMapping(path ="getAllCars" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCars(){

        List<CarDTO> allCars = carService.getAllCars();

        return new ResponseUtil(200,"Get All Cars",allCars);

    }


    /*@GetMapping(path = "viewRentalRequest", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil viewRentalRequest(){
        List<RentalRequestDTO> allRentalRequest = carService.getAllRentalRequest();
        return new ResponseUtil(200,"car Delete success",allRentalRequest);
    }*/



}
