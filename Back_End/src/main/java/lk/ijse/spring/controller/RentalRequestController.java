package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.service.RentalRequestService;
import lk.ijse.spring.util.FileUploadUtil;
import lk.ijse.spring.util.ResponseUtil;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Random;

@RestController
@RequestMapping("rental")
@CrossOrigin
public class RentalRequestController {

    @Autowired
    RentalRequestService rentalRequestService;

    @Autowired
    private FileUploadUtil uploadFile;

    @PostMapping(path = "rentalRequest")
    public ResponseUtil rentalRequest(@RequestBody RentalRequestDTO rentalRequestDTO){
        //System.out.println(rentalRequestDTO.toString());
        rentalRequestService.rentalRequest(rentalRequestDTO);
        return new ResponseUtil(200,"renatalRequest recevied",null);
    }

    @PostMapping(path = "uploadDamageSlip")
    public ResponseUtil uploadDamageSlip(@RequestParam(value = "param") MultipartFile multipartFile,@RequestParam String custId){

        String pathDirectory="D:\\AAD\\Spring Project\\milestone 02 backend\\Easy_Car_Rental_System-Spring-Project-\\EasyCarRental\\src\\main\\resources\\static\\image\\damageSlip\\";
        String token=null;


        Random r = new Random ();
        String s = Long.toString (r.nextLong () & Long.MAX_VALUE, 36);

            String[] split=multipartFile.getContentType().split("/");

            if (split[1].equals("jpeg") || split[1].equals("png")){
                String imageName=custId+"-"+s+".jpeg";
                token=imageName;
                uploadFile.saveFile(pathDirectory+imageName , multipartFile);

            }else {
                return new ResponseUtil(404,"please..  must be Car images type  jpeg or png",null);

            }

        return new ResponseUtil(200,"Car images added complete",token);
    }
}
