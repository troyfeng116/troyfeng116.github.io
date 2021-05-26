/* -------- FONTS -------- */
export enum StandardFonts {
    SmallText = 'std-fonts-small-text',
    SmallTextBold = 'std-fonts-small-text-bold',
    MediumText = 'std-fonts-medium-text',
    LargeText = 'std-fonts-large-text',
    H1Text = 'std-fonts-h1-text',
    SmallTextAlt = 'std-fonts-small-text-alt',
    MediumTextAlt = 'std-fonts-medium-text-alt',
    LargeTextAlt = 'std-fonts-large-text-alt',
    H1TextAlt = 'std-fonts-h1-text-alt',
}

/* -------- TEXT COLORS -------- */
export enum StandardTextColors {
    Purple = 'std-text-colors-purple',
    Blue = 'std-text-colors-blue',
    DarkBlue = 'std-text-colors-dark-blue',
    White = 'std-text-colors-white',
    Pink = 'std-text-colors-pink',
}

/* -------- BACKGROUND COLORS -------- */
export enum StandardBackgrounds {
    Purple = 'std-bg-colors-purple',
    LightBlue = 'std-bg-colors-light-blue',
    Blue = 'std-bg-colors-blue',
    Black = 'std-bg-colors-black',
    White = 'std-bg-colors-white',
}

/* -------- CURSOR -------- */
export const Clickable = 'std-clickable'
export const UnClickable = 'std-un-clickable'

/* -------- BORDER RADII -------- */
export enum StandardBorderRadii {
    R4 = 'std-border-radii-4',
    R6 = 'std-border-radii-6',
}

/* -------- TEXT ALIGN -------- */
export enum StandardTextAlign {
    Center = 'std-text-align-center',
    Right = 'std-text-align-right',
}

/* -------- FLEX -------- */
export enum StandardFlex {
    Row = 'std-flex-row',
    Col = 'std-flex-col',
}

export enum StandardAlign {
    Center = 'std-align-center',
    Start = 'std-align-start',
    End = 'std-align-end',
}

export enum StandardJustify {
    Center = 'std-justify-center',
    Start = 'std-justify-start',
    End = 'std-justify-end',
    Between = 'std-justify-between',
    Evenly = 'std-justify-evenly',
}

export enum StandardLayout {
    FlexCol = 'std-flex-col std-align-center',
    FlexColCenter = 'std-flex-col std-align-center std-justify-center',
    FlexRow = 'std-flex-row std-align-center',
    FlexRowCenter = 'std-flex-row std-align-center std-justify-center',
}

/* -------- FLEX CHILDREN -------- */
export enum StandardFlexChild {
    Flex0 = 'std-flex-child-flex-0',
    Flex1 = 'std-flex-child-flex-1',
    Flex2 = 'std-flex-child-flex-2',
    Flex3 = 'std-flex-child-flex-3',
    Flex4 = 'std-flex-child-flex-4',
    Flex5 = 'std-flex-child-flex-5',
    Flex6 = 'std-flex-child-flex-6',
    Flex7 = 'std-flex-child-flex-7',
    Flex8 = 'std-flex-child-flex-8',
    Flex9 = 'std-flex-child-flex-9',
    Flex10 = 'std-flex-child-flex-10',

    AlignCenter = 'std-flex-child-align-center',
    AlignStart = 'std-flex-child-align-start',
    AlignEnd = 'std-flex-child-align-end',
}

/* -------- WIDTH -------- */
export enum StandardWidth {
    Full = 'std-width-full',
    Screen = 'std-width-screen',
    FitContent = 'std-width-fit-content',
}

/* -------- POSITION -------- */
export enum StandardPosition {
    Absolute = 'std-position-absolute',
    Relative = 'std-position-relative',
    Fixed = 'std-position-fixed',
}

/* -------- Z-INDEX -------- */
export enum StandardZIndex {
    Z0 = 'std-z-0',
    Z1 = 'std-z-1',
    Z2 = 'std-z-2',
    Z3 = 'std-z-3',
    Z4 = 'std-z-4',
    Z5 = 'std-z-5',
    Z6 = 'std-z-6',
    Z7 = 'std-z-7',
    Z8 = 'std-z-8',
    Z9 = 'std-z-9',
    Z10 = 'std-z-10',
}

/* -------- OVERFLOW -------- */
export enum StandardOverflow {
    XHidden = 'std-overflow-hidden-x',
    YHidden = 'std-overflow-hidden-y',
    XAuto = 'std-overflow-auto-x',
    YAuto = 'std-overflow-auto-y',
    XScroll = 'std-overflow-scroll-x',
    YScroll = 'std-overflow-scroll-y',
    Hidden = 'std-overflow-hidden-x std-overflow-hidden-y',
    Auto = 'std-overflow-auto-x std-overflow-auto-y',
    Scroll = 'std-overflow-scroll-x std-overflow-scroll-y',
}

