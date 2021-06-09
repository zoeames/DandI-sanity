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
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      description:  'Short Description - appears on home page when tag is featured'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description:  'Long Description - appears on the glossary page'
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
