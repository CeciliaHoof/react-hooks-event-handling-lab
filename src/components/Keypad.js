// Code Keypad Component Here

function Keypad (){
    function handleClick(){
        console.log("Entering password...")
    }
    return (
        <div>
            <label>password:</label>
            <input id="pass" type="password" onChange={handleClick}/>
        </div>
    )
}

export default Keypad;