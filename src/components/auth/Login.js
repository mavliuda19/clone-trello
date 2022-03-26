import {useDispatch} from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from './Form';
import { Link } from 'react-router-dom'
import {setUser} from '../../store/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
               return navigate('/home');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (<><Form
            title={<Link to='/register'>
				<h2> or Register</h2>
			</Link>}
            handleClick={handleLogin}
        />
        	
    </>
        
    )
}

export {Login}