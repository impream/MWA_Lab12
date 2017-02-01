class Person {
	private _firstName:string = '';

	get firstName() {
		return this._firstName;
	}

	set firstName(name: string) {
		this._firstName = name;
	}
}

let person = new Person();

person.firstName = 'prem';
console.log(person.firstName);