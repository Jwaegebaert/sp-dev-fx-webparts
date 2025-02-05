import { IPalette, ITheme as ThemeV8 } from '@microsoft/sp-component-base';

import { ColorTokens, Theme as ThemeV9, webLightTheme } from '@fluentui/react-components';
import { blackAlpha, whiteAlpha, grey } from './themeDuplicates';

/**
 * Creates v9 color tokens from a v8 palette.
 * https://github.com/microsoft/fluentui/blob/master/apps/public-docsite-v9/src/shims/ThemeShim/v9ThemeShim.ts
 */
const mapAliasColors = (palette: Partial<IPalette>, inverted: boolean): ColorTokens => {
  return {
    colorNeutralForeground1: palette.neutralPrimary || webLightTheme.colorNeutralForeground1,
    colorNeutralForeground1Hover: palette.neutralPrimary || webLightTheme.colorNeutralForeground1Hover,
    colorNeutralForeground1Pressed: palette.neutralPrimary || webLightTheme.colorNeutralForeground1Pressed,
    colorNeutralForeground1Selected: palette.neutralPrimary || webLightTheme.colorNeutralForeground1Selected,
    colorNeutralForeground2: palette.neutralSecondary || webLightTheme.colorNeutralForeground2,
    colorNeutralForeground2Hover: palette.neutralPrimary || webLightTheme.colorNeutralForeground2Hover,
    colorNeutralForeground2Pressed: palette.neutralPrimary || webLightTheme.colorNeutralForeground2Pressed,
    colorNeutralForeground2Selected: palette.neutralPrimary || webLightTheme.colorNeutralForeground2Selected,
    colorNeutralForeground2BrandHover: palette.themePrimary || webLightTheme.colorNeutralForeground2BrandHover,
    colorNeutralForeground2BrandPressed: palette.themeDarkAlt || webLightTheme.colorNeutralForeground2BrandPressed,
    colorNeutralForeground2BrandSelected: palette.themePrimary || webLightTheme.colorNeutralForeground2BrandSelected,
    colorNeutralForeground3: palette.neutralTertiary || webLightTheme.colorNeutralForeground3,
    colorNeutralForeground3Hover: palette.neutralSecondary || webLightTheme.colorNeutralForeground3Hover,
    colorNeutralForeground3Pressed: palette.neutralSecondary || webLightTheme.colorNeutralForeground3Pressed,
    colorNeutralForeground3Selected: palette.neutralSecondary || webLightTheme.colorNeutralForeground3Selected,
    colorNeutralForeground3BrandHover: palette.themePrimary || webLightTheme.colorNeutralForeground3BrandHover,
    colorNeutralForeground3BrandPressed: palette.themeDarkAlt || webLightTheme.colorNeutralForeground3BrandPressed,
    colorNeutralForeground3BrandSelected: palette.themePrimary || webLightTheme.colorNeutralForeground3BrandSelected,
    colorNeutralForeground4: palette.neutralQuaternary || webLightTheme.colorNeutralForeground4,
    colorNeutralForegroundDisabled: palette.neutralTertiaryAlt || webLightTheme.colorNeutralForegroundDisabled,
    colorNeutralForegroundInvertedDisabled: whiteAlpha[40],
    colorBrandForegroundLink: palette.themeDarkAlt || webLightTheme.colorBrandForegroundLink,
    colorBrandForegroundLinkHover: palette.themeDark || webLightTheme.colorBrandForegroundLinkHover,
    colorBrandForegroundLinkPressed: palette.themeDarker || webLightTheme.colorBrandForegroundLinkPressed,
    colorBrandForegroundLinkSelected: palette.themeDarkAlt || webLightTheme.colorBrandForegroundLinkSelected,
    colorNeutralForeground2Link: palette.neutralSecondary || webLightTheme.colorNeutralForeground2Link,
    colorNeutralForeground2LinkHover: palette.neutralPrimary || webLightTheme.colorNeutralForeground2LinkHover,
    colorNeutralForeground2LinkPressed: palette.neutralPrimary || webLightTheme.colorNeutralForeground2LinkPressed,
    colorNeutralForeground2LinkSelected: palette.neutralPrimary || webLightTheme.colorNeutralForeground2LinkSelected,
    colorCompoundBrandForeground1: palette.themePrimary || webLightTheme.colorCompoundBrandForeground1,
    colorCompoundBrandForeground1Hover: palette.themeDarkAlt || webLightTheme.colorCompoundBrandForeground1Hover,
    colorCompoundBrandForeground1Pressed: palette.themeDark || webLightTheme.colorCompoundBrandForeground1Pressed,
    colorBrandForeground1: palette.themePrimary || webLightTheme.colorBrandForeground1,
    colorBrandForeground2: palette.themeDarkAlt || webLightTheme.colorBrandForeground2,
    colorNeutralForeground1Static: palette.neutralPrimary || webLightTheme.colorNeutralForeground1Static,
    colorNeutralForegroundInverted: palette.white || webLightTheme.colorNeutralForegroundInverted,
    colorNeutralForegroundInvertedHover: palette.white || webLightTheme.colorNeutralForegroundInvertedHover,
    colorNeutralForegroundInvertedPressed: palette.white || webLightTheme.colorNeutralForegroundInvertedPressed,
    colorNeutralForegroundInvertedSelected: palette.white || webLightTheme.colorNeutralForegroundInvertedSelected,
    colorNeutralForegroundOnBrand: palette.white || webLightTheme.colorNeutralForegroundOnBrand,
    colorNeutralForegroundStaticInverted: palette.white || webLightTheme.colorNeutralForegroundStaticInverted,
    colorNeutralForegroundInvertedLink: palette.white || webLightTheme.colorNeutralForegroundInvertedLink,
    colorNeutralForegroundInvertedLinkHover: palette.white || webLightTheme.colorNeutralForegroundInvertedLinkHover,
    colorNeutralForegroundInvertedLinkPressed: palette.white || webLightTheme.colorNeutralForegroundInvertedLinkPressed,
    colorNeutralForegroundInvertedLinkSelected: palette.white || webLightTheme.colorNeutralForegroundInvertedLinkSelected,
    colorNeutralForegroundInverted2: palette.white || webLightTheme.colorNeutralForegroundInverted2,
    colorBrandForegroundInverted: palette.themeSecondary || webLightTheme.colorBrandForegroundInverted,
    colorBrandForegroundInvertedHover: palette.themeTertiary || webLightTheme.colorBrandForegroundInvertedHover,
    colorBrandForegroundInvertedPressed: palette.themeSecondary || webLightTheme.colorBrandForegroundInvertedPressed,
    colorBrandForegroundOnLight: palette.themePrimary || webLightTheme.colorBrandForegroundOnLight,
    colorBrandForegroundOnLightHover: palette.themeDarkAlt || webLightTheme.colorBrandForegroundOnLightHover,
    colorBrandForegroundOnLightPressed: palette.themeDark || webLightTheme.colorBrandForegroundOnLightPressed,
    colorBrandForegroundOnLightSelected: palette.themeDark || webLightTheme.colorBrandForegroundOnLightSelected,
    colorNeutralBackground1: palette.white || webLightTheme.colorNeutralBackground1,
    colorNeutralBackground1Hover: palette.neutralLighter || webLightTheme.colorNeutralBackground1Hover,
    colorNeutralBackground1Pressed: palette.neutralQuaternaryAlt || webLightTheme.colorNeutralBackground1Pressed,
    colorNeutralBackground1Selected: palette.neutralLight || webLightTheme.colorNeutralBackground1Selected,
    colorNeutralBackground2: palette.neutralLighterAlt || webLightTheme.colorNeutralBackground2,
    colorNeutralBackground2Hover: palette.neutralLighter || webLightTheme.colorNeutralBackground2Hover,
    colorNeutralBackground2Pressed: palette.neutralQuaternaryAlt || webLightTheme.colorNeutralBackground2Pressed,
    colorNeutralBackground2Selected: palette.neutralLight || webLightTheme.colorNeutralBackground2Selected,
    colorNeutralBackground3: palette.neutralLighter || webLightTheme.colorNeutralBackground3,
    colorNeutralBackground3Hover: palette.neutralLight || webLightTheme.colorNeutralBackground3Hover,
    colorNeutralBackground3Pressed: palette.neutralQuaternary || webLightTheme.colorNeutralBackground3Pressed,
    colorNeutralBackground3Selected: palette.neutralQuaternaryAlt || webLightTheme.colorNeutralBackground3Selected,
    colorNeutralBackground4: palette.neutralLighter || webLightTheme.colorNeutralBackground4,
    colorNeutralBackground4Hover: palette.neutralLighterAlt || webLightTheme.colorNeutralBackground4Hover,
    colorNeutralBackground4Pressed: palette.neutralLighter || webLightTheme.colorNeutralBackground4Pressed,
    colorNeutralBackground4Selected: palette.white || webLightTheme.colorNeutralBackground4Selected,
    colorNeutralBackground5: palette.neutralLight || webLightTheme.colorNeutralBackground5,
    colorNeutralBackground5Hover: palette.neutralLighter || webLightTheme.colorNeutralBackground5Hover,
    colorNeutralBackground5Pressed: palette.neutralLighter || webLightTheme.colorNeutralBackground5Pressed,
    colorNeutralBackground5Selected: palette.neutralLighterAlt || webLightTheme.colorNeutralBackground5Selected,
    colorNeutralBackground6: palette.neutralLight || webLightTheme.colorNeutralBackground6,
    colorNeutralBackgroundStatic: grey[20],
    colorNeutralBackgroundInverted: palette.neutralSecondary || webLightTheme.colorNeutralBackgroundInverted,
    colorSubtleBackground: 'transparent',
    colorSubtleBackgroundHover: palette.neutralLighter || webLightTheme.colorSubtleBackgroundHover,
    colorSubtleBackgroundPressed: palette.neutralQuaternaryAlt || webLightTheme.colorSubtleBackgroundPressed,
    colorSubtleBackgroundSelected: palette.neutralLight || webLightTheme.colorSubtleBackgroundSelected,
    colorSubtleBackgroundLightAlphaHover: inverted ? whiteAlpha[10] : whiteAlpha[80],
    colorSubtleBackgroundLightAlphaPressed: inverted ? whiteAlpha[5] : whiteAlpha[50],
    colorSubtleBackgroundLightAlphaSelected: 'transparent',
    colorSubtleBackgroundInverted: 'transparent',
    colorSubtleBackgroundInvertedHover: blackAlpha[10],
    colorSubtleBackgroundInvertedPressed: blackAlpha[30],
    colorSubtleBackgroundInvertedSelected: blackAlpha[20],
    colorTransparentBackground: 'transparent',
    colorTransparentBackgroundHover: 'transparent',
    colorTransparentBackgroundPressed: 'transparent',
    colorTransparentBackgroundSelected: 'transparent',
    colorNeutralBackgroundDisabled: palette.neutralLighter || webLightTheme.colorNeutralBackgroundDisabled,
    colorNeutralBackgroundInvertedDisabled: whiteAlpha[10],
    colorNeutralStencil1: palette.neutralLight || webLightTheme.colorNeutralStencil1,
    colorNeutralStencil2: palette.neutralLighterAlt || webLightTheme.colorNeutralStencil2,
    colorBackgroundOverlay: blackAlpha[10],
    colorScrollbarOverlay: blackAlpha[50],
    colorBrandBackground: palette.themePrimary || webLightTheme.colorBrandBackground,
    colorBrandBackgroundHover: palette.themeDarkAlt || webLightTheme.colorBrandBackgroundHover,
    colorBrandBackgroundPressed: palette.themeDarker || webLightTheme.colorBrandBackgroundPressed,
    colorBrandBackgroundSelected: palette.themeDark || webLightTheme.colorBrandBackgroundSelected,
    colorCompoundBrandBackground: palette.themePrimary || webLightTheme.colorCompoundBrandBackground,
    colorCompoundBrandBackgroundHover: palette.themeDarkAlt || webLightTheme.colorCompoundBrandBackgroundHover,
    colorCompoundBrandBackgroundPressed: palette.themeDark || webLightTheme.colorCompoundBrandBackgroundPressed,
    colorBrandBackgroundStatic: palette.themePrimary || webLightTheme.colorBrandBackgroundStatic,
    colorBrandBackground2: palette.themeLighterAlt || webLightTheme.colorBrandBackground2,
    colorBrandBackgroundInverted: palette.white || webLightTheme.colorBrandBackgroundInverted,
    colorBrandBackgroundInvertedHover: palette.themeLighterAlt || webLightTheme.colorBrandBackgroundInvertedHover,
    colorBrandBackgroundInvertedPressed: palette.themeLight || webLightTheme.colorBrandBackgroundInvertedPressed,
    colorBrandBackgroundInvertedSelected: palette.themeLighter || webLightTheme.colorBrandBackgroundInvertedSelected,
    colorNeutralStrokeAccessible: palette.neutralSecondary || webLightTheme.colorNeutralStrokeAccessible,
    colorNeutralStrokeAccessibleHover: palette.neutralSecondary || webLightTheme.colorNeutralStrokeAccessibleHover,
    colorNeutralStrokeAccessiblePressed: palette.neutralSecondary || webLightTheme.colorNeutralStrokeAccessiblePressed,
    colorNeutralStrokeAccessibleSelected: palette.themePrimary || webLightTheme.colorNeutralStrokeAccessibleSelected,
    colorNeutralStroke1: palette.neutralQuaternary || webLightTheme.colorNeutralStroke1,
    colorNeutralStroke1Hover: palette.neutralTertiaryAlt || webLightTheme.colorNeutralStroke1Hover,
    colorNeutralStroke1Pressed: palette.neutralTertiaryAlt || webLightTheme.colorNeutralStroke1Pressed,
    colorNeutralStroke1Selected: palette.neutralTertiaryAlt || webLightTheme.colorNeutralStroke1Selected,
    colorNeutralStroke2: palette.neutralQuaternaryAlt || webLightTheme.colorNeutralStroke2,
    colorNeutralStroke3: palette.neutralLighter || webLightTheme.colorNeutralStroke3,
    colorNeutralStrokeOnBrand: palette.white || webLightTheme.colorNeutralStrokeOnBrand,
    colorNeutralStrokeOnBrand2: palette.white || webLightTheme.colorNeutralStrokeOnBrand2,
    colorNeutralStrokeOnBrand2Hover: palette.white || webLightTheme.colorNeutralStrokeOnBrand2Hover,
    colorNeutralStrokeOnBrand2Pressed: palette.white || webLightTheme.colorNeutralStrokeOnBrand2Pressed,
    colorNeutralStrokeOnBrand2Selected: palette.white || webLightTheme.colorNeutralStrokeOnBrand2Selected,
    colorBrandStroke1: palette.themePrimary || webLightTheme.colorBrandStroke1,
    colorBrandStroke2: palette.themeLight || webLightTheme.colorBrandStroke2,
    colorCompoundBrandStroke: palette.themePrimary || webLightTheme.colorCompoundBrandStroke,
    colorCompoundBrandStrokeHover: palette.themeDarkAlt || webLightTheme.colorCompoundBrandStrokeHover,
    colorCompoundBrandStrokePressed: palette.themeDark || webLightTheme.colorCompoundBrandStrokePressed,
    colorNeutralStrokeDisabled: palette.neutralQuaternaryAlt || webLightTheme.colorNeutralStrokeDisabled,
    colorNeutralStrokeInvertedDisabled: whiteAlpha[40],
    colorTransparentStroke: 'transparent',
    colorTransparentStrokeInteractive: 'transparent',
    colorTransparentStrokeDisabled: 'transparent',
    colorStrokeFocus1: palette.white || webLightTheme.colorStrokeFocus1,
    colorStrokeFocus2: palette.black || webLightTheme.colorStrokeFocus2,
    colorNeutralShadowAmbient: 'rgba(0,0,0,0.12)',
    colorNeutralShadowKey: 'rgba(0,0,0,0.14)',
    colorNeutralShadowAmbientLighter: 'rgba(0,0,0,0.06)',
    colorNeutralShadowKeyLighter: 'rgba(0,0,0,0.07)',
    colorNeutralShadowAmbientDarker: 'rgba(0,0,0,0.20)',
    colorNeutralShadowKeyDarker: 'rgba(0,0,0,0.24)',
    colorBrandShadowAmbient: 'rgba(0,0,0,0.30)',
    colorBrandShadowKey: 'rgba(0,0,0,0.25)',
    colorNeutralStencil1Alpha: webLightTheme.colorNeutralStencil1Alpha,
    colorNeutralStencil2Alpha: webLightTheme.colorNeutralStencil2Alpha,
  };
};

/**
 * Creates a v9 theme from a v8 theme.
 * You can optional pass a base v9 theme; otherwise webLightTheme is used.
 */
export const createv9Theme = (themeV8: ThemeV8, baseThemeV9?: ThemeV9): ThemeV9 => {
  const baseTheme = baseThemeV9 ?? webLightTheme;

  return {
    ...baseTheme,
    ...mapAliasColors(themeV8.palette, themeV8.isInverted)
  };
};