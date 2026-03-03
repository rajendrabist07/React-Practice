import { useState } from "react";

function UserProfile() {
    const [user, setUser] = useState({
        name: 'Rajendra',
        age: 21,
        email: 'rajendrabist@gmail.com',
        city: 'Dhangadhi'
    });

    const updateCity = () => {
        setUser({
            ...user,
            city: 'Kathmandu'
        });
    };

    const updateAge = () => {
        setUser(prevUser => ({
            ...prevUser,
            age: prevUser.age + 1
        }));
    };

    return (

        <div className="user-box">
            <h1>Object State</h1>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>

            <button onClick={() => updateCity(!updateCity)} >{updateCity ? 'Meve To Kathmandu' : 'Dhangadhi'}</button>
            <button onClick={updateAge}>Increment Age</button>

        </div>

    )
}

export default UserProfile