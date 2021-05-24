import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/pro-solid-svg-icons';

export default {
  name: 'media',
  title: 'Media Types',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faCompactDisc} />,
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      description:  'Media Type'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description:  'Fontawesome Icon (example: fas fa-unicorn)'
    },
  ]
}