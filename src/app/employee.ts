// Com isso, estamos basicamente criando um "tipo" IEmployee, que vai servir para fazer
// o cast da Observable que vamos receber da chamada this.http.get(this._url); 

export interface IEmployee {
    id: number,
    name: string,
    age: number
}