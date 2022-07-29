package lk.ijse.spring.repo;

import lk.ijse.spring.entity.CustomerUserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface CustomerUserAccountRepo extends JpaRepository<CustomerUserAccount,String> {
}
