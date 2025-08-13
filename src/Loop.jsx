function Application (){
   const UserData=[
         {
            name:"abhi",
            age: "22",
            email:"abhi01@gmail.com",
            id:1
            
         },

          {
            name:"vijay",
            age: "24",
            email:"vijay03@gmail.com",
            id:2
            
         },

            {
            name:"vishal",
            age: "23",
            email:"vishal01@gmail.com",
            id:3
            
         }
   ]
   
    return(
        <div>
            <table border={"2"}>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>age</td>
                        <td>email</td>
                        <td>id</td>
                    </tr>
                </thead>
                <tbody>

                    {
                        UserData.map((user)=>(  <tr>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.id}</td>
                    </tr>))
                    }
                </tbody>
            </table>
            <h3>dummy data</h3>
           <table border={"2"}>
            <thead>
                <tr>
                    <td>name</td>
                    <td>age</td>
                    <td>email</td>
                    <td>id</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ajay</td>
                    <td>23</td>
                    <td>ajay@gmail.com</td>
                    <td>01</td>
                </tr>
                  <tr>
                    <td>vijay</td>
                    <td>25</td>
                    <td>vijay@gmail.com</td>
                    <td>03</td>
                </tr>
                  <tr>
                    <td>sanket</td>
                    <td>21</td>
                    <td>sanket@gmail.com</td>
                    <td>001</td>
                </tr>
            </tbody>
           </table>
        </div>
    )
}
export default Application;