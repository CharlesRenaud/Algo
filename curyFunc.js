function greeter(greeting) {
    console.log(greeting)
    //output: hello
    return function (greetee) {
        console.log(greetee)
        //output : candidate
        console.log(greeting + ", " + greetee + "!");
        // output :  hello, candiadate!
    }
  } 
  greeter("hello")("candiadate")
  // Call de la fonction avec les deux arguments