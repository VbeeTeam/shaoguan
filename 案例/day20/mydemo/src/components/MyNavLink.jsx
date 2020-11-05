import React, { Component } from 'react';

import {NavLink} from "react-router-dom"

class MyNavLink extends Component {
    render() {
        //将外部传入的所有属性传递给NavLink
        return <NavLink {...this.props} activeClassName="activeNav" />
    }
}

export default MyNavLink;