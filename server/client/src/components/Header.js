import React from 'react'

import '../styles/header.scss'

class Header extends React.Component {


    render() {
        return (
            <div className='header'>
                <div className='box header_app'>
                    app_name
                </div>
                <div className='box header_list'>
                    list
                </div>
                <div className='box header_date'>
                    date
                </div>
                <div className='box header_city'>
                    city
                </div>
                <div className='box header_login'>
                    login
                </div>
            </div>
        )
    }
}

export default Header;