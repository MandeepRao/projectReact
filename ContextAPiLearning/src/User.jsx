import { useState } from "react";
import { contextVal } from "./ContextProvider/ContextProvider";

export const User = () => {
    const { userData, setUserData } = contextVal();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function submitHandler(e) {
        e.preventDefault();
        setUserData({ username, password });
    }
    return (
        <div className="m-auto grid gap-4 ">
            <input type='text'
                placeholder="username"
                value={username}
                className="px-2 border-1 rounded-sm"
                onChange={(e) => { setUsername(e.target.value) }}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                className="px-4 border-1 rounded-sm"
                onChange={(e) => { setPassword(e.target.value) }}
            />

            <button className="px-2 border-1 cursor-pointer rounded-sm" onClick={submitHandler}>Submit</button>
            <div>{userData?.username}</div>
        </div >
    )
}