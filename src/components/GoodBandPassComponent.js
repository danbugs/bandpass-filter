import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import p5 from "p5";

export default function sketch (p) {
    var sound;
    var sound1;
    var fft;
    var filter;
    var noise;
    var filterFreq = 300;
    var filterRes = 10;
    var inputCutOffFrequency;
    var inputResonanceFrequency;
    var isAllPass = false;

    p.preload = function () {
        sound1 = p.loadSound('./myRecording.mp3');
        sound = sound1;
    }
  
    p.setup = function () {
        p.colorMode(p.HSB);
        p.createCanvas(512, 512);

        sound.loop();

        filter = new p5.BandPass();
        noise = new p5.Noise();

        sound.disconnect();
        sound.connect(filter);

        noise.disconnect();
        filter.process(noise);
        noise.start();

        fft = new p5.FFT(.9, 512);
        var buttonToggleSound = p.createButton('Toggle Sound');
        buttonToggleSound.mouseClicked(toggleSound);
        var buttonToggleNoise = p.createButton('Toggle Noise');
        buttonToggleNoise.mouseClicked(toggleNoise);
        var buttonDispose = p.createButton('Toggle Filter');
        buttonDispose.mouseClicked(removeFilter);
      
        p.createDiv('Set Cut Off Frequency: (default: 300Hz)');
        inputCutOffFrequency = p.createInput();
        var buttonSubmit = p.createButton('Cut off!');
        buttonSubmit.mouseClicked(submitCutOff);
      
        p.createDiv('Set Resonance: (default: 10)');
        inputResonanceFrequency = p.createInput();
        var buttonSubmit2 = p.createButton('Resonate!');
        buttonSubmit2.mouseClicked(submitResonance);
      }
      
      function toggleNoise() {
        if (noise.started) {
          noise.stop();
        } else {
          noise.start();
        }
      }
      function toggleSound() {
        if (sound.isPlaying()) {
          sound.pause();
        } else {
          sound.play();
        }
      }
      
      function submitCutOff() {
        var cutOff = parseInt(inputCutOffFrequency.value());
        filterFreq = cutOff;
      }
      
      function submitResonance() {
        var resonance = parseInt(inputResonanceFrequency.value());
        filterRes = resonance;
      }
      
      function removeFilter() {
        if(!isAllPass)
        {
          filter.setType('allpass');
          isAllPass = true;
        }
        else{
          filter.setType('bandpass');
          isAllPass = false;
        }
      }
  
    p.draw = function () {
        filter.set(filterFreq, filterRes);
        p.background(0);
        var spectrum = fft.analyze();
        p.noStroke();
        for(var i = 0; i < spectrum.length; i++)
        {
          var x = p.map(p.log(i), 0, p.log(spectrum.length), 0, p.width);
          var h = p.map(spectrum[i], 0, 255, 0, p.height);
          var rectangle_width = (p.log(i+1)-p.log(i))*(p.width/p.log(spectrum.length));
          p.fill(i, 255, 255)
          p.rect(x, p.height, rectangle_width, -h )
        }
    };

    // var renderingFilter2 = false;

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.renderingFilter2){
          p.remove();
        }
    };
  };