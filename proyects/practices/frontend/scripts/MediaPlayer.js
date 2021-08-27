class MediaPlayer {
  constructor({el, plugins = []}) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    (this.media.paused) ? this.media.play() : this.media.pause();
  }
  _initPlugins() {
    this.plugins.forEach(plugin => {plugin.run();})
  }
}

export default {MediaPlayer};