import React from 'react'
import { connect } from 'react-redux';

import '../styles/header.scss'

class Header extends React.Component {

    renderLoginContent() {
        switch (this.props.auth) {
            case null: {
                return;
            }

            case false: {
                return (
                    <div className='box header_login'>
                        <a href='/auth/google'>Login with Google</a>
                    </div>);

            }

            default: {
                return (
                    <div className='box header_login'>
                        <a href='/api/logout'>Logout</a>
                    </div>
                )
            }
        }
    }

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
                {this.renderLoginContent()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);