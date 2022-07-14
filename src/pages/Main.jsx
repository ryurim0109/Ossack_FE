import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Sale, PopUp } from '../components/main/index';
import { Bar, NotUser } from '../components/shared/home';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

function Main() {
	//const appDispatch = useAppDispatch();
	const [showPopUp, setShowPopUp] = useState(false);
	const HAS_VISITED_BEFORE = localStorage.getItem('hasVisitedBefore');
	// const login = useSelector((state) => state.user.is_login);
	// const is_session = localStorage.getItem("token");
	// useEffect(() => {
	//   dispatch(userActions.loginCheckApi());
	// }, [dispatch]);

	useEffect(() => {
		const handleShowModal = () => {
			if (HAS_VISITED_BEFORE && HAS_VISITED_BEFORE > new Date()) {
				return;
			}

			if (!HAS_VISITED_BEFORE) {
				setShowPopUp(true);
				let expires = new Date();
				expires = expires.setHours(expires.getHours() + 24);
				localStorage.setItem('hasVisitedBefore', expires);
			}
		};

		const timeout = window.setTimeout(handleShowModal, 200);
		return () => clearTimeout(timeout);
	}, [HAS_VISITED_BEFORE]);
	const handleClose = () => setShowPopUp(false);

	// if (!login || !is_session) {
	//   return (
	//     <React.Fragment>
	//       <NotUser />
	//     </React.Fragment>
	//   );
	// } else {
	const CountCloser = () => {
		let count = 0;
		let addCount = () => {
			count++;
		};
		let downCount = () => {
			count--;
		};
		let getCount = () => {
			console.log(count);
		};
		return { addCount, downCount, getCount };
	};
	let count1 = CountCloser();
	let count2 = CountCloser();
	return (
		<React.Fragment>
			<div
				onClick={count1.addCount}
				style={{
					width: '100%',
					height: '200px',
					backgroundColor: 'red',
				}}>
				count 1 + 1
			</div>
			<div
				onClick={count1.downCount}
				style={{
					width: '100%',
					height: '200px',
					backgroundColor: 'red',
				}}>
				count 1 - 1
			</div>
			<div
				onClick={count1.getCount}
				style={{
					width: '100%',
					height: '200px',
					backgroundColor: 'red',
				}}>
				getCount 1
			</div>
			<div
				onClick={count2.addCount}
				style={{
					width: '100%',
					height: '200px',
					backgroundColor: 'blue',
				}}>
				count 2 + 1
			</div>
			<div
				onClick={count2.downCount}
				style={{
					width: '100%',
					height: '200px',
					backgroundColor: 'blue',
				}}>
				count 2 - 1
			</div>
			<div
				onClick={count2.getCount}
				style={{
					width: '100%',
					height: '200px',
					backgroundColor: 'blue',
				}}>
				getCount2
			</div>
			<Outter>
				<Sale />
			</Outter>
			<Bar />
			{showPopUp ? (
				<>
					<ModalBackdrop onClick={handleClose}></ModalBackdrop>
					<PopUp showPopUp={showPopUp} setShowPopUp={handleClose} />
				</>
			) : null}
		</React.Fragment>
	);
}
// }
const Outter = styled.div`
	width: 100%;
	padding-bottom: 90px;
`;

const ModalBackdrop = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	z-index: 999;
	justify-content: center;
	align-items: center;
	background: rgba(153, 153, 153, 0.77);
`;
export default Main;
