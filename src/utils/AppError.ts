export class AppError {
  message: string

  // convocado no momento que a classe é instanciada
  constructor(message: string) {
    this.message = message
  }
}
