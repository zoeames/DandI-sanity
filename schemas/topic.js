import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBooks } from '@fortawesome/pro-solid-svg-icons';

export default {
  name: 'topic',
  title: 'Topics',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faBooks} />,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description:  'Topic Name'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description:  'Topic Description'
    },
    {
      name: 'isFeatured',
      title: 'Is the topic featured?',
      description:  'If checked the topic will show in the featured section',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
  ]
}
