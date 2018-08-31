import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function HeaderBar () {
	return (
		<div className="header-bar__container app-header">
			<Nav className="d-md-down-none" navbar>
				<NavItem className="px-3">
					<NavLink href="/">Dashboard</NavLink>
				</NavItem>
			</Nav>
		</div>
	);
}


export default HeaderBar;

