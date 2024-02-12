declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    buttonContainer: string;
    description: string;
    image: string;
    imageContainer: string;
    infoContainer: string;
    name: string;
    noImage: string;
    price: string;
    shortProductCard: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
