let name = prompt ("what is your name");
alert(name);

let age = prompt("what is your age");
alert(age);

let email = prompt("what is your email");
alert (email);


if (age && age < 12){
    alert (`hi ${name},you are ${age} years old and you are too young to regiter.Sorry😔😔`)}

else if(age && age >= 12 && age <= 18 ){
    alert(`hi ${name},you are ${age} years old and and you have limited options to register for.We will keep in touch
via your email:${email}👋👋`)}

else if(age && age >=18 ){
    alert(`hi ${name},you are ${age} years old and you can register for any option of your choosing.We will keep in touch
        via your email:${email}👋👋`)
}

