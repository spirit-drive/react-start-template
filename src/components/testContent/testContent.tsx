import React from 'react';

interface TestContentProps {
  prop?: string;
}

export function TestContent({prop = 'контент'}: TestContentProps) {
  return <div>{prop}</div>;
}
