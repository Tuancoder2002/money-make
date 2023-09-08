import React from 'react';
import Sidebar from '~/pages/Sidebar';
import Header from '~/pages/Header';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('app__container')}>
            <Header className={cx('app__header')} />
            <Sidebar className={cx('app__sidebar')} />
            
            {/* Thêm bảng Bootstrap dưới đây */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Header 1</th>
                                    <th scope="col">Header 2</th>
                                    <th scope="col">Header 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Data 1</td>
                                    <td>Data 2</td>
                                    <td>Data 3</td>
                                </tr>
                                <tr>
                                    <td>Data 4</td>
                                    <td>Data 5</td>
                                    <td>Data 6</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