/* -------- TRANSITION -------- */
export enum StandardTransition {
    All = 'std-transition-all',
    Transform = 'std-transition-transform',

    ScaleOnHover = 'std-transition-transform std-transition-scale-on-hover',
    ScaleLargeOnHover = 'std-transition-transform std-transition-scale-large-on-hover',
}

/* -------- PADDING -------- */
export enum StandardPadding {
    T6 = 'std-padding-T6',
    T12 = 'std-padding-T12',
    T18 = 'std-padding-T18',
    T24 = 'std-padding-T24',
    T30 = 'std-padding-T30',
    T36 = 'std-padding-T36',
    T42 = 'std-padding-T42',
    T48 = 'std-padding-T48',
    T60 = 'std-padding-T60',
    T72 = 'std-padding-T72',
    T90 = 'std-padding-T90',
    T120 = 'std-padding-T120',

    R6 = 'std-padding-R6',
    R12 = 'std-padding-R12',
    R18 = 'std-padding-R18',
    R24 = 'std-padding-R24',
    R30 = 'std-padding-R30',
    R36 = 'std-padding-R36',
    R42 = 'std-padding-R42',
    R48 = 'std-padding-R48',
    R60 = 'std-padding-R60',
    R72 = 'std-padding-R72',
    R90 = 'std-padding-R90',
    R120 = 'std-padding-R120',

    B6 = 'std-padding-B6',
    B12 = 'std-padding-B12',
    B18 = 'std-padding-B18',
    B24 = 'std-padding-B24',
    B30 = 'std-padding-B30',
    B36 = 'std-padding-B36',
    B42 = 'std-padding-B42',
    B48 = 'std-padding-B48',
    B60 = 'std-padding-B60',
    B72 = 'std-padding-B72',
    B90 = 'std-padding-B90',
    B120 = 'std-padding-B120',

    L6 = 'std-padding-L6',
    L12 = 'std-padding-L12',
    L18 = 'std-padding-L18',
    L24 = 'std-padding-L24',
    L30 = 'std-padding-L30',
    L36 = 'std-padding-L36',
    L42 = 'std-padding-L42',
    L48 = 'std-padding-L48',
    L60 = 'std-padding-L60',
    L72 = 'std-padding-L72',
    L90 = 'std-padding-L90',
    L120 = 'std-padding-L120',

    X6 = 'std-padding-R6 std-padding-L6',
    X12 = 'std-padding-R12 std-padding-L12',
    X18 = 'std-padding-R18 std-padding-L18',
    X24 = 'std-padding-R24 std-padding-L24',
    X30 = 'std-padding-R30 std-padding-L30',
    X36 = 'std-padding-R36 std-padding-L36',
    X42 = 'std-padding-R42 std-padding-L42',
    X48 = 'std-padding-R48 std-padding-L48',
    X60 = 'std-padding-R60 std-padding-L60',
    X72 = 'std-padding-R72 std-padding-L72',
    X90 = 'std-padding-R90 std-padding-L90',
    X120 = 'std-padding-R120 std-padding-L120',

    Y6 = 'std-padding-T6 std-padding-B6',
    Y12 = 'std-padding-T12 std-padding-B12',
    Y18 = 'std-padding-T18 std-padding-B18',
    Y24 = 'std-padding-T24 std-padding-B24',
    Y30 = 'std-padding-T30 std-padding-B30',
    Y36 = 'std-padding-T36 std-padding-B36',
    Y42 = 'std-padding-T42 std-padding-B42',
    Y48 = 'std-padding-T48 std-padding-B48',
    Y60 = 'std-padding-T60 std-padding-B60',
    Y72 = 'std-padding-T72 std-padding-B72',
    Y90 = 'std-padding-T90 std-padding-B90',
    Y120 = 'std-padding-T120 std-padding-B120',

    All6 = 'std-padding-T6 std-padding-R6 std-padding-B6 std-padding-L6',
    All12 = 'std-padding-T12 std-padding-R12 std-padding-B12 std-padding-L12',
    All18 = 'std-padding-T18 std-padding-R18 std-padding-B18 std-padding-L18',
    All24 = 'std-padding-T24 std-padding-R24 std-padding-B24 std-padding-L24',
    All30 = 'std-padding-T30 std-padding-R30 std-padding-B30 std-padding-L30',
    All36 = 'std-padding-T36 std-padding-R36 std-padding-B36 std-padding-L36',
    All42 = 'std-padding-T42 std-padding-R42 std-padding-B42 std-padding-L42',
    All48 = 'std-padding-T48 std-padding-R48 std-padding-B48 std-padding-L48',
    All60 = 'std-padding-T60 std-padding-R60 std-padding-B60 std-padding-L60',
    All72 = 'std-padding-T72 std-padding-R72 std-padding-B72 std-padding-L72',
    All90 = 'std-padding-T90 std-padding-R90 std-padding-B90 std-padding-L90',
    All120 = 'std-padding-T120 std-padding-R120 std-padding-B120 std-padding-L120',
}

