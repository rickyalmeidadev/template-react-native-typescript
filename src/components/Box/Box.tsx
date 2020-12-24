import styled from 'styled-components/native'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps
} from 'styled-system'

interface Props extends BorderProps, ColorProps, FlexboxProps, LayoutProps, ShadowProps, SpaceProps {}

const Box = styled.View<Props>(border, color, flexbox, layout, shadow, space)

export default Box
