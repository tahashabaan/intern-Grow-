export default class ApiError extends Error {
  constructor(satusCode, mesaage) {
    super(mesaage);
    this.satusCode = satusCode;
    this.mesaage = mesaage;
  }
}
