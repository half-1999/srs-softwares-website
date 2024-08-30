import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedNumber = ({ number }) => {
  const { value } = useSpring({
    value: number,
    from: { value: 0 },
    config: { duration: 2000 },
  });

  return <animated.div>{value.to(val => Math.floor(val))}</animated.div>;
};

export default AnimatedNumber;
