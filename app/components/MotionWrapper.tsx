// components/MotionWrapper.tsx
import dynamic from 'next/dynamic';
import React from 'react';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });

interface MotionProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const Motion = {
  Div: (props: MotionProps) => <MotionDiv {...props} />,
  H1: (props: MotionProps) => <MotionH1 {...props} />,
  P: (props: MotionProps) => <MotionP {...props} />,
};