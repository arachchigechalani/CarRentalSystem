package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class ImageDTO {
    String imageId;  //car001
    String imageType;//car(imageType)-----swith case eke namama denn oon
    String imageView;//ex:back
}
