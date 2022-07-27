import  axios from "../axios";

class CustomerService {

    registerCustomer= async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('customer/addCustomer',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    uploadImageCustomerNIC= async (dataFile,custID) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('customer/uploadIdImage?custId'+custID,dataFile)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    uploadImageCustomerDrivingLicence= async (dataFile,custID) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('customer/uploadLicenceImage?custId'+custID,dataFile)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }










}

export default new CustomerService();