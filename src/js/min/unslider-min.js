!function($){return $?($.Unslider=function(t,i){var s=this;return this.$context=t,this.options={},this.$container=null,this.$slides=null,this.total=0,this.current=0,this.sliderID=~~(2e3*Math.random()),this.eventSuffix=".unslider-"+this.sliderID,this.init=function(t){return this.options=$.extend($.Unslider.defaults,t),this.$container=this.$context.find(this.options.selectors.container).addClass("unslider-wrap"),this.$slides=this.$container.children(this.options.selectors.slides),this.setup(),["nav","arrows","keys"].forEach(function(t){s.options[t]!==!1&&s["init"+s._ucfirst(t)]()}),this._console("Slider initiated"),this},this.setup=function(){this.$context.addClass("unslider-slider").wrap('<div class="unslider" />');var t=this.$context.css("position"),i=["relative","absolute"];$.inArray(t,i)<0&&this.$context.css("position",i[0]),this.$context.css("overflow","hidden"),this.calculateSlides()},this.calculateSlides=function(){this.total=this.$slides.length,this.$container.css("width",100*this.total+"%"),this.$slides.css("width",100/this.total+"%")},this.initNav=function(){},this.initArrows=function(){this.options.arrows===!0&&(this.options.arrows=$.Unslider.defaults.arrows),this._console("Arrows set up"),$.each(s.options.arrows,function(t,i){$(i).insertAfter(s.$context).on("click"+s.eventSuffix,$.proxy(s[t],s))})},this.initKeys=function(){this.options.keys===!0&&(this.options.keys=$.Unslider.defaults.keys),this._console("Keyboard shortcuts set up"),$(document).on("keyup"+this.eventSuffix,function(t){$.each(s.options.keys,function(i,n){t.which===n&&$.isFunction(s[i])&&s[i].call(s)})})},this.destroyKeys=function(){$(document).off("keyup"+this.eventSuffix),this._console("Keyboard shortcuts removed")},this.setIndex=function(t){this._console("Current slide index updated to "+t),0>t&&(t=this.total-1),this.current=Math.min(Math.max(0,t),this.total-1)},this.animate=function(t){this.setIndex(t);var i="animate"+this._ucfirst(this.options.animation);return $.isFunction(this[i])?this[i](this.current):this._console("Not a valid animation method.","warn")},this.next=function(){var t=this.current+1;return t>=this.total&&(t=0),this.animate(t)},this.prev=function(){return this.animate(this.current-1)},this.animateHorizontal=function(t){if(this.options.animateHeight){var i=this.$slides.eq(t).height();this._console("Adjusting container height to "+i),this.$context.css("height",i)}return this._console("Animating horizontally"),this.$container.transform("translateX(-"+100/this.total*t+"%)")},this._console=function(t,i){return this.options.debug===!0&&"object"==typeof window.console?(i=i||"log",console[i]("Unslider: "+t)):void 0},this._ucfirst=function(t){return t.toString().toLowerCase().replace(/^./,function(t){return t.toUpperCase()})},this.init()},$.Unslider.defaults={debug:!0,speed:300,delay:3e3,keys:{prev:37,next:39},nav:!0,arrows:{prev:'<a class="unslider-arrow prev">Previous slide</a>',next:'<a class="unslider-arrow next">Next slide</a>'},autoplay:!1,animation:"horizontal",easing:"swing",selectors:{container:"ul:first",slides:"li"},animateHeight:!0},$.fn.transform=function(t){return this.css({webkitTransform:t,msTransform:t,transform:t})},void($.fn.unslider=function(t){return this.each(function(){var i=$(this);return i.data("unslider",new $.Unslider(i,t))})})):alert("Unslider requires jQuery to function. Make sure you've included jQuery in the source code before Unslider.")}(window.jQuery||!1);