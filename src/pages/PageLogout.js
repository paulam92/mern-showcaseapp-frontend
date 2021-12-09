import { useContext } from 'react';
import AppContext from '../AppContext';
import { useNavigate } from 'react-router-dom';

const PageLogout = () => {
	const { setCurrentUser, currentUserIsInGroup } = useContext(AppContext);
	const navigate = useNavigate();

	const handle_logoutForm_logoutButton = async (e) => {
		const requestOptions = {
			method: 'GET',
			credentials: 'include'
		};
		const response = await fetch('http://localhost:3003/logout', requestOptions);
		if (response.ok) {
			const _currentUser = await response.json();
			setCurrentUser(prev => ({ ...prev, ..._currentUser }));
			navigate('/login');
		}
	}

	return (
		<>
			{currentUserIsInGroup('loggedInUsers') && (
				<>
				<p>To confirm logout, please click the button:</p>
				<div><button onClick={handle_logoutForm_logoutButton}>Logout</button></div>
				</>
			)}
		</>
	)
}

export default PageLogout;