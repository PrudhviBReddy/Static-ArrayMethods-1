class Marks{
    static passMarks=35;
    
    static prudhviDetails=()=>{
        console.log("Hi this is Static and Array methods class");
    }
    constructor(teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks){
this.teluguMarks = 0;
this.hindiMarks = 0;
this.englishMarks = 0;
this.mathsMarks = 0;
this.scienceMarks = 0;
this.socialMarks = 0;

    }


    calculateResult=()=>{
        if(this.teluguMarks>= Marks.passMarks &&
            this.hindiMarks>= Marks.passMarks  &&
            this.englishMarks>= Marks.passMarks &&
            this.mathsMarks>= Marks.passMarks &&
            this.scienceMarks>=  Marks.passMarks && 
            this.socialMarks>= Marks.passMarks){
           console.log("Student has passed in the exams");
        }else{
            console.log("Student has failed in the exams");
        }
    }
}
export default Marks;