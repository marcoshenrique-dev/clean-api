export class ServerError extends Error {
  constructor () {
    super('Internal Sever Error')
    this.name = 'ServerError'
  }
}
