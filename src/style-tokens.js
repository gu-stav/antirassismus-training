const MQ_BREAKPOINTS = [
  ['phone', 500],
  ['tablet', 768],
  ['desktop', 1024],
];

export const fonts = {};

export const colors = {
  primary: 'purple',
  secondary: 'grey',
  highlight: 'yellow',
};

export const mq = MQ_BREAKPOINTS.reduce((acc, [name, size]) => {
  acc[name] = `only screen and (min-width: ${size}px)`;
  return acc;
}, {});

export const fluid = (from, to, vpFrom = 320, vpTo = 1280, baseSize = 16) =>
  `calc(${from * baseSize}px + (${to * baseSize} - ${
    from * baseSize
  }) * ((100vw - ${vpFrom}px) / (${vpTo} - ${vpFrom})))`;
