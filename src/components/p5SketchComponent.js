import "../../node_modules/p5/lib/addons/p5.sound";
import "../../node_modules/p5/lib/addons/p5.dom";
import p5 from "../../node_modules/p5/";

export default function sketch (p) {
    var sound;
    var fft;
    var w;
    var filter;
    var noise;
    var filterFreq = 300;
    var filterRes = 10;
    var inputCutOffFrequency;
    var inputResonanceFrequency;
    var isAllPass = false;

    p.preload = function () {
        sound = p.loadSound('./myRecording.mp3'); 
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
        w = p.width / 512;
        var buttonToggleSound = p.createButton('Toggle Sound');
        buttonToggleSound.mousePressed(toggleSound);
        var buttonToggleNoise = p.createButton('Toggle Noise');
        buttonToggleNoise.mousePressed(toggleNoise);
        var buttonDispose = p.createButton('Toggle Filter!');
        buttonDispose.mousePressed(removeFilter);
      
        p.createDiv('Set Cut Off Frequency: (default: 300Hz)');
        inputCutOffFrequency = p.createInput();
        var buttonSubmit = p.createButton('Cut off!');
        buttonSubmit.mousePressed(submitCutOff);
      
        p.createDiv('Set Resonance: (default: 10)');
        inputResonanceFrequency = p.createInput();
        var buttonSubmit2 = p.createButton('Resonate!');
        buttonSubmit2.mousePressed(submitResonance);
      
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
        var cutOff = p.map(parseInt(inputCutOffFrequency.value()), 0, 1350, 10, 22500);
        filterFreq = cutOff;
      }
      
      function submitResonance() {
        var resonance = p.map(parseInt(inputResonanceFrequency.value()), 0, 100, 0, 1000);
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
          var amp = spectrum[i];
          var y = p.map(amp, 0, 255, p.height, 0);
          p.fill(i, 255, 255)
          p.rect(i*w, y, w - 2, p.height-y);
        }
    };
  };