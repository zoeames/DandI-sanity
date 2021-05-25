import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

export default {
  name: 'media',
  title: 'Media Types',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={["fas", "newspaper"]} />,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description:  'Media Name'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description:  'Fontawesome Icon (example: fas fa-unicorn)'
    },
  ],
  preview: {
    select: {
      name: 'name',
      icon: 'icon',
    },
    prepare: ({ name, icon }) => {
      const iconParts = icon.split(' ');
      const library = iconParts[0];
      const iconName = iconParts[1].split('fa-')[1];
      return {
        title: name,
        subtitle: icon,
        media: <FontAwesomeIcon icon={[library, iconName]} />,
      };
    },
  },
}