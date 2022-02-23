'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

$(document).ready(function () {

    $('#user_table').DataTable();
    $('#sales_table').DataTable();

    // Chart in Dashboard version 2
    var echartElem4 = document.getElementById('echart4');
    if (echartElem4) {
        var echart4 = echarts.init(echartElem4);
        echart4.setOption(_extends({}, echartOptions.lineNoAxis, {
            series: [{
                data: [40, 80, 20, 90, 30, 80, 40],
                lineStyle: {
                    color: 'rgba(102, 51, 153, .86)',
                    width: 3,
                    shadowColor: 'rgba(0, 0, 0, .2)',
                    shadowOffsetX: -1,
                    shadowOffsetY: 8,
                    shadowBlur: 10
                },
                label: { show: true, color: '#212121' },
                type: 'line',
                smooth: true,
                itemStyle: {
                    borderColor: 'rgba(69, 86, 172, 0.86)'
                }
            }]
        }, {
            xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
        }));
        $(window).on('resize', function () {
            setTimeout(function () {
                echart4.resize();
            }, 500);
        });
    }
    // Chart in Dashboard version 2
    var echartElem5 = document.getElementById('echart5');
    if (echartElem5) {
        var echart5 = echarts.init(echartElem5);
        echart5.setOption(_extends({}, echartOptions.defaultOptions, {
            legend: {
                show: true,
                bottom: 0
            },
            series: [_extends({
                type: 'pie'
            }, echartOptions.pieRing, {

                label: echartOptions.pieLabelCenterHover,
                data: [{
                    name: 'Completed',
                    value: 80,
                    itemStyle: {
                        color: '#663399'
                    }
                }, {
                    name: 'Pending',
                    value: 20,
                    itemStyle: {
                        color: '#ced4da'
                    }
                }]
            })]
        }));
        $(window).on('resize', function () {
            setTimeout(function () {
                echart5.resize();
            }, 500);
        });
    }
});