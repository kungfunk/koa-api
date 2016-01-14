'use strict';

module.exports = function() {

    return function *consoleLog(next) {
        var date = new Date;

        var logParams = {
            ip : this.request.ip,
            day : date.getDate(),
            month : date.getMonth()+1,
            year : date.getFullYear(),
            hours : date.getHours(),
            minutes : date.getMinutes(),
            seconds : date.getSeconds()
        };

        var msg = 'API Access: IP('+logParams.ip+') '+logParams.day+'/'+logParams.month+'/'+logParams.year+' : '+logParams.hours+':'+logParams.minutes+':'+logParams.seconds

        console.log(msg);
        yield next;
    }
}
