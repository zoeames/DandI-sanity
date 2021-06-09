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
      title: 'Is the topic featured?',
      description:  'If checked the topic will show in the featured section',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      isFeatured: 'isFeatured',
    },
    prepare: ({ title, isFeatured }) => {
      const library = 'fas';
      const iconName = isFeatured ? 'star' : 'times';
      const color = isFeatured ? 'black' : 'white';
      return {
        title,
        media: <FontAwesomeIcon style={{color: color}} icon={[library, iconName]} />,
      };
    },
  },
}
