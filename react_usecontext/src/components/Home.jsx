import { useContext } from 'react';
import  UserContext  from '../UserContext';
export default function Home (){

    const { user } = useContext(UserContext);

    return( 
    <div>
      {user.username ? (
        <p>Welcome Back {user.username}. You logged in at {user.lastLogIn}.</p>
      ) : (
        <p>Welcome, please login.</p>
      )}
    </div>
  );
}