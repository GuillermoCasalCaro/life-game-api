// import React, { useContext, useEffect, useState } from 'react';
import React from 'react';
// import { AppContext } from './AppContext';
// import axios from 'axios';

if (module.hot) {
    module.hot.accept();
}

const App = () => {
    // const [users, setUsers] = useState(null);
    // const { createUser } = useContext(AppContext);

    // useEffect(() => {
    //     if (!users) {
    //         getUsers()
    //             .then(data => setUsers(data))
    //             .catch(err => { console.log(err) });
    //     }
    // }, []);

    // const getUsers = async () => {
    //     const res = await axios.get('/api/getUsers');
    //     const data = await res.data.data;
    //     return data;
    // };

    // const deleteUser = async (id) => {
    //     console.log("Se manda delete");
    //     const res = await axios.post('/api/deleteUser', { name: id });
    //     const data = await res.data.data;
    //     return data;
    // };

    // deleteUser("315737921154973896");
    // deleteUser("315737955705554120");
    // deleteUser("315738010807173312");
    // deleteUser("315738020476093640");
    // deleteUser("315738024284520648");
    // deleteUser("315738051750920391");
    // deleteUser("315738052599219400");
    // deleteUser("315738065640358087");

    // const uuid = async () => {
    //     let { data } = await axios.get('/api/getNewId');
    //     return data;
    // }

    // const CreateUser = async () => {
    //     let new_user = { id: uuid(), name: "prueba1" };
    //     await axios.post('/api/addUser', new_user);
    //     createUser(new_user);
    // }

    // console.log(users);

    return (
        <></>
    );
}

export default App;
