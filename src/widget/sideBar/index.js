/**
 * @file: 侧栏
 */

define(
    function (require) {

        var lib = require('../../common/lib');
        var Control = require('../../common/control');

        /**
         * checkbox 主类
         * @param {HtmlElement} target 对象
         */
        function SideBar (target, options) {
            Control.call(this, target, options);
        }

        SideBar.prototype.type = 'sidebar'; // 组件类型

        // 组件默认的option 一般是肯定存在的
        SideBar.prototype.defaultOptions = {
            autoSlideOpen: false,
            slideOrientation: 'left' // left right botton
        };

        /**
         * 事件
         */
        SideBar.prototype.initEvents = function () {
            var me = this;
            this.main.addClass(this.getSubClassName('from-'
                + this.option.slideOrientation));

            $(document).on('click', '[open-sidebar="'+ this.main.attr('id') + '"]', function(e) {
                me.open();
            });

            $(document).on('click', '[close-sidebar="'+ this.main.attr('id') + '"]', function(e) {
                me.close();
            });
        }

        /**
         * 打开侧栏
         */
        SideBar.prototype.open = function () {
            $('body').addClass(this.getSubClassName(this.option.slideOrientation));
            this.main.addClass(this.getSubClassName('active'));
        }

        /**
         * 关闭侧栏
         */
        SideBar.prototype.close = function () {
            var me = this;
            if (me.timer) {
                clearTimeout(me.timer);
            }
            $('body').removeClass(this.getSubClassName(this.option.slideOrientation));
            this.timer = setTimeout(function () {
                me.main.removeClass(me.getSubClassName('active'));
            }, 400)
        }

        return lib.inherits(SideBar, Control);
    }
);

