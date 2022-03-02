import { useState } from "react";
import User from "../components/User";

const UsersContainer = () => {

    const [user, setUser] = useState({
        "name": "Dave Perry",
        "email": "daveisaledge@gmail.com",
        "card details": {
            "name on card": "Dave Perry",
            "account number": "68723648842",
            "sort code": "60-45-89"
        }})


    return (
        <>
            <User user={user}/>
        </>
    )
}

export default UsersContainer;