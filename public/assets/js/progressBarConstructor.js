const ProgressBar = function() {
    this.data = {
        x: 0,
        adder: 1,
        bars: [],
    };
    this.barHolder = document.getElementById('bar-holder');
    this.createProgressBar = function (size) {
        this.data['size'] = size;
        for (var i = 0; i < size; i++) {
            const bar = document.createElement('span');
            bar.innerText = '| ';
            bar.setAttribute('class', 'progress-bar progress-bar--inactive');
            this.barHolder.appendChild(bar);
            this.data.bars.push(bar);
        }
    };
    this.startProgressBar = function () {
        this.updateInterval = setInterval(this.updateProgressBar.bind(this), 300);
    };
    this.updateProgressBar = function () {
        const x = this.data.x;
        const adder = this.data.adder;
        const size = this.data.size;
        // update the appropriate bar
        if (x > -1 && x < size){
            if (adder === 1){
                this.data.bars[x].setAttribute('class', 'progress-bar progress-bar--active');
            } else {
                this.data.bars[x].setAttribute('class', 'progress-bar progress-bar--inactive');
            }
        }
        // update adder
        if (x === size){
            this.data['adder'] = -1;
        } else if ( x === -1){
            this.data['adder'] = 1;
        }
        // update x
        this.data['x'] = x + adder;
    };
    this.stopProgressBar = function () {
        clearInterval(this.updateInterval);
    };
};