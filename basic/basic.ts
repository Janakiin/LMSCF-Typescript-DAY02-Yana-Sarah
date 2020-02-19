class Person {
	private name : string = "";
	private age : number = 0;
	private jobTitle : any = "";

constructor (name, age, jobTitle){
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
	}
	greetings(){
		return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}.`;
	}
}

let Identity = new Person ("Jana", 21, "Dreamer");
console.log(Identity.greetings());

class Hobby extends Person {
	activity: string;

	constructor(name, age, jobTitle, activity){
		super(name, age, jobTitle);
		this.activity = activity;
	}

	yourHobby(){
		return `${super.greetings()} and my favorite hobby is ${this.activity}`;
	}
}

let identity = new Hobby ("Jana", 21, "Dreamer", "Swimming");
console.log(identity.yourHobby());