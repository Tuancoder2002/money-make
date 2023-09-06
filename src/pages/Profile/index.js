import React from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div>
            <nav className={cx('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light')}>
                <button
                    className={cx('navbar-toggler')}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className={cx('navbar-toggler-icon')}></span>
                </button>
                <div className={cx('collapse', 'navbar-collapse')} id="navbarTogglerDemo01">
                    <a className={cx('navbar-brand')} href="/">
                        Manage Money
                    </a>

                    <ul className={cx('navbar-nav', 'mr-auto', 'mt-2', 'mt-lg-0', 'xxx')}>
                        <li className={cx('nav-item', 'active')}>
                            <a className={cx('nav-link')} href="/">
                                Transactions
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a className={cx('nav-link')} href="/">
                                Report
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a className={cx('nav-link', 'disabled')} href="/">
                                Store
                            </a>
                        </li>
                        <li>
                            <form className={cx('form-inline', 'my-2', 'my-lg-0')}>
                                <input
                                    className={cx('form-control', 'mr-sm-2')}
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </form>
                        </li>
                    </ul>

                    <button className={cx('btn', 'btn-outline-success', 'my-2', 'my-sm-0')} type="submit">
                        Search
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Profile;
