import React from 'react'
import styles from './commons/Wrap.less'
import Navbar from './commons/Navbar'
import MeStyles from './Me.less'

const Me = () =>{
  const basic = {
    name: "陈广达",
    sex: "男",
    place: "茂名信宜",
    nation: "汉族",
    birthday: "01.22",
    school: "中技",
    age: "23",
    height: "175cm",
    tel: "13621424189",
    email: "1058566903@qq.com",
    qq: "1058566903"
  }
  const skill = [
    "熟练掌握CSS3+HTML5+JS标签语言化编码，可较快完成对静态页面的构建；",
    "熟练CSS预处理器LESS/SASS，模块化AMD requirejs开发，掌握基于Gulp/Webpack的前端自动化打包的项目配置；",
    "熟练基于jQuery+Bootstrap编程，对性能优化、懒加载有实战经验；",
    "熟悉Reactjs+ES6+Redux+Fetch构建项目，也对Vuejs、Angularjs有一定了解，能快速上手；",
    "使用过Nodejs做过一些服务器端中间层方面的工作；",
    "其他常用工具：Photoshp、Atom/Sublime、Git/Svn。"
  ]
  const exper = {
    "school": [
      "2012年9月 至 2015年7月在 广州白云工商高级技工学校 学习"
    ],
     "work": [
      "2014年6月 至 2015年4月在 广州多和网络有限公司",
      "2015年4月 至 2016年4月在 广州幻嘉网络科技有限公司",
      "2016年4月 至今在 恒拓开源股份科技有限公司"
    ]
  }

  return(
    <div className={styles.wrap}>
      <Navbar title="我的信息"></Navbar>
      <div className={MeStyles.section}>
        <div className={MeStyles.workHeader}>
          <h2 className={MeStyles.workTitle}>基本信息</h2>
        </div>
        <div className={MeStyles.volunteer}>
          <ul className={MeStyles.basic}>
            <li>姓名：{ basic.name }</li>
            <li>性别：{ basic.sex }</li>
            <li>籍贯：{ basic.place }</li>
            <li>民族：{ basic.nation }</li>
            <li>学历：{ basic.school }</li>
            <li>生日：{ basic.birthday }</li>
            <li>年龄：{ basic.age }</li>
            <li>身高：{ basic.height }</li>
            <li>电话：{ basic.tel }</li>
            <li>邮箱：{ basic.email }</li>
            <li>QQ：{ basic.qq }</li>
          </ul>
        </div>
      </div>

      <div className={MeStyles.section}>
        <div className={MeStyles.workHeader}>
          <h2 className={MeStyles.workTitle}>学习经历</h2>
        </div>
        <div className={MeStyles.volunteer}>
          <div className={MeStyles.basic}>
            {
              exper.school.map( item =>
                <p key={ item }>{ item }</p>
            )}
          </div>
        </div>
      </div>

      <div className={MeStyles.section}>
        <div className={MeStyles.workHeader}>
          <h2 className={MeStyles.workTitle}>工作经历</h2>
        </div>
        <div className={MeStyles.volunteer}>
          <div className={MeStyles.basic}>
            {
              exper.work.map( item =>
                <p key={ item }>{ item }</p>
            )}
          </div>
        </div>
      </div>

      <div className={MeStyles.section}>
        <div className={MeStyles.workHeader}>
          <h2 className={MeStyles.workTitle}>专业技能</h2>
        </div>
        <div className={MeStyles.volunteer}>
          <div className={MeStyles.basic}>
            {
              skill.map( item =>
                <p key={ item }>{ item }</p>
            )}
          </div>
        </div>
      </div>


    </div>
  )
}
export default Me;
