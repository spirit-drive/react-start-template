declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    s3333TorybookButton3: string;
    s3333TorybookButton4: string;
    story: string;
    storybookButton: string;
    storybookButton2: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
