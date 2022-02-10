import router from '@system.router';

export default {
    data: {
        states: [
            {
                state: '焦虑 80-99',
                percent: 0,
                color: '#ffa500',
            },
            {
                state: '紧张 60-79',
                percent: 0,
                color: '#ffff00',
            },
            {
                state: '正常 30-59',
                percent: 0,
                color: '#00fff0',
            },
            {
                state: '放松 1-29',
                percent: 0,
                color: '#000fff',
            }
        ]
    },
    onInit() {
        let stateData = [];
        for (let i = 0; i < 20; i++) {
            stateData.push(this.getRandomInt(1, 99));
        }
        this.countStatePercent(stateData);
    },
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    countStatePercent(stateData) {
        let counter0 = 0;
        let counter1 = 0;
        let counter2 = 0;
        let counter3 = 0;

        for (let index = 0; index < stateData.length; index++) {
            let currentData = stateData[index];

            if (currentData >= 80 && currentData <= 99) {
                counter0++;
            } else if (currentData >= 60 && currentData <= 79) {
                counter1++;
            } else if (currentData >= 30 && currentData <= 59) {
                counter2++;
            } else if (currentData >= 1 && currentData <= 29) {
                counter3++;
            }
        }
        this.states[0].percent = counter0 / stateData.length * 100;
        this.states[1].percent = counter1 / stateData.length * 100;
        this.states[2].percent = counter2 / stateData.length * 100;
        this.states[3].percent = counter3 / stateData.length * 100;
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
                    uri: 'pages/report2/report2'
                });
        }
    }
}
