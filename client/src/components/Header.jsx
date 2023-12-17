import { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext";

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: "include"
        }).then(responce => {
            responce.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, [setUserInfo]);

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        })
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <header>
            <Link className='logo' to='/'>TypeQuest</Link>
            <nav>
                {username && (
                    <>
                        <span>Hello, {username}</span>
                        <Link to='/create'>Create new post</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header