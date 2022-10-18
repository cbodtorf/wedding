import mixpanel from 'mixpanel-browser';

const isProd = process.env.NODE_ENV === 'production';

// Initialize sdk
mixpanel.init('6a8e87a6db4a36a3fe065cc0181a4288', {
  debug: !isProd
});

/**
 * @description A small wrapper for mixpanel sdk
 * https://developer.mixpanel.com/docs/javascript-full-api-reference
 */
export const Mixpanel = {
  identify: (id) => {
    mixpanel.identify(id);
  },
  getDistinct: () => {
    return mixpanel.get_distinct_id();
  },
  alias: (id) => {
    mixpanel.alias(id);
  },
  track: (name, props) => {
    mixpanel.track(name, props);
  },
  track_links: (query, name) => {
    mixpanel.track_links(query, name, {
      referrer: document.referrer
    });
  },
  people: {
    set: (props) => {
      mixpanel.people.set(props);
    }
  }
};
