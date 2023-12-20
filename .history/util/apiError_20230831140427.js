
class ApiError extends error{
    constructor(satusCode, mesaage){
        super(message);
        this.satusCode = satusCode;
        this.mesaage = mesaage;
    }
}