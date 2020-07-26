class Box{
    constructor(x, y){
        super(x,y,50,50);
        
        this.Visibility=255;
    }
   
    box1=new box(330,235,30,40);
    box2=new box(360,235,30,40);
    box3=new box(390,235,30,40);
    box4=new box(420,23530,40,);
    box5=new box(450,235,30,40);
    box6=new box(360,195,30,40);
    box7=new box(390,195,30,40);
    box8=new box(420,195,30,40);
    box9=new box(390,145,30,40);   

    push();
    this.Visibility=this.Visibility-5;
    tint(255,this.Visibility);

