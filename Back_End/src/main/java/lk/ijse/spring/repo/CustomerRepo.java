package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

@Transactional
public interface CustomerRepo extends JpaRepository<Customer, String> {

    @Query("select c.email from Customer c where c.email=?1")
    public String existsByEmail(String email);

    @Query(value = "select id from Customer order by id desc LIMIT 1", nativeQuery = true)
    public String getLastCustId();

    @Query(value = "select * from Customer where id=?", nativeQuery = true)
    public Customer getCustomerById(String customerId);

    @Query(value = "select drivingLicence from Customer where id=?", nativeQuery = true)
    public String existsCustomerLicence(String custId);
}
