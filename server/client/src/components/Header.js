import React from 'react'
import { connect } from 'react-redux';

import CitiesList from './CitiesList';
import InputCity from './InputCity';
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

    renderListContent() {
        switch (this.props.auth) {
            case null: {
                return;
            }

            case false: {
                return;
            }

            default: {
                return (
                    <div className='box header_list'>
                        {<CitiesList />}
                    </div>
                )
            }
        }
    }

    renderListContentHelper() {

    }


    render() {
        return (
            <div className='header'>
                <div className='box header_app'>
                    Simon Weather
                </div>
                {this.renderListContent()}
                <div className='box header_date'>
                    date
                </div>
                <div className='box header_city'>
                    <InputCity />
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