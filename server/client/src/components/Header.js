import React from 'react'
import { connect } from 'react-redux';

import CitiesList from './CitiesList';
import InputCity from './InputCity';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColorLogin: 'rgba(1, 157, 219,0.5)',
            backgroundColorLogout: ' rgba(253, 0, 0,0.4)'
        };
    }


    renderLoginContent() {
        switch (this.props.auth) {
            case null: {
                return;
            }

            case false: {
                return (
                    <a href='/auth/google' className='box header_login'
                        style={{ backgroundColor: this.state.backgroundColorLogin }}
                        onMouseEnter={e => this.setState({
                            backgroundColorLogin: 'rgba(1, 157, 219,0.8)'
                        })}
                        onMouseOut={e => this.setState({
                            backgroundColorLogin: 'rgba(1, 157, 219,0.5)'
                        })} >
                        Login with Google
                    </a>);

            }

            default: {
                return (
                    <a href='/api/logout' className='box header_login'
                        style={{ backgroundColor: this.state.backgroundColorLogout }}
                        onMouseEnter={e => this.setState({
                            backgroundColorLogout: 'rgba(255,0,0,0.7)'
                        })}
                        onMouseOut={e => this.setState({
                            backgroundColorLogout: 'rgba(255,0,0,0.4)'
                        })} >
                        Logout
                    </a>
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




    render() {
        let date = new Date();
        return (
            <div className='header'>
                <div className='box header_app'>
                    Simon Weather
                </div>
                {this.renderListContent()}
                <div className='box header_date'>
                    {date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()}
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