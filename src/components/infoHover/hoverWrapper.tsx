import React from 'react';
import { InfoHoverWrapper } from './InfoHoverWrapper';
import { Layout } from '../lauout/Layout';

export const HoverWrapper = () => {
  return (
    <Layout>
      <div className="wrapper">
        <InfoHoverWrapper hoverComponent={<span>hover component top- left</span>}>
          <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque? II</div>
        </InfoHoverWrapper>
        <InfoHoverWrapper>
          <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque? iI</div>
        </InfoHoverWrapper>
        <InfoHoverWrapper>
          <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque?</div>
        </InfoHoverWrapper>
        <InfoHoverWrapper hoverComponent={<span>hover component top- right</span>}>
          <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque?</div>
        </InfoHoverWrapper>
        <InfoHoverWrapper hoverComponent={<span>hover component bottom - left</span>}>
          <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque?</div>
        </InfoHoverWrapper>
        <InfoHoverWrapper>
          <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque?</div>
        </InfoHoverWrapper>
        <InfoHoverWrapper>
          <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque?</div>
        </InfoHoverWrapper>
        <InfoHoverWrapper hoverComponent={<span>hover component bottom - right</span>}>
          <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque?</div>
        </InfoHoverWrapper>
      </div>
    </Layout>
  );
};
