import router from '@system.router';

var x = 0;
var y = 0;

export default {
    data: {
        isShow: true,
        first: "",
        second: "",
        level: "",
        styles: [
            {
                color: "#ff0000",
                startAngle: 220
            },
            {
                color: "#ffa500",
                startAngle: 260
            },
            {
                color: "#ffd700",
                startAngle: 300
            },
            {
                color: "#ffff00",
                startAngle: 340
            },
            {
                color: "#adff2f",
                startAngle: 20
            },
            {
                color: "#00ffff",
                startAngle: 60
            },
            {
                color: "#4169e1",
                startAngle: 100
            },
        ],
    },
    onInit() {
        let vo2max = this.getRandomInt(1, 70);

        let vo2max_str = vo2max.toString();
        if (vo2max_str.length == 2) {
            this.first = "num-" + vo2max_str[0];
            this.second = "num-" + vo2max_str[1];
        } else {
            this.second = "num-" + vo2max_str;
            this.isShow = false;
        }

        this.level = this.getLevelByValue(vo2max);

        let angle = -230 + vo2max * (280 / 70);
        x = Math.round(218 + 193 * Math.cos(angle * Math.PI / 180));
        y = Math.round(218 + 193 * Math.sin(angle * Math.PI / 180));
    },
    onShow() {
        var context = this.$refs.canvas.getContext("2d");
        context.fillStyle = "#ffff00";
        context.fillText("*" , x, y);
    },
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
    getLevelByValue(value) {
        let levels = ["超低", "低", "较低", "一般", "高", "优秀", "卓越"];
        let index = Math.floor((value - 1) / 10);
        return levels[index];
    },
    toNextPage(e) {
        switch (e.direction) {
            case 'left':
                router.replace({
                    uri: 'pages/index/index'
                });
                break;
            case 'up':
                router.replace({
                    uri: 'pages/contact/contact'
                });
                break;
            case 'down':
                router.replace({
                    uri: 'pages/report4/report4'
                });
        }
    }
}
