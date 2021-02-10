import { WrapHero, TextWrapper, Title, Subtitle } from './Hero.styles';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  const instances = new Array(40).fill(0);
  return (
    <WrapHero>
      <TextWrapper>
        {instances.map((instance) => {
          console.log(title, subtitle);
          return (
            <span>
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
