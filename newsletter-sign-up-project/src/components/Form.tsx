 export default function Form(){
 return(
        <div className="form-container">
          <form>
        <label htmlFor="email">Email Address</label><br></br>
        <input className="input-email" type="email"
                id="email"
                name="email"
                placeholder="email@company.com"
                /><br></br>

       <button  className="btn-form"  type="submit"> Subscribe to monthly newsletter</button>
       </form>      
        </div>
      
 )
 
 }
 
