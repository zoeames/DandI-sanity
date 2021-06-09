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
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description:  'Resource description'
    },
    {
      name: 'author',
      title: 'Author(s)',
      type: 'string',
      description:  'Resource Author(s) - to add multiple separate with commas (John Smith, Jane Doe)'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
      description:  'Resource Url'
    },
    {
      name: 'isActive',
      title: 'Is the resource active?',
      description:  'If checked the resource will show on the site.  If unchecked it will not show',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'isFeatured',
      title: 'Is the resource featured?',
      description:  'If checked the resource will show in the featured section',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'mediaType',
      title: 'Media Type',
      type: 'reference',
      to: [{ type: 'media' }],
    },
    {
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topic' }] }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    }
  ],
  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
    },
    prepare: ({ title, isActive }) => {
      const library = 'fas';
      const iconName = isActive ? 'check' : 'times';
      const color = isActive ? 'green' : 'red';
      return {
        title,
        subtitle: `Active: ${isActive ? 'Yes' : 'No'}`,
        media: <FontAwesomeIcon style={{color: color}} icon={[library, iconName]} />,
      };
    },
  },
}