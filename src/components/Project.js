import React from 'react'
import styles from './commons/Wrap.less'
import Navbar from './commons/Navbar'
import ProjectItem from './commons/ProjectItem'


const Project = () =>{
  const data = [
    {
      id: "1",
      name: "CreateJS 中文网",
      url: "http://createjs.cc",
      imgUrl: "../assets/images/createjscc-pic.png",
      detail: "CreateJS中文网致力于CreateJS在中国的推广，运用了vue2、element构建。",
      date: "2016.08",
      skillTags: [
        "Vuejs2", "Sass", "Vue@next-router"
      ]
    },
    {
      id: "2",
      name: "前端导航",
      url: "http://fenav.com",
      imgUrl: "../assets/images/createjscc-pic.png",
      detail: "前端导航云集高质量前端网站的内容，云集大量前端网站。运用angular1构建。",
      date: "2015.12",
      skillTags: [
        "angularjs1", "FIS3", "requirejs", "sass"
      ]
    },
    {
      id: "3",
      name: "冷子欲博客",
      url: "http://blog.lengziyu.com",
      imgUrl: "../assets/images/bloglengziyu-pic.png",
      detail: "学习到的新知识、总结工作中遇到的问题及解决方法。在github page上搭建。",
      date: "2016.10",
      skillTags: [
        "Github Page", "Sass"
      ]
    },
    {
      id: "4",
      name: "个人网站",
      url: "http://lengziyu.com",
      imgUrl: "../assets/images/bloglengziyu-pic.png",
      detail: "个人资料、个人经历等等。运用reactjs构建。",
      date: "2017.02",
      skillTags: [
        "reactjs", "dva", "less", "webpack"
      ]
    }
  ]
  return(
    <div className={styles.wrap}>
      <Navbar title="我的作品"></Navbar>
      <div className={styles.project}>
        { data.map( item =>
          <ProjectItem key={ item.id } data={ item }></ProjectItem>
        )}
      </div>
    </div>
  )
}
export default Project;
