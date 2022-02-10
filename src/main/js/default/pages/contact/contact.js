import router from '@system.router'

export default {
    data: {
    },
    toNextPage(e) {
        switch (e.direction) {
            case 'left':
                router.replace({
                    uri: 'pages/index/index'
                });
                break;
            case 'down':
                router.replace({
                    uri: 'pages/VOzmaxpage/VOzmaxpage'
                });
        }
    }
}
