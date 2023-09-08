import Home from '~/pages/Home';
import Header from '~/pages/Header';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Sidebar from '~/pages/Sidebar';

//nhung router khong can dang nhap van xem duoc
const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/sidebar', component: Sidebar},
    { path: '/Header', component: Header}
];

// nhung router dang nhap moi xem duoc
const privateRoutes = [];

export  { publicRoutes, privateRoutes };
