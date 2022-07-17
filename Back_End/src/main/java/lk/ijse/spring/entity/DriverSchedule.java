package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class DriverSchedule {
    @Id
    private int id;
    @ManyToOne(cascade = CascadeType.ALL)
    private Driver driver;
    @ManyToOne(cascade = CascadeType.ALL)
    private Car car;

    private String date;
    private String time;
}
