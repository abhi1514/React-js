function Name(){
    function click(){
        alert("Hello Abhi")
    }
     
     function even(num){
      if(num%2==0){
          return "it is even number"
      } else{
        return "it is odd number"
      }
     }

     function Prime(number){
       let cnt=0;
      for( let i=2; i<number; i++){
        if(number%i==0){
          cnt++
          break;
        }
      }
      if(cnt===0 && number>1){
        return "is prime Number"
      } else{
        return "not prime Number"
      }
     }

    let Name="Kolhapur"
    return (<div>
        <h1 id="ab">
         Abhishek Bachate
        </h1>
      <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" id="img" />
      <br>
      </br>
      <ul>
        <li>Mango</li>
        <li>Apple</li>
        <li>Banana</li>
      </ul>
      <button onClick={click}>Click</button>
      <h1>{Name}</h1>
      <h3>{Prime(4)}</h3> 
      <h2>{even(4)}</h2>
      {/* <h3>{prime(3)}</h3>  */}

    </div>)
}
export default Name;


