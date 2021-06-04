import React from "react";
import DynamicComponent from "../DynamicComponent";
import theme from "../theme";

const {
  display,
  largeHeading,
  mediumHeading,
  smallHeading,
  xsHeading,
  subHeading,
  bodyMain
} = theme.textStyles;

export const Display = props => (
  <DynamicComponent {...display} {...props}>
    {props.children}
  </DynamicComponent>
);

export const LargeHeading = props => (
  <DynamicComponent {...largeHeading} {...props}>
    {props.children}
  </DynamicComponent>
);

export const MediumHeading = props => (
  <DynamicComponent {...mediumHeading} {...props}>
    {props.children}
  </DynamicComponent>
);

export const SmallHeading = props => (
  <DynamicComponent {...smallHeading} {...props}>
    {props.children}
  </DynamicComponent>
);

export const XsHeading = props => (
  <DynamicComponent {...xsHeading} {...props}>
    {props.children}
  </DynamicComponent>
);

export const SubHeading = props => (
  <DynamicComponent {...subHeading} {...props}>
    {props.children}
  </DynamicComponent>
);

export const BodyMain = props => (
  <DynamicComponent {...bodyMain} {...props}>
    {props.children}
  </DynamicComponent>
);
