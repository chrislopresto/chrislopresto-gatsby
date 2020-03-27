declare module '@theme-ui/style-guide' {
  export const ColorPalette: React.FunctionComponent;
  export const TypeScale: React.FunctionComponent;

  interface TypeStyleProps {
    fontFamily: string;
    fontWeight: string;
    lineHeight: string;
  }

  export const TypeStyle: React.FunctionComponent<TypeStyleProps>;
}
