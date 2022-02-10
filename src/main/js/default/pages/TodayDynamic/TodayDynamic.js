import router from '@system.router';

export default {
    data: {
        timeRange: ["07:00", "12:00", "17:00", "22:00"],
        activityData: [
            {
                iconName: "red",
                text: "活动",
                percent: 0
            }, {
                iconName: "gray",
                text: "静止",
                percent: 0
            }
        ],
        options: {
            xAxis: {
                axisTick: 21
            },
            yAxis: {
                max: 1,
                axisTick: 20,
            }
        },
        datasetsStatic: [
            {
                fillColor: '#8D8165',
                data: []
            }
        ],
        datasets: [
            {
                data: [],
                fillColor: "#CDCDCD",
            }
        ]
    },
    onInit() {
        let activities = [];
        let activitiesStatic =[];
        for (let i = 0; i < 20; i++) {
            let rand = this.getRandomZeroOrOne();
            activities.push(rand);
            activitiesStatic.push(Math.abs(rand - 1));
        }
        this.datasets[0].data = activities;
        this.datasetsStatic[0].data = activitiesStatic;
        this.countActivityPercent(activities);
    },
    getRandomZeroOrOne() {
        return Math.floor(Math.random() + 0.5);
    },
    countActivityPercent(activities) {
        let count = 0;
        for (let index = 0; index < activities.length; index++) {
            if (activities[index] == 1) {
                count++;
            }
        }
        this.activityData[0].percent = Math.round(count / activities.length * 100);
        this.activityData[1].percent = 100 - this.activityData[0].percent;
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
                    uri: 'pages/pressureDistribution/pressureDistribution'
                });
            case 'down':
                router.replace({
                    uri: 'pages/report2/report2'
                });
        }
    }
}
