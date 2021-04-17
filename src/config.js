export default {
  showTimestamp: {
    description: 'Displays a timestamp next to the output',
    type: 'boolean',
    default: true,
    order: 1
  },
  coloredBadges: {
    description: 'Colors background of the timestamp badge',
    type: 'boolean',
    default: false,
    order: 2
  },
  wordWrap: {
    description: 'Wrap words if the line length exceeds the panel width',
    type: 'boolean',
    default: true,
    order: 3
  },
  panelLocation: {
    title: 'Panel Location',
    description: 'Specifies the panel location. The change will only take effect on the next launch.',
    type: 'string',
    order: 4,
    enum: [
      {
        value: 'bottom',
        description: 'bottom'
      },
      {
        value: 'left',
        description: 'left'
      },
      {
        value: 'right',
        description: 'right'
      }
    ],
    default: 'bottom'
  },
};
