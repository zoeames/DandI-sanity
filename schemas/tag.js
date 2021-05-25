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
      description:  'Topic Name'
    }
  ]
}
