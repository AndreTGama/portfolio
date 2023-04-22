import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Box } from './Particles.styles';
import option from './Particles-config.json';

export default function ParticlesBackground() {

    const opts : any = option;

    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

  return (
    <Box>
        <Particles 
            id='particles-here'
            init={particlesInit} 
            options={opts}
        />
    </Box>
  );
}