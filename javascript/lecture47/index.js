
class Human{
    //propeties
    age=13;  //public
    #wt=80; //private
    ht=180;

    constructor(newAge,newHeight, newWeight){
        this.age=newAge;
        this.ht=newHeight;
        this.#wt=newWeight;
    }

    //behavior
    walking(){
        console.log("i am walking ",this.#wt)
    }

    running(){
        consol.log("i am running")
    }


    get fetchWeight(){
        return this.#wt ;
    }

    set modifyWeight(val){
        this.#wt =val;
    }


}


let obj= new Human();
// console.log(obj.age)

obj.walking()
console.log(fetchWeight)
