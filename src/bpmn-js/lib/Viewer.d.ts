
export = Viewer;

declare class Viewer {
  constructor(options: Viewer.IOptions);
  importXML(xml: any, done: (err: any) => void);
  saveXML(options: any, done: (err: any, xml: string) => void);
  saveSVG(options: any, done: (err: any, svgStr: string) => void);
  get(id: any);
  moddle: any;
  container: any;
}

declare namespace Viewer {

  export interface IOptions {
    width?: string | number;
    height?: string | number;
    position?: string; // Enum: relative, ... ?
    container?: string; // DOMElement
    moddleExtensions?: any;
    modules?: any[]; // Array<didi.Module>
    additionalModules?: any[] // Array<didi.Module>
  }

  export interface ISaveXMLOptions {
    format?: boolean;
    preamble?: boolean;
  }

  export interface ISaveSVGOptions {
  }
}
