function UserName()
{
  return(
     <input type="text" placeholder="USerName Trial" id="usnm"></input> 
  );
}

function Password()
{
  return(
    <input type="password" placeholder="password" id="pass"></input> 
  );
}

function Submit()
{
  return(
    <input type="button" id="sbmt" onclick="location.href='Dash.html'" value="Go"></input>
  );
}

function LinkTo(props)
{
  return(
    <a href={props.target}>{props.children}</a>
  );
}



function Main_test()
{
  return(
   <div> <h1>Enter UserName:</h1> <UserName></UserName> <h1>Enter Password:</h1> <Password></Password> <br></br> <br></br><Submit></Submit> <br></br> <LinkTo target="ForgotPassword.html" >Forgot Password?</LinkTo> <br></br> <LinkTo target="SignUp.html" >New? Sign Up!</LinkTo> </div>
  );
}

export default Main_test;