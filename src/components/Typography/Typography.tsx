import styled from 'styled-components/native'
import { color, ColorProps, flexbox, FlexboxProps, space, SpaceProps, typography, TypographyProps } from 'styled-system'

interface Props extends ColorProps, FlexboxProps, SpaceProps, TypographyProps {}

const Typography = styled.Text<Props>(color, flexbox, space, typography)

export default Typography
