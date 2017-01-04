import {Component, OnInit, Input} from '@angular/core';
import {Viewer} from "bpmn-js";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Component({
  selector: 'bpmn-viewer',
  template: `
    <div id="canvas"></div>
  `,
  styles: [`
    #canvas {
      height: 500px;
      overflow-y: scroll;
      overflow-x: scroll;
      border: 1px solid black;
    }
    `]
})
export class ViewerComponent implements OnInit {

  private _xmlUrl: string;
  viewer: Viewer;

  @Input()
  public set xmlUrl(url: string) {
    this._xmlUrl = url;
    this.loadXml(this.xmlUrl);
  }

  constructor(private http: Http) {}

  ngOnInit() {
    this.viewer = new Viewer({ container: '#canvas' });
    if (this._xmlUrl) {
      this.loadXml(this._xmlUrl);
    }
  }

  public loadXml(url: string): void {
    if (!this.viewer) {
      return;
    }
    this.http.get(url)
      .map((response) => response.text())
      .subscribe(
        (xml) => this.renderBpmn(xml)
      );
  }

  public renderBpmn(xml: any) {
    this.viewer.importXML(xml, (err) => {
      if (err) {
        console.log('error rendering', err);
      } else {
        this.viewer.get('canvas').zoom('fit-viewport');
        console.log('rendered');
      }
    });
  }

}
