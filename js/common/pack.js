// build time:Sat Feb 15 2020 18:31:20 GMT+0800 (GMT+08:00)
(function(t){function s(t){this.ele=t;this.record=[];this.index=0;this.dir=1;this.status=false}s.prototype={_toggleClass:function(t,s){var i=this;classArr=t.split(" ");classArr.forEach(function(t){i.ele.classList.toggle(t)});s&&setTimeout(s,10)},_transfromClass:function(t,s){var i=this;this.ele.addEventListener("transitionend",function e(t){if(i.ele===t.target){s();i.ele.removeEventListener("transitionend",e)}});this._toggleClass(t)},_animationClass:function(t,s){var i=this;this.ele.addEventListener("animationend",function e(t){if(i.ele===t.target){s();i.ele.removeEventListener("animationend",e)}});this._toggleClass(t)},_toggle:function(){var t=this.record[this.index];if(this.index===this.record.length||this.index===-1){this.end&&this.end();this.index=this.dir>0?this.index-1:0;this.dir*=-1;this.status=false;return}switch(t.type){case"class":this._toggleClass(t.className,this._toggle.bind(this));break;case"transfrom":this._transfromClass(t.className,this._toggle.bind(this));break;case"animation":this._animationClass(t.className,this._toggle.bind(this));break}this.index+=this.dir},base:function(t){this.record.push({className:t||"js-open",type:"class"});return this},transfrom:function(t){this.record.push({className:t,type:"transfrom"});return this},animation:function(t){this.record.push({className:t,type:"animation"});return this},toggle:function(){if(this.status)return;if(this.index===0||this.index===this.record.length-1){this.status=true}this._toggle()},lastStart:function(){var t=this;this.status=false;this.index=this.record.length-1;this.dir=-1;this.record.forEach(function(s){t.ele.classList.add(s.className)});return this},end:function(t){this.end=t;return this}};t.Pack=s})(window);
//rebuild by neat 