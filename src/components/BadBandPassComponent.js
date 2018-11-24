import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import p5 from "p5";

export default function sketch2 (p) {
            var canvasPlaying;
            var filterPresence = true;
            var noise2;
            var sound2;
            var spectrum = [];
            var fft2;
            p.preload = function () {
                sound2 = p.loadSound('tuningFork.wav');
            }
            p.setup = function () {
                var cnv = p.createCanvas(512,512);
                canvasPlaying = true;
              
                sound2.loop();
              
                fft2 = new p5.FFT(.9, 128);
                noise2 = new p5.Noise('white');
                noise2.start();
                noise2.connect(fft2);
                sound2.connect();
              
                var playPauseButton = p.createButton('Play/Pause - Hann');
                playPauseButton.mouseClicked(playOrPauseCanvas);
              
                var toggleFilterButton = p.createButton('Toggle Filter - Hann');
                toggleFilterButton.mouseClicked(toggleFilter);
            }
              
            const playOrPauseCanvas = () =>
            {
                if(canvasPlaying)
                {
                  p.noLoop();
                  sound2.pause();
                  noise2.stop();
                  canvasPlaying = false;
                }
                else
                {
                  p.loop();
                  sound2.play();
                  noise2.start();
                  canvasPlaying = true;
                }
            }
            
            const toggleFilter = () =>
            {
              filterPresence = !filterPresence;
            }
            
            const hannWindow = () =>
            {
              for(var i = 0; i<spectrum[i]; i++)
              {
                spectrum[i] = spectrum[i]*1/2*(p.cos((2*p.PI*i)/(spectrum.length-1)));
                if(i > 50) // eliminating meaningless frequencies
                {
                  spectrum[i] = 0;
                }
              }
            }
          
            p.draw = function () {
                p.background(0);
                p.noStroke();
                spectrum = fft2.analyze();
              
                if(filterPresence)
                {
                  hannWindow();
                }
            

                //draw the spectrum
                for (var i = 0; i< spectrum.length; i++){
                  p.fill(255,i,255);
                  console.log(spectrum[i]);
                  var x2 = p.map(i, 0, spectrum.length, p.width/2, p.width);
                  var h2 = p.map(spectrum[i], 0, 255, 0, p.height);
                  var rectangle_width = (p.width/spectrum.length);
                  p.rect(x2, p.height, rectangle_width, -h2);
                }
                p.stroke(255);
                p.line(p.width/2, p.height, p.width/2, 100);
                p.line(p.width/2-4, 104, p.width/2, 100);
                p.line(p.width/2+4, 104, p.width/2, 100);
                p.fill(255);
                p.text("Acausal side", p.width/2-100, p.height/2);
                p.text("BandPass Filter with Hann \n Window \n ~ Danilo Chiarlone", 10, 50);
            }


            var renderingFilter2 = false;

            p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
                if (!props.renderingFilter2){
                  p.remove();
                }
            };
};