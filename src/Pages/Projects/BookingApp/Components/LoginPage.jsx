

export default function LoginPage(){
    

    function login(){
        
    }
    const handleSubmit = (e) =>{
        login(e)
    }
    return(
        <>
        <form onSubmit={() => handleSubmit(username, password)}>
            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            <button>Submit</button>
        </form>
        </>
    )
}