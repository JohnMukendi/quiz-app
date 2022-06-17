const FormFieldPage = () => {
    return ( 
        <>
        <form action="/" method="post">
            <label htmlFor="username">Enter your Name: </label>
            <input type="text" name ='username' placeholder="enter your name" autoFocus required />

            <label htmlFor="difficulty" >Choose a difficulty level</label>
            <input type="radio" name="difficulty" required value="easy" />
            <input type="radio" name="difficulty" value="medium" />
            <input type="radio" name="difficulty" value="hard" />

            <button type="submit">PLAY</button>
        </form>
        
        </>
     );
}
 
export default FormFieldPage;