import { useNavigate } from 'react-router-dom'
import { Button, Container, Navbar } from 'react-bootstrap'
import axios from 'axios'
import { isAuthenticated } from '../js/authentication'

function Header(props) {
    const navigate = useNavigate()

    return (
        <header>
            <Navbar className="bg-dark">
                <Container className="text-secondary">
                    <Navbar.Brand className="text-secondary" href="/">
                        Admin UI
                    </Navbar.Brand>
                    {
                        isAuthenticated()
                            ?
                            <>
                                <Button className='ms-3 me-auto' onClick={props.onAddItemClick}>Add new</Button>
                                <span className='ms-auto me-3'>{localStorage.getItem('email')}</span>
                                <button className='btn btn-secondary' onClick={logout}>Logout</button>
                            </>
                            : null
                    }
                </Container>
            </Navbar>
        </header>
    )

    function logout() {
        axios.get('/api/logout').then(() => {
            localStorage.setItem('authenticated', 'false')
            navigate('/login')
        })
    }
}

export default Header
