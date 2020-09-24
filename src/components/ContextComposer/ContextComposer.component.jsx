import React from 'react';

function ContextComposer({ providers = [], children }) {
  return (
    <>
      {providers.reduceRight((result, Provider) => (
        <Provider>{result}</Provider>
      ), children)}
    </>
  )
}

export default ContextComposer;