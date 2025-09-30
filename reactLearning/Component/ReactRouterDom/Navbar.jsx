import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="bg-white-500 shadow-lg w-250 mx-auto text-center p-3 flex justify-center items-center">
            <div className='flex w-150 justify-between'>
                <Link className="text-blue-700 mx-auto hover:text-blue-500 " to='/' ><li>Home</li></Link>
                <Link className="text-blue-700  mx-auto hover:text-blue-500 " to='/about' ><li>About</li></Link>
                <Link className="text-blue-700  mx-auto hover:text-blue-500 " to='/user' ><li>User</li></Link>
            </div>

        </nav>


    )
};
export default Navbar;