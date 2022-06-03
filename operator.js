// que1::Add two NumbersYou are provided with two numbers A and B.
//       Your task is to add these two numbers.

const AddTwoNumbers = (a,b) => {
    result= (a + b);
    
      
    
   }; 
    
//    que2::Find if the conditions are obeyed or not?You are given two number
//          first as A and second as B and check if both conditions (A<10 and A>B)
//          are satisfied or not with the help of operators.
   
const Is_Valid = (a,b) => {
    return (a<10 ) && (a>b)? true:false
    
   
   };
   
    // que3::Check the conditons You are given two numbers A and B.
    //       You need to do the following checks:
    //   1) if both are divisible by 10 console true.
    //   2) if both are not divisible by 10 console false.
    //   3) if one of them only is divisible by 10 console true.
    const Check = (A, B) => 
    {
       
       if(A%10 == 0 && B%10 == 0){
         return true;
       }
       else if (A%10 !=0 && B%10 !=0){
         return false;
       }
       else{
         return true;
       }
    };
         
// que4::Find the first digit of a 4 digit number You are provided a four 
//       digit number N only.Your task is to print out the first digit of 
//       that number.   
   

const First_Digit = (n) => {
   
    return parseInt(n/1000);
      
   };
   // 01101110 n

// que5::Find the last digit of a 4 digit number You are provided a four digit
//       number N only. Your task is to print out the last digit of that number.

const Last_Digit = (n) => {
  
    return parseInt(n%10);
     
  };
  
//  que6:: Find the remainder You are provided with two numbers A and B
//         A as  divisor and B as  dividend.Your task is find the remainder.
 
 
const Find_the_remainder = (a,b) => {
    
    return  (b%a)
     
     
 };
 
// que7::Multipy two Numbers You are provided with two numbers A and B.
//       Your task is to multiply these two numbers.


const Multiply_two_number = (a,b) => {
    
    return(a*b)
    
};

// que8::Shyam has got his marks in three subjects as A, B and C (out of 100).
//       Write a program to calculate his total marks and his total percentage.
const Sum = (A, B, C) =>
{
  return A+B+C
};
const Average= (A, B, C) => 
{
 return (A+B+C)/3
};
 










