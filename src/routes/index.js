import Home from '~/pages/Home';
import Following from '~/pages/Following';

//nhung router khong can dang nhap van xem duoc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];

// nhung router dang nhap moi xem duoc
const privateRoutes = [];

export  { publicRoutes, privateRoutes };
