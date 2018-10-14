$(document).ready(function() {

    var timer = 0;
    var addOrRemove = 'add';
    var interval = false;
    var songTime = 0;
    var songSecs = 0;
    var songMins = 0;
    var interval = 0;
    var song;

    var dialups = {

        el: {
            okBtn: $('input[type="submit"][value="OK"]'),
            cancelBtn: $('input[type="submit"][value="Cancel"]'),
            playBtn: $('#playBtn'),
            pauseBtn: $('#pauseBtn'),
            stopBtn: $('#stopBtn'),
            folder: $('.desktopFolder'),
            closeEx: $('#closeExplorer'),
            startBtn: $('.startButton'),
            startMenu: $('.startMenu'),
            doc: $(window),
            winamp: $('.winamp'),
            closeWinamp: $('#closeWinamp'),
            song: $('.audioWhole')
        },

        init: function() {
            dialups.bindUIActions();
            song = document.getElementById('ad');
        },

        bindUIActions: function() {
            dialups.el.okBtn.on("click", dialups.loadPage);
            dialups.el.cancelBtn.on("click", dialups.goBack);
            dialups.el.song.on("dblclick", dialups.loadSong);
            dialups.el.playBtn.on("click", dialups.playSong);
            dialups.el.pauseBtn.on("click", dialups.pauseSong);
            dialups.el.stopBtn.on("click", dialups.stopSong);
            dialups.el.folder.on("click", dialups.changeToBlue);
            dialups.el.folder.on("dblclick", dialups.showExplorer);
            dialups.el.closeEx.on("click", dialups.closeExplorer);
            dialups.el.doc.on("click", dialups.toggleStartMenu);
            dialups.el.closeWinamp.on("click", dialups.closeWinamp);
        },

        loadSong: function(event) {
            if (song) {
                dialups.stopSong();
            }
            songTitle = $(event.currentTarget).attr('id')+ '.mp3';
            song = new Audio(aud + songTitle);
            dialups.openWinamp();
            dialups.playSong();
        },

        openWinamp: function() {
            dialups.el.winamp.css('display', 'block');
        },

        closeWinamp: function() {
            dialups.stopSong();
            dialups.el.winamp.css('display', 'none');
        },

        playSong: function() {
            if (!song.paused) return false;
            song.play();
            dialups.startTimer();
        },

        stopSong: function() {
            clearInterval(interval);
            songTime = 0;
            songSecs = 0;
            songMins = 0;
            $(".vis").text('00:00');
            song.load();
        },

        pauseSong: function() {
            if (song.currentTime < 0.1) return false;
            if (song.paused) {
                dialups.playSong();
            } else {
                clearInterval(interval);
                song.pause();
            }
        },

        startTimer: function() {
            interval = interval + 1;
            setInterval(function(){
                if (song.ended) {
                    songTime = 0;
                    clearInterval(interval);
                } else {
                    dialups.updateTimer();
                }
            }, 1000);
        },

        updateTimer: function() {
            songTime++;
            songSecs++;
            if (songTime && songTime % 60 == 0) {
                songSecs = 0;
                songMins++;
            }
            if (songSecs < 10) {
                var secsDisp = '0' + songSecs;
            } else {
                var secsDisp = songSecs;
            }
            if (songMins < 10) {
                var minsDisp = '0' + songMins;
            } else {
                var minsDisp = songMins;
            }
            $(".vis").text(minsDisp + ':' + secsDisp);
        },

        loadPage: function() {
            var num = Math.floor((Math.random() * 800) + 100);
            timer += num;
            setTimeout(dialups.changeMousePointer, num);
        },

        goBack: function() {
            window.history.back();
        },

        changeMousePointer: function() {
            var wholeThing = document.getElementById("wholeThing");
            if (timer < 3500) {
                if (addOrRemove == 'add') {
                    addOrRemove = 'remove';
                    wholeThing.classList.add("eggTimer");
                } else {
                    addOrRemove = 'add';
                    wholeThing.classList.remove("eggTimer");
                }
                dialups.loadPage();
            } else {
                wholeThing.classList.remove("eggTimer");
                window.location.href = url + "home/desktop";
            }
        },

        toggleStartMenu: function(event) {
            if (event.target.className == 'startButton' && dialups.el.startMenu.css('display') == 'none') {
                dialups.el.startMenu.css('display', 'flex');
                dialups.el.startBtn.css('border', 'inset');
                return true;
            }
            if ((event.target.className == 'startButton' && dialups.el.startMenu.css('display') == 'flex') || !event.target.className && event.target.className != 'startMenu') {
                dialups.el.startMenu.css('display', 'none');
                dialups.el.startBtn.css('border', 'outset');
                return true;
            }
        },

        showExplorer: function(event) {
            var title = $(event.currentTarget).attr('id');
            dialups.el.folder.children().removeClass("folderImageBlue");
            dialups.el.folder.children().removeClass("folderTitleBlue");
            var folderName = document.getElementsByClassName('explorerWindow');
            if (folderName[0].style.display == "flex") return false;
            folderName[0].style.display = "flex";
            var topBar = document.getElementsByClassName('explorerTopBarText');
            topBar[0].innerHTML += dialups.unCamel(title);
        },

        closeExplorer: function() {
            $('.explorerWindow').css('display', 'none');
            $('.explorerTopBarText').text('');
        },

        unCamel: function(s) {
            var skipIt = false;
            if (s.toUpperCase() == s) return s;
            var out = "";

            if (s.indexOf('ID') == s.length-2) s=s.substr(0, s.length-2);
            // Format name better as a title by adding a space where capitals denote a different word
            for (n=0; n<s.length; n++) {
                var c = s[n];
                if (c.toUpperCase()==c) out += " ";
                if (n==0) c = c.toUpperCase();
                out += c;
            }
            out.charAt(0).toUpperCase() + out.slice(1);
            return out;
        },

        changeToBlue: function(event) {
            dialups.el.folder.children().removeClass("folderImageBlue");
            dialups.el.folder.children().removeClass("folderTitleBlue");
            var id = $(event.currentTarget).attr('id');
            $('#' + id).children().addClass("folderImageBlue");
            $('#' + id + ' .folderTitle').addClass("folderTitleBlue");
        },

    };

    dialups.init();

});
