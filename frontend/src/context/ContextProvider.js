import react, {useState} from 'react';
import AppContext from '.';
import App from '../App';

const ContextProvider = (props) => {
    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);

    const context = {
        user,
        setUser,
        isAuth,
        setIsAuth
    }

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    )
};

export default ContextProvider;