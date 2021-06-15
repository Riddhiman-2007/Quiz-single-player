class Security {

    constructor(){
        this.title = createElement('h1')
        this.title.html(" Score :"+score)
        this.title.position(450, 50)

        this.access1 = createInput("Code1")
        this.access1.position(400,170);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(400,200);
        this.button1.style('background', 'lightgrey');    

        this.x = createElement('h2')
        this.x.html( " Question : What is 2-4+1 !!")
        this.x.position(400,120)
        
        this.button2 = createButton('Check');
        this.button2.position(-400,-200);

//add code for creating and positioning the third input box and button

        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                this.x.hide();
                score = score+1;
            
       
        this.button2.position(400,200);
        this.button2.style('background', 'lightgrey');
        this.access2 = createInput("Code1")
        this.access2.position(400,170);
        this.access2.style('background', 'white'); 
        this.y = createElement('h2')
        this.y.html( " Question : What is the full form of RCB!! " )
        this.y.position(400,120)
        
        
       
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                this.y.hide();
                score = score+1;
               
        this.access3 = createInput("Code1")
        this.access3.position(100,400);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(100,430);
        this.button3.style('background', 'lightgrey');
        
        
            }
        });
//add code for what happens when the third button is pressed
        
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score = score+1;
    }
});

    }
}