import Home from '~/pages/Home';

import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';

//nhung router khong can dang nhap van xem duoc
const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile}
];

// nhung router dang nhap moi xem duoc
const privateRoutes = [];

export  { publicRoutes, privateRoutes };
