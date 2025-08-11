function User(){
    function Num(age){
      if(age>=18){
        return "you can drive"
      }
      else if(age<18 && age>=16){
        return "you cannot apply driving license "
      }
       else{
        return 'you are kid'
       }
    }
    return(
        <div>
            <h2> React js+vite</h2>
            <h1>{Num(16)}</h1>
        </div>
    )
    
}


export default User ;
