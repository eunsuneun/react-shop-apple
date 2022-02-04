import React, { useEffect } from 'react';

const TabContent = ({ tabId, setTabTransition }) => {
  useEffect(() => {
    setTabTransition(true)
  });
  if(tabId === 0) {
    return(
      <div className='mt-5'>기본 정보입니다.</div>
    )
  }else if(tabId === 1) {
    return(
      <div className='mt-5'>배송 정보입니다.</div>
    )
  }else if(tabId === 2) {
    return(
      <div className='mt-5'>리뷰입니다.</div>
    )
  }
}

export default TabContent;