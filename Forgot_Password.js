function UserName()
{
  return(
     <input type="text" placeholder="USerName" id="usnm"></input> 
  );
}

function Password(props)
{
  return(
    <input type="password" placeholder="*****" id={props.pass_id}></input> 
  );
}


function Question(props)
{
    return(
        <p>{props.children}</p>
    );
}

function Question_a(props)
{
    return(
        <input type="text" placeholder="Answer Here" id="qn"></input>
    );
}

function Submit()
{
  return(
    <input type="button" id="sbmt"  value="Go"></input>
  );
}

function Forgot(props)
{
    return(
        <div><h1>Enter UserName:</h1> <UserName></UserName> <h1>New Password:</h1> <Password pass_id="p1"></Password>  <h1>Confirm New Password:</h1> <Password pass_id="p2"></Password>  <Question>Sample Question</Question> <Question_a></Question_a> <Submit></Submit></div>
    );
}

export default Forgot;
