class Form {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Log in");
        this.greeting = createElement("h3")
        this.Q1 = createElement("h4");
        this.Q2 = createElement("h4");
        this.Q3 = createElement("h4");
        this.Q4 = createElement("h4");
        this.name = ""
        // this.answer1 = ""
        // this.answer2 = ""
        this.correctAns1 = "Envelope";
        this.correctAns2 = "Letter 'C'"
        this.correctAns3 = "coin";
        this.correctAns4 = "and";
        this.score = 0;
        this.scoreElement = createElement("h3");
        this.Answers = createElement("h3");
        this.ans1 = createElement("h3");
        this.ans2 = createElement("h3");
        this.ans3 = createElement("h3");
        this.ans4 = createElement("h3");
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title = createElement("h2");
        title.html("My quiz");
        title.position(500,20);
       
        this.input.position(width/2-40,height/2-80);
        this.button.position(width/2+30,height/2);


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.name = this.input.value();
            this.quiz();

        })
    }
    quiz(){
        this.Q1.html("Q1. What starts and ends with 'E', but has only one letter?")
        this.Q1.position(50,120);
        var radio1 = createRadio();
        radio1.option("Estimate");
        radio1.option("Everyone");
        radio1.option("Envelope");
        radio1.option("Example")
        radio1.position(50,180);
        var submit = createButton("Submit");
        submit.position(850,400);

        this.Q2.html("Q2. Which is the biggest English alphabet that contains the most water in it?");
        this.Q2.position(50,200);
        var radio2 = createRadio();
        radio2.option("Letter 'M'");
        radio2.option("Letter 'F'");
        radio2.option("Letter 'Z'");
        radio2.option("Letter 'C'");
        radio2.position(50,260);

        this.Q3.html("Q3. What has a head and a tail but no body?What has a head and a tail but no body?");
        this.Q3.position(50,280);
        var Q3Ans = createInput("");
        Q3Ans.position(80,330);

        this.Q4.html("Q4. What is between Sun and Earth?");
        this.Q4.position(50,340);
        var Q4Ans = createInput("");
        Q4Ans.position(80,390);

        this.greeting.html("Hello "+ this.name + "!");
        this.greeting.position(width/2-200,height/4-60);

        submit.mousePressed(()=>{
        var answer1 = radio1.value();
        var answer2 = radio2.value();
        var answer3 = Q3Ans.value();
        var answer4 = Q4Ans.value();
            this.Q1.hide();
            this.Q2.hide();
            this.Q3.hide();
            this.Q4.hide();
            radio1.hide();
            radio2.hide();
            submit.hide();
            Q3Ans.hide();
            Q4Ans.hide();

            this.greeting.hide();
            if(answer1 === this.correctAns1){
                this.score++;
            }
            if(answer2 === this.correctAns2){
                this.score++;
            }
            if(answer3 === this.correctAns3){
                this.score++;
            }
            if(answer4 === this.correctAns4){
                this.score++;
            }
            this.scoreElement.html("You have scored: "+this.score);
            this.scoreElement.position(470,100);
            this.Answers.html("Answers :")
            this.Answers.position(300,150);
            this.ans1.html("1. Envelope");
            this.ans1.position(300,180);
            this.ans2.html("2. Letter 'C'");
            this.ans2.position(300,210);
            this.ans3.html("3. coin");
            this.ans3.position(300,240);
            this.ans4.html("4. and");
            this.ans4.position(300,270);
        })
    }
}