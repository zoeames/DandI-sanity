import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/pro-solid-svg-icons';

export default {
  name: 'tag',
  title: 'Tags',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faHashtag} />,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description:  'Tag Name'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description:  'Tag Description'
    },
    {
      name: 'isFeatured',
      title: 'Is the tag featured?',
      description:  'If checked the tag will show in the featured section',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
  ]
}
