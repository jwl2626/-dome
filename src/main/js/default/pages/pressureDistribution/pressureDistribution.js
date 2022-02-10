import router from '@system.router';

var pressures =[];

export default {
    data: {
        timeRange: ["00:00", "06:00", "12:00", "18:00","24:00"],
        maxmin: [{
                     iconName: "",
                     mValue: 0
                 },
                 {
                     iconName: "",
                     mValue: 0
                 }],
    },
    onInit() {
        for (let i = 0; i < 48; i++) {
            pressures.push(this.getRandomInt(1,99));
        }
        this.maxmin[0].mValue = Math.max.apply(null,pressures);
        this.maxmin[1].mValue = Math.min.apply(null,pressures);

        this.maxmin[0].iconName = "max-" + this.getColorNameByValue(this.maxmin[0].mValue);
        this.maxmin[1].iconName = "min-" + this.getColorNameByValue(this.maxmin[1].mValue);
    },
    getRandomInt(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getColorNameByValue(value) {
        if (value >= 80 && value <= 99) {
            return "orange";
        } else if (value >= 60 && value <= 79) {
            return "yellow";
        } else if (value >= 30 && value <= 59) {
            return "cyan";
        } else if (value >= 1 && value <= 29) {
            return "blue";
        }
    },
    onShow() {
        var context = this.$refs.canvas.getContext('2d');

        let leftTopX = 0;
        pressures.forEach(element => {
            context.fillStyle = this.getColorHexByValue(element);

            let leftTopY = 80 - element * 0.8;
            let width = 7;
            let height = element * 0.8;

            context.fillRect(leftTopX,leftTopY,width,height);

            leftTopX += 8;
        });
    },
    getColorHexByValue(value) {
        if (value >= 80 && value <= 99) {
            return "#ffa500";
        } else if (value >= 60 && value <= 79) {
            return "#ffff00";
        } else if (value >= 30 && value <= 59) {
            return "#00ffff";
        } else if (value >= 1 && value <= 29) {
            return "#0000ff";
        }
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
                    uri: 'pages/VOzmaxpage/VOzmaxpage'
                });
                break;
            case 'down':
                router.replace({
                    uri: 'pages/report3/report3'
                });
        }
    }
}
