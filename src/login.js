import React from 'react';
const LoginPage=(props) => {
    const [usia , aturUsia]=React.useState(1);
    const onClicked=() => {
        aturUsia(usia+1);
        console.log()
    
        
    }
    return <div>
    <div>nama : {props.name}</div>
    <div>usia : {usia}</div>
    <button onClick={onClicked}>KLIK</button>
    </div>
}
export default LoginPage;

