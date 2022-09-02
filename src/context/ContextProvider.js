import react, {useState, useEffect} from 'react';
import AppContext from '.';
import App from '../App';

const ContextProvider = (props) => {
    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        fetch('https://provident-life.herokuapp.com/user/prefetch')
        .then(res => res.json())
        .then(data => console.log(data));
    }, [])

    const context = {
        user,
        setUser,
        isAuth,
        setIsAuth
    };

    if(isAuth === true) {
        setTimeout(() => {
            setIsAuth(false);
            setUser({});
            window.localStorage.clear();
        }, (1000 * 60 * 60));
    };

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    )
};

export default ContextProvider;