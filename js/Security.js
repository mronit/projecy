class Security {

    constructor(){

        this.access1 = createInput("")
        this.access1.attribute("placeholder" ,"Code")
        this.access1.position(width/2-450, height/2-180);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(width/2-450, height/2-150);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("")
        this.access2.attribute("placeholder", "Answer here")
        this.access2.position(width/2+105, height/2+10);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(width/2+105, height/2+40);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("")
        this.access3.attribute("placeholder", "Answer here")
        this.access3.position(width/2-450, height/2+150);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(width/2-450, height/2+190);
        this.button3.style('background', 'lightgrey');
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

    }

   
}
{




}