/*global jQuery:false, window:false */
/*
 *  ImCoder
 *
 *  Made by Davidson Fellipe - fellipe.com
 *  Under MIT License
 */
tegnioCoder = 
(function ($) {
    'use strict';
	
	
	if(localStorage.hasOwnProperty('highScore')) {
		var highScore = localStorage.getItem('highScore');
	}
	
	else {
		
	var highScore = 0;
	}
	
	
		
		
		
	var autoModeInterval;
	
    var ImCoder = function () {
		
		this._enabled = true;
		
		this.autoMode = false;
		
		this.autoModeInterval;
		
		this.autoModeIntervalMs = 50;

        this.originalText = null;
        
		this.text = null;

        this.index = 0;

        this.lettersByTyping = 15;

        this.maxSpeed = 30;
        
		this.minSpeed = 2;

        this.lineBreak = '<br>';//'<br><span class="im-coder-line"></span>';

        var that = this;
		
		this.startPosisiton = 0;
		
		this.endPosisiton = 0;

        this.reset();

        setInterval(function () {
            that.blinkCursor();
        }, 500);

        this.bind();
    };

    ImCoder.prototype.enable = function () {
		this._enabled = true;
	}

    ImCoder.prototype.disable = function () {
		this._enabled = false;
	}

    ImCoder.prototype.enabled = function () {
		return this._enabled;
	}

    ImCoder.prototype.reset = function () {
		
		this.autoMode = false;
		
		clearInterval(this.autoModeInterval);
		this.autoModeInterval = null;

        this.originalText = null;
		
        this.text = null;

        this.index = 0;

        $('#im-coder-editor').html(this.lineBreak);//'<span class="im-coder-line"></span>');

        //$('#im-coder-editor').removeClass('im-coder-editing');

    };

    ImCoder.prototype.toggleAutoMode = function () {		
		this.autoMode = !this.autoMode;
		clearInterval(this.autoModeInterval);
		this.autoModeInterval = null;
		var that = this;
		if(this.autoMode) this.autoModeInterval = setInterval(function() { that.addText() }, this.autoModeIntervalMs);
		return this.autoMode;
	}
	
	ImCoder.prototype.addOneChar = function () {		
	that.addText("2");
	}

    ImCoder.prototype.bind = function () {

        var that = this;
		
		var pressed = false;

        $(document).bind('keydown',
            function (event) {
				if(!that._enabled) return true;
				if(pressed || that.autoMode) return false;
				pressed = true;
                that.addText(event);
				/*
                if (event.which !== 27) {

                    that.addText(event);

                } else {

                    $('#im-coder-sidebar').show();

                    that.reset();

                }
				*/
            }
        );

        $(document).bind('keyup',
			function() {
				if(!that._enabled) return true;
				pressed = false;
			}
		)

        $(document).bind('mousewheel',
			function(event) {
				if(!that._enabled) return true;
				//console.log(event.originalEvent.deltaY, that.lettersByTyping);
				if(event.originalEvent.deltaY < 0 && that.lettersByTyping < that.maxSpeed) that.lettersByTyping++;
				else if(event.originalEvent.deltaY > 0 && that.lettersByTyping > that.minSpeed) that.lettersByTyping--;
			}
		)

        $('.im-coder').ready(function () {
			/*
            var codeLang = $(this).data('syntax-lang');
			
            var lang = 'langs/c.txt';
			
            $.get(lang, function(data) {
                that.setText(data);
				//that.index = that.text.length;
            });
			*/
			that.switchLanguage('c');

            //$('#im-coder-sidebar').hide();
        });
		
        $('#im-coder-paste').bind('paste blur', function () {

			if(!that._enabled) return true;
            
			var element = this;

            setTimeout(function () {

                that.setText($(element).val());

                $('#im-coder-sidebar').fadeOut('slow');

            }, 100);

        });
		
    };

    ImCoder.prototype.switchLanguage = function (l)  {
		if(typeof l != 'string') return;
		var that = this;
		$.get('assets/langs/' + l + '.txt', function(data) {
			that.setText(data);
		});
	}

    ImCoder.prototype.setText = function (text)  {
		this.reset();
        return ( this.text = this.originalText = '\n' + text );
    };

    ImCoder.prototype.content = function () {
        return $('#im-coder-editor').html();
    };
    
	ImCoder.prototype.countLines = function (text) {
		return (text.match(/\n/g) || []).length;
	}
    
	ImCoder.prototype.totalLines = function () {
		return this.countLines(this.text);
	}

    ImCoder.prototype.addText = function () {
        if (this.text && this._enabled) {

            var words = this.content();
            var code = '';

            if (words.substring(words.length - 1, words.length) === '|') {
                $('#im-coder-editor').html($('#im-coder-editor')
                    .html()
                    .substring(0, words.length - 1));
            }

            if (this.index <= this.lettersByTyping) {
                $('#im-coder-editor').addClass('im-coder-editing');
            }

            this.index += this.lettersByTyping;
			if(this.index + this.lettersByTyping > this.text.length) {
				this.text += '\n' + this.originalText;
				//this.endPosisiton -= this.originalText.length;
			}
			/*
			if(this.text.length > this.originalText.length * 2) {
				//console.log(this.text);
				this.text = '\n' + this.text.substr(this.originalText.length, this.originalText.length * 2);
			}
			*/
			
			var maxLineHeight = 2000;
			//var currentLines = Math.ceil($('#im-coder-editor').height() / maxLineHeight);
			var maxLines = Math.ceil($('body').height() / maxLineHeight);
			//console.log(this.countLines(this.text) , maxLines);
			if(this.countLines(this.text) > maxLines && this.text.length > this.originalText.length) {
				this.text = this.text.substring(this.lettersByTyping, this.text.length);
				this.index -= this.lettersByTyping;
				//this.endPosisiton += this.lettersByTyping;
			}/* else {
				this.text = this.text.substring(0, this.text.length);
			}*/
			
			//var tArr = this.text.match(/[^\n]+/g);
			//console.log(tArr);
			//console.log(this.text.length);
			var finalText = this.text.substring(0, this.index);
			/*
			if(this.countLines(this.text) > maxLines) {
				this.text = '';
				for(var i = 0; i < tArr.length - 1; i++) {
					this.text += '\n' + tArr[i];
				}
				finalText = this.text.substring(0, this.index % this.originalText.length);
				//finalText = '';
				//console.log(currentLines - maxLines);//
				//console.log($('#im-coder-editor').match(/<br>.*?(?!<br>)/m));
				this.startPosisiton += this.lettersByTyping;
			} else {
				finalText = this.text.substring(0, this.index);
			}
			*/
			//this.endPosisiton += this.lettersByTyping;
            var text = finalText;//this.text.substring(this.startPosisiton, this.endPosisiton);
			
            code = hljs.highlightAuto(text).value;

            var codeChunk = code.replace(/\n/g, this.lineBreak);

            $('#im-coder-editor').html(codeChunk);
			
			console.log("typed")
			
var highScore = parseInt(localStorage.getItem('highScore'));
			$('.simone-taskbar-button-user-defined[data-button-name=highScore]').children().html(++highScore)
localStorage.setItem('highScore', ++highScore);




			//console.log($('body').height(), $('#im-coder-editor').height());

            window.scrollBy(0, 150);
			//$('#im-coder-editor-wrapper').animate({scrollTop: 1000});
        }
    };

    ImCoder.prototype.blinkCursor = function () {

        var words = this.content();
		if(!words) return;
        if (words.substring(words.length - 1, words.length) === '|') {

            $('#im-coder-editor').html($('#im-coder-editor')
                .html()
                .substring(0, words.length - 1));

        } else {

            $('#im-coder-editor').append('|');

        }

    };

    return new ImCoder();

})(jQuery);
