// Q1.
const parent={
    firstname:"shivani",
    lastname:"bhagyawant",
fullname(){
    return(this.firstname+" "+this.lastname)
}
}
const child={
    __proto__:parent
}
console.log(child.fullname());



// q2. 
var obj = {
    name:'shivani',
    course:'fullstack',
    standerd:12
}
result=Object.keys(obj)
console.log(result)


// Q3.
arr=[1,2,3,4]
arr1=[3,2,5,4]
arr2=[4,2,2,4]
const array = {
    add: function(a){
        sum=0
        for(i=0;i<a.length;i++){
            sum=sum+a[i]
        }
        console.log(sum)
    }
}
Array.__proto__=array
Array.add(arr1)


// Q4
function person1(first,last,age,eye){
    this.firstname1=first;
    this.lastname1=last;
    this.age=age;
    this.eyecolor=eye;
}

const myfriend1=new person1("john","doe","50","blue");
const myfriend2=new person1("sally","rally","30","brown");
document.getElementById("demo1").innerHTML=myfriend1.age
document.getElementById("demo2").innerHTML=myfriend2.age


