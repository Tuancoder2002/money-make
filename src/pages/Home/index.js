import React, { useState } from 'react';
import Sidebar from '~/pages/Sidebar';
import Header from '~/pages/Header';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const [viviData, setViviData] = useState([
        { id: 1, name: 'Ví 1 - Tiền mặt', amount: '5.000.000' },
        { id: 2, name: 'Ví 2 - Thẻ tín dụng', amount: '300.000' },
    ]);

    const [editMode, setEditMode] = useState(false);
    const [editViviIndex, setEditViviIndex] = useState(null);
    const [editViviName, setEditViviName] = useState('');
    const [editViviAmount, setEditViviAmount] = useState('');

    const handleDeleteVivi = (id) => {
        const updatedViviData = viviData.filter((vivi) => vivi.id !== id);
        setViviData(updatedViviData);
    };

    const handleEditVivi = (index) => {
        setEditViviIndex(index);
        setEditViviName(viviData[index].name);
        setEditViviAmount(viviData[index].amount);
        setEditMode(true);
    };

    const handleShowNewViviFields = () => {
        setEditViviIndex(null);
        setEditViviName('');
        setEditViviAmount('');
        setEditMode(true);
    };

    const handleCancelEdit = () => {
        setEditMode(false);
        setEditViviIndex(null);
        setEditViviName('');
        setEditViviAmount('');
    };

    const handleSaveVivi = () => {
        if (editMode) {
            const updatedViviData = [...viviData];
            if (editViviIndex !== null) {
                updatedViviData[editViviIndex] = {
                    ...updatedViviData[editViviIndex],
                    name: editViviName,
                    amount: editViviAmount,
                };
            } else {
                const newVivi = {
                    id: viviData.length + 1,
                    name: editViviName,
                    amount: editViviAmount,
                };
                updatedViviData.push(newVivi);
            }
            setViviData(updatedViviData);
        }

        handleCancelEdit();
    };

    return (
        <div className={cx('app__container')}>
            <Header className={cx('app__header')} />
            <div className={cx('app__wrapper')}>
                <Sidebar className={cx('app__sidebar')} />
                <div className="container mt-5">
                    <div>
                        
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <table className="table table-dark">
                                    <thead>
                                        <tr>
                                            <th colSpan="3">Ví của tôi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="3">
                                                {!editMode ? (
                                                    <button
                                                        className="btn btn-primary"
                                                        onClick={handleShowNewViviFields}
                                                    >
                                                        Thêm ví
                                                    </button>
                                                ) : (
                                                    <div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Tên ví"
                                                                value={editViviName}
                                                                onChange={(e) => setEditViviName(e.target.value)}
                                                                style={{ width: '50%' }}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Số tiền"
                                                                value={editViviAmount}
                                                                onChange={(e) => setEditViviAmount(e.target.value)}
                                                                style={{ width: '50%' }}
                                                            />
                                                        </div>
                                                        <button className="btn btn-success" onClick={handleSaveVivi}>
                                                            Lưu
                                                        </button>
                                                        <button className="btn btn-danger" onClick={handleCancelEdit}>
                                                            Hủy bỏ
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                        {viviData.map((vivi, index) => (
                                            <tr key={vivi.id}>
                                                <td>{vivi.name}</td>
                                                <td>{vivi.amount}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-primary"
                                                        onClick={() => handleEditVivi(index)}
                                                    >
                                                        Sửa ví
                                                    </button>
                                                    <button
                                                        className="btn btn-danger ms-4"
                                                        onClick={() => handleDeleteVivi(vivi.id)}
                                                    >
                                                        Xoá ví
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
