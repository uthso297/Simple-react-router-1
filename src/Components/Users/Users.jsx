import { useLoaderData } from "react-router-dom";
import User from "../user/User";

const Users = () => {

    const users = useLoaderData();
    const styles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '10px'
    }
    return (
        <div >
            <h2>Our Users: {users.length}</h2>
            <div style={styles}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;