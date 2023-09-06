import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronLeft, faChevronRight, faList } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const userApi = 'https://jsonplaceholder.typicode.com/users';

        fetch(userApi)
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className={cx('app__container')}>
            <div className={cx('grid')}>
                <div className={cx('grid__row', 'app__content')}>
                    <div className={cx('grid__column-2')}>
                        <div className={cx('category')}>
                            <h3 className={cx('category__heading')}>
                                <FontAwesomeIcon icon={faList} className={cx('category__heading-icon')} />
                                Danh mục Công việc
                            </h3>
                            <ul className={cx('category-list')}>
                                {userData.map((user) => (
                                    <li key={user.id} className={cx('category-item', 'category-item--active')}>
                                        <a href="/" className={cx('category-item__link')}>
                                            {user.username}
                                        </a>
                                    </li>
                                ))}

                                {/* <li className={cx('category-item')}>
                                    <a className={cx('category-item__link')}>Marketing</a>
                                </li>
                                <li className={cx('category-item')}>
                                    <a className={cx('category-item__link')}>Lái xe</a>
                                </li>
                                <li className={cx('category-item')}>
                                    <a className={cx('category-item__link')}>Chăm sóc khách hàng</a>
                                </li>
                                <li className={cx('category-item')}>
                                    <a className={cx('category-item__link')}>Kế toán</a>
                                </li>
                                <li className={cx('category-item')}>
                                    <a className={cx('category-item__link')}>An ninh & Bảo vệ</a>
                                </li>
                                <li className={cx('category-item')}>
                                    <a className={cx('category-item__link')}>Thiết kế, sáng tạo nghệ thuật</a>
                                </li>
                                <li className={cx('category-item')}>
                                    <a className={cx('category-item__link')}>Kiến trúc, thiết kế nội thất</a>
                                </li>
                                <li className={cx('category-item')}>
                                    <a className={cx('category-item__link')}>IT phần cứng & Mạng & Viễn Thông</a>
                                </li>
                                <li className={cx('category-item')}>
                                    <a className={cx('category-item__link')}>IT phần mềm</a>
                                </li>
                                <li className={cx('category-item')}>
                                    <a className={cx('category-item__link')}>Ngân hàng</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('grid__column-10')}>
                        <div className={cx('home-filter')}>
                            <span className={cx('home-filter__label')}>Sắp xếp theo</span>
                            <button className={cx('home-filter__btn', 'btn')}>Phổ biến</button>
                            <button className={cx('home-filter__btn', 'btn', 'btn--primary')}>Mới nhất</button>
                            <button className={cx('home-filter__btn', 'btn')}>Tuyển gấp</button>

                            <div className={cx('select-input')}>
                                <span className={cx('select-input__label')}>Mức Lương</span>
                                <FontAwesomeIcon icon={faChevronDown} className={cx('select-input__icon')} />
                                <ul className={cx('select-input__list')}>
                                    <li className={cx('select-input__item')}>
                                        <a href="/" className={cx('select-input__link')}>
                                            Lương: Thấp đến cao
                                        </a>
                                    </li>
                                    <li className={cx('select-input__item')}>
                                        <a href="/" className={cx('select-input__link')}>
                                            Lương: Cao đến thấp
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('home-filter__page')}>
                                <span className={cx('home-filter__page-num')}>
                                    <span className={cx('home-filter__page-current')}>1</span>
                                    /14
                                </span>
                                <div className={cx('home-filter__page-control')}>
                                    <a
                                        href="/"
                                        className={cx('home-filter__page-btn', 'home-filter__page-btn--disabled')}
                                    >
                                        <FontAwesomeIcon
                                            icon={faChevronLeft}
                                            className={cx('home-filter__page-icon')}
                                        />
                                    </a>
                                    <a
                                        href="/"
                                        className={cx('home-filter__page-btn', 'home-filter__page-btn--disabled')}
                                    >
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                            className={cx('home-filter__page-icon')}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('home-product')}>
                            <div className={cx('grid__row')}>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/">
                                        <img
                                            className={cx('home-product-img')}
                                            alt=""
                                            src="https://cdn1.vieclam24h.vn/images/default/2021/10/29/images/img_vieclam24h_vn_163549364871.png"
                                        />
                                        <div className={cx('container__car-item-info')}>
                                            <div className={cx('container__car-item-head')}>
                                                <h5 className={cx('container__car-item-name')}>
                                                    Nhân Viên Kinh Doanh - Thu Nhập Từ 15 Đến 20 Triệu
                                                </h5>
                                                <div className={cx('container__car-item-price-wrap')}>
                                                    <span className={cx('container__car-item-price')}>TP.HCM</span>
                                                </div>
                                            </div>
                                            <div className={cx('container__car-item-body')}>
                                                <span className={cx('container__car-item-description')}>
                                                    Lương 3 - 5 triệu
                                                </span>
                                                <span className={cx('container__car-item-remove')}>Apply</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
