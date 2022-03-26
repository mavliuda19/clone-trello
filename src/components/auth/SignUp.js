import {useDispatch} from 'react-redux';
import { useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Form from './Form';
import { Link } from 'react-router-dom'
import {setUser} from '../../store/slices/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                return navigate('/home');
            })
            .catch(console.error)
    }

    return (
        <Form
        title={<><p>Already have an account?</p>
        <Link to='/login'>
            <h3>Sign in</h3>
        </Link>
        </>}
            handleClick={handleRegister}
        />
    )
}

export {SignUp}