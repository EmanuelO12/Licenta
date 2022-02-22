import { Button, PageHeader } from 'antd';
import React from 'react';

export interface HeaderProps{
  headerVisible:boolean;
  headerTitle:string;
  backButtonVisible:boolean;
}

export const SiteHeader= ({headerVisible,headerTitle,backButtonVisible}:HeaderProps) => {
    return(
      <>
      {headerVisible?(
        <div style={{display:"flex"}}>
      <PageHeader
          style={{marginLeft:"30%"}}
          className="site-page-header"
          title={<h1>{headerTitle}</h1>}
        backIcon
      />
      {backButtonVisible?(<Button size="large" style={{marginLeft:"750px", marginTop:"50px"}}>🡸 Inapoi</Button>):null}
      </div>
      ):null}
  </>
    );
};