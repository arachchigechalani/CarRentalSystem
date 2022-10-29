package lk.ijse.spring.controller;

import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.MultipartConfig;

@RestController
@MultipartConfig
@RequestMapping("admin")
@CrossOrigin

public class AdminController {

    @Autowired
    AdminService adminService;

    @PostMapping(path = "checkAccount", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseUtil checkUserAccount(String userName,String password){
        adminService.checkUserAccount(userName,password);
        return new ResponseUtil(200,"Login SuccessFull",null);
    }
}
