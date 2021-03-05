const endpoint = './state.php';

const app = new Vue({
    el: '#app',
    data() {
        return {
            data: {}
        }
    },
    methods: {
        get() {
            return new Promise((resolve, reject) => {
                axios.get(endpoint).then(response => {
                    for (let key in response.data) {
                        this.$set(this.data, key, response.data[key])
                    }
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        set() {
            return new Promise((resolve, reject) => {
                axios.post(endpoint, this.data).then(() => {
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
    },
    created() {
        let get = this.get();

        if (typeof isPanel === 'undefined' || isPanel !== true) {
            get.then(() => {
                setInterval(this.get, 1000);
            })
        }
    },
})