/* -------- MARGIN -------- */
export enum StandardMargin {
    TAuto = 'std-margin-TAuto',
    T0 = 'std-margin-T0',
    T6 = 'std-margin-T6',
    T12 = 'std-margin-T12',
    T18 = 'std-margin-T18',
    T24 = 'std-margin-T24',
    T30 = 'std-margin-T30',
    T36 = 'std-margin-T36',
    T42 = 'std-margin-T42',
    T48 = 'std-margin-T48',
    T60 = 'std-margin-T60',
    T72 = 'std-margin-T72',
    T90 = 'std-margin-T90',
    T120 = 'std-margin-T120',

    RAuto = 'std-margin-RAuto',
    R0 = 'std-margin-R0',
    R6 = 'std-margin-R6',
    R12 = 'std-margin-R12',
    R18 = 'std-margin-R18',
    R24 = 'std-margin-R24',
    R30 = 'std-margin-R30',
    R36 = 'std-margin-R36',
    R42 = 'std-margin-R42',
    R48 = 'std-margin-R48',
    R60 = 'std-margin-R60',
    R72 = 'std-margin-R72',
    R90 = 'std-margin-R90',
    R120 = 'std-margin-R120',

    BAuto = 'std-margin-BAuto',
    B0 = 'std-margin-B0',
    B6 = 'std-margin-B6',
    B12 = 'std-margin-B12',
    B18 = 'std-margin-B18',
    B24 = 'std-margin-B24',
    B30 = 'std-margin-B30',
    B36 = 'std-margin-B36',
    B42 = 'std-margin-B42',
    B48 = 'std-margin-B48',
    B60 = 'std-margin-B60',
    B72 = 'std-margin-B72',
    B90 = 'std-margin-B90',
    B120 = 'std-margin-B120',

    LAuto = 'std-margin-LAuto',
    L0 = 'std-margin-L0',
    L6 = 'std-margin-L6',
    L12 = 'std-margin-L12',
    L18 = 'std-margin-L18',
    L24 = 'std-margin-L24',
    L30 = 'std-margin-L30',
    L36 = 'std-margin-L36',
    L42 = 'std-margin-L42',
    L48 = 'std-margin-L48',
    L60 = 'std-margin-L60',
    L72 = 'std-margin-L72',
    L90 = 'std-margin-L90',
    L120 = 'std-margin-L120',

    XAuto = 'std-margin-RAuto std-margin-LAuto',
    X0 = 'std-margin-R0 std-margin-L0',
    X6 = 'std-margin-R6 std-margin-L6',
    X12 = 'std-margin-R12 std-margin-L12',
    X18 = 'std-margin-R18 std-margin-L18',
    X24 = 'std-margin-R24 std-margin-L24',
    X30 = 'std-margin-R30 std-margin-L30',
    X36 = 'std-margin-R36 std-margin-L36',
    X42 = 'std-margin-R42 std-margin-L42',
    X48 = 'std-margin-R48 std-margin-L48',
    X60 = 'std-margin-R60 std-margin-L60',
    X72 = 'std-margin-R72 std-margin-L72',
    X90 = 'std-margin-R90 std-margin-L90',
    X120 = 'std-margin-R120 std-margin-L120',

    YAuto = 'std-margin-TAuto std-margin-BAuto',
    Y0 = 'std-margin-T0 std-margin-B0',
    Y6 = 'std-margin-T6 std-margin-B6',
    Y12 = 'std-margin-T12 std-margin-B12',
    Y18 = 'std-margin-T18 std-margin-B18',
    Y24 = 'std-margin-T24 std-margin-B24',
    Y30 = 'std-margin-T30 std-margin-B30',
    Y36 = 'std-margin-T36 std-margin-B36',
    Y42 = 'std-margin-T42 std-margin-B42',
    Y48 = 'std-margin-T48 std-margin-B48',
    Y60 = 'std-margin-T60 std-margin-B60',
    Y72 = 'std-margin-T72 std-margin-B72',
    Y90 = 'std-margin-T90 std-margin-B90',
    Y120 = 'std-margin-T120 std-margin-B120',
}
