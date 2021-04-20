import { ConfigValues } from 'atom';
import { name } from '../package.json';

export default {
  schema: {
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
    }
  },

  get(key = ''): ConfigValues {
    return key?.length
      ? atom.config.get(`${name}.${key}`)
      : atom.config.get(`${name}`);
  },

  migrate(oldKey: string, newKey: string): void {
    if (!atom.config.get(`${name}.${oldKey}`) || atom.config.get(`${name}.${newKey}`)) {
      return;
    }

    try {
      atom.config.set(`${name}.${newKey}`, atom.config.get(`${name}.${oldKey}`));
    } catch (error) {
      atom.notifications.addWarning(`Failed to migrate configuration, see console for details`);

      return;
    }

    atom.config.unset(`${name}.${oldKey}`);
  },

  unset(key = ''): void {
    const unsetKey = key?.length
      ? `${name}.${key}`
      : name;

    atom.config.unset(unsetKey);
  }
};
