/**
 * @file: checkbox 侧边栏
 */

define(
    function (require) {

        require('less!./style');
        var lib = require('common/lib');
        var Control = require('common/control');

        var STATE = {
            'DISABLED': 'disabled',
            'CHECKED': 'checked',
            'DEFAULT': 'default'
        }

        /**
         * 侧边栏，主类
         * @param {HtmlElement} target 对象
         */

        function Checkbox (target, options) {
            Control.call(this, target, options);
        }

        Checkbox.prototype.type = 'checkbox';
        Checkbox.prototype.defaultOptions = {
            state: 'default', // checked disabled
            labelText: ''
        };

        /**
         * 打开panel
         */
        Checkbox.prototype.render = function () {
            var className = this.option.state || STATE.DEFAULT;
            var tpl = '<span></span><label>'
                + this.option.labelText + ' </label>';

            this.main.addClass(this.getSubClassName(this.option.state));
            this.main.html(tpl);
        }

        /**
         * 初始化checkbox 事件
         */
        Checkbox.prototype.initEvents = function () {
            var me = this;
            this.main.on('click', function (e) {
                me.toggleStale();
            });
        }

        /**
         * toggle checkbox 状态
         */
        Checkbox.prototype.toggleStale = function () {
            var me = this;
            if (me.option.state === STATE.DISABLED) {
                return;
            }
            if (me.option.state === STATE.CHECKED) {
                me.main.removeClass(me.getSubClassName(STATE.CHECKED));
                me.option.state = STATE.DEFAULT;
                me.main.trigger('unchecked');
            }
            else {
                me.main.addClass(me.getSubClassName(STATE.CHECKED));
                me.option.state = STATE.CHECKED;
                me.main.trigger('checked');
            }
        }

        return lib.inherits(Checkbox, Control);
    }
);

