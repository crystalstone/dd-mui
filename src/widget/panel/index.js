/**
 * @file: panel 侧边栏
 */

define(
    function (require) {

        require('less!./style');

        var lib = require('common/lib');
        var Control = require('common/control');

        /**
         * 侧边栏，主类
         * @param {HtmlElement} target 对象
         *
         */

        function Panel (target, options) {
            Control.call(this, target, options);
        }

        Panel.prototype.type = 'panel';
        Panel.prototype.defaultOptions = {
            swipeOrientation: 'left' // 滑出的方向：左、右、下
        };

        /**
         * 打开panel
         */
        Panel.prototype.openPanel = function () {

            this.main.trigger('opened');
        }

        /**
         * 关闭panel
         */
        Panel.prototype.openPanel = function () {

            this.main.trigger('closed');
        }

        return lib.inherits(Panel, Control);
    }
);

