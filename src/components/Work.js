import React from 'react'
import styles from './commons/Wrap.less'
import Navbar from './commons/Navbar'
import WorkItem from './commons/WorkItem'

const Work = () =>{
  const workData = [
    {
      id: "1",
      company: "广州多和网络有限公司",
      position: "前端工程师",
      startTime: "2014.06",
      endTime: "2015.04",
      summary: "主要职责：淘宝/天猫模板SDK开发，运用HTML/XML、CSS/CSS3、PHP、JavaScript等技术开发。工作期间常运用CSS3动画增加用户体验/反馈，对解决兼容性问题也有很大的提升。（开始也要兼容IE6，后来IE7+，以及各大主流浏览器）。",
      skillTags: [
        "css", "css3", "html5", "JavaScript", "PHP"
      ]
    },
    {
      id: "2",
      company: "广州幻嘉网络科技有限公司",
      position: "前端工程师",
      startTime: "2015.04",
      endTime: "2016.04",
      summary: "主要职责：独自负责公司官网、游戏产品官网（包括PC和移动端）、活动页面、微信界面等等前端部分工作。工作空余时间期间学习并实战各种工具框架：FIS3、NODE、AMD模块化、SASS等等技术。",
      skillTags: [
        "FIS3", "requirejs", "jquery", "nodejs", "less"
      ]
    },
    {
      id: "3",
      company: "恒拓开源信息科技股份有限公司",
      position: "中级前端工程师",
      startTime: "2016.04",
      endTime: "至今",
      summary: '负责外包项目【创享三期】移动端页面和后台管理页面的开发及数据对接。7月份外包派驻到“南方航空”。负责“新技术研究”这块，学习并运用webpack、node、react、ES6/ES7。用react开发了【额外付费行李】项目；和同事研究海外版react项目，并编写简单易懂的开发文档，并展开了技术分享会；',
      skillTags: [
        "sui", "underscorejs", "sass", "gulp", "webpack", "react", "redux", "es6", "vue", "fetch"
      ]
    }
  ]
  console.log(workData)
  return (
    <div className={styles.wrap}>
      <Navbar title="工作经历"></Navbar>
      {workData.map(item =>
        <WorkItem key={item.id} data={ item }></WorkItem>
      )}
    </div>
  )
}
export default Work;
