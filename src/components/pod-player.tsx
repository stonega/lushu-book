import React from 'react'
import { createComponent } from '@lit-labs/react';
import { PodPlayer  as P} from 'pod-player';

export const PodPlayer = createComponent({
  tagName: 'pod-player',
  elementClass: P,
  react: React,
  events: {
    progress: 'progress',
  },
});