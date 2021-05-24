import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-solid-svg-icons';

export default {
  name: 'resource',
  title: 'Resources',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faInfoCircle} />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:  'Resource Title'
    }
  ]
}
