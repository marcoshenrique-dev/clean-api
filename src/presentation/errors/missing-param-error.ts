export class MissingParamError extends Error{
   constructor(paramName: String){
      super(`Missing Param: ${paramName}`)
      this.name = 'MissingParamError'
   }
}