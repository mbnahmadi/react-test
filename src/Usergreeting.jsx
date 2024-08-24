function Usergreeeting(props){
    if(props.isLogin){
        return <h2 className="welcome-message">Welcome {props.username}</h2>     
    }
    return <h2 className="login-message">please login to continue</h2> 

}

export default Usergreeeting