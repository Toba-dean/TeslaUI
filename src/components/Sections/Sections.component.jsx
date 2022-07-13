import { Wrap, SectionText, ButtonGroup, LeftButton, RightButton, DownArrow, Buttons } from './Sections.styles'
import Fade from 'react-reveal/Fade'

const Sections = ({ title, description, leftButton, rightButton, image }) => {
  return (
    <Wrap image={image}>
      <Fade bottom>
        <SectionText>
          <h1>{title}</h1>
          <p>{description}</p>
        </SectionText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              {leftButton}
            </LeftButton>
            {
              rightButton &&
              <RightButton>
                {rightButton}
              </RightButton>
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src='/tesla-images/down-arrow.svg' />
      </Buttons>
    </Wrap>
  )
}

export default Sections
