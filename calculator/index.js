const gameName = new String("Asad Awan")

// console.log(gameName)

// console.log(gameName.length)

// console.log(gameName.toLowerCase())

// console.log(gameName.toLocaleUpperCase())

// console.log(gameName.bold()) not recommended 

// console.log(gameName.toLocaleLowerCase())  same as it is tolowercase;

// console.log(gameName.at(1)) for indexing of alphabet number check

// console.log(gameName.blink())  for highlighted the value butt in this time this is not recommended and alternated is css

// console.log(gameName.charAt(0))     same as at(). ye b indexing number se alphabet konse number pr h batata h

// console.log(gameName.charCodeAt(0))  to identify the uniq number of alphabet 

// console.log(gameName.trim())  to remove whitespace start and end

// console.log(gameName.sup())  for power used

// console.log(gameName.substring(0 , 9))  to find the value using indexed number

// console.log(gameName.substr())  start indexed number marzi se or lenth bata do bas

// (concat)
// let firstName = "Amit";
// let lastName = "Kumar";
// let fullName = firstName.concat(" ", lastName);
// console.log(fullName);   do ya zyada strings ko jodne ke liye use karte h  

// let filename = "report.pdf";
// console.log(filename.endsWith(".pdf")); koi string kis specific word ya character pe end ho rahi hai ya nahi.

// let price = 99.4567;
// let finalPrice = price.toFixed(2);

// console.log("Final Price: ₹" + finalPrice)  price mein value hai 99.45

// toFixed(2) use karke humne decimal ke baad sirf 2 digits rakhe

// (split)
// console.log(gameName.split(""));  for seperate the element

// (find)
// const names = ["Ali", "Asad", "Sara", "Ahmed"];
// const foundName = names.find(name => name === "Asad");
// console.log(foundName); for find element

// (filter)
// const names = ["Ali", "Asad", "Sara", "Ahmed","Asad"];
// const foundName = names.filter(name => name === "Asad");
// console.log(foundName);  same element find karta rahega jab tak elemet milte rahe ge yaha tk ke last line b

// (slice)
// const str = "Hello World";
// console.log(str.slice(0, 5));   
// console.log(str.slice(-5));  same as substring butt negative value b leta h

// (replace)
// const str = "Hello World";
// console.log(str.replace("World", "JavaScript")); replace kardeta h words se jis se hame replace karna 

// **************************************************** JavaScript Calculator ********************************** 

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click' , (e) =>{
        if(e.target.innerHtml == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHtml == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHtml == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string+= e.target.innerHtml;
            input.value = string;
        }
    })
})



