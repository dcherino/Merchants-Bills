import { WrapHero, TextWrapper, Title, Subtitle } from './Hero.styles';

export interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  const instances = new Array(40).fill(0);
  return (
    <WrapHero>
      <TextWrapper>
        {instances.map((_, index) => {
          return (
            <span key={`${title}${index}`}>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </span>
          );
        })}
      </TextWrapper>
      {/* <Slogan>It’s your money. Own It.</Slogan> */}
    </WrapHero>
  );
};

export default Hero;
