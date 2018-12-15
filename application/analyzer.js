"use strict";
class Analyzer {

  constructor(analyzer, name, creator) {
    this.analyzer = analyzer;
    this.name = name;
    this.creator = creator;
    this.button = null;
    this.createButton();
  }

  createButton() {
    this.button = new Button(this.name, select('#analyzerButtons'));
    this.button.setAction(() => { // TODO see if this can be done with dynamiclly
      analyzerCollection.setAnalyzerByName(this.name);
    });
  }

}