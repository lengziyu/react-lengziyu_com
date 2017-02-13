import React from 'react';
import { Link, hashHistory } from 'react-router';
import styles from './Home.less'
import {query} from '../services/home'

const Home = () => {
  console.log(query)
  return (
    <div className="Home">
      <div className={styles.wrap}>
        <div className={styles.avatar}></div>
        <h1 className={styles.myname}>你好, 我是陈广达</h1>
        <h3 className={styles.details}>一个来自中国广东的WEB前端开发者。<br></br></h3>
        <div className={styles.lists}>
          <div className={styles.listsItem}>
            <div className={styles.itemTitle}>
              我的信息
                <Link className={styles.itemMore} to="/me">more</Link>
            </div>
            <div className={styles.itemMain}>
              <p>我的名字叫陈广达，网上喜欢用“冷子欲”这个名字。</p>
              <p>我来自广东茂名的一个农村小镇，不算风景优美但很山清水秀。</p>
              <p>喜欢研究前端的知识，喜欢用react构建项目，略懂nodejs，也有一个成为前端大牛的梦想。</p>
              <p>虽然我有点宅，但是不阻挡我喜欢交朋友，如果我们志同道合，也许我们可以成为好朋友。</p>
            </div>

          </div>

          <div className={styles.listsItem}>
            <div className={styles.itemTitle}>
              我的作品
              <Link className={styles.itemMore} to="/project">more</Link>
            </div>
            <div className={styles.itemMain}>
              <ul className={styles.zp}>
                <li>
                  <div className={styles.zpTitle}>
                    <a target="_blank" href="http://createjs.cc">CreateJS中文网</a>
                  </div>
                  <div className={styles.zpDetail}>
                    CreateJS中文网致力于CreateJS在中国的推广，运用了vue2、element构建。
                  </div>
                </li>
                <li>
                  <div className={styles.zpTitle}>
                    <a target="_blank" href="http://fenav.com">前端导航</a>
                  </div>
                  <div className={styles.zpDetail}>
                    前端导航云集高质量前端网站的内容，云集大量前端网站。运用angular1构建。
                  </div>
                </li>
                <li>
                  <div className={styles.zpTitle}>
                    <a target="_blank" href="http://blog.lengziyu.com">冷子欲博客</a>
                  </div>
                  <div className={styles.zpDetail}>
                    学习到的新知识、总结工作中遇到的问题及解决方法。在github page上搭建。
                  </div>
                </li>
                <li>
                  <div className={styles.zpTitle}>
                    <a target="_blank" href="http://lengziyu.com">个人网站</a>
                  </div>
                  <div className={styles.zpDetail}>
                    个人资料、个人经历等等。运用reactjs构建。
                  </div>
                </li>
              </ul>
            </div>

          </div>

          <div className={styles.listsItem}>
            <div className={styles.itemTitle}>
              我的经历
              <Link className={styles.itemMore} to="/work">more</Link>
            </div>
            <div className={styles.itemMain}>
              <p>努力工作，努力学习。</p>
              <p>不是最强，也要做到最好。</p>
              <p>不想吃天鹅肉的癞蛤蟆，不是好的癞蛤蟆。</p>
            </div>
          </div>

          <div className={styles.listsItem}>
            <div className={styles.itemTitle}>
              我的相册
            </div>
            <div className={styles.itemMain}>
              <p>我是一名老实的铲屎君，有两个主子。</p>
              <p>萌萌 (づ｡◕‿‿◕｡)づ的是--“吉祥”宝宝。</p>
              <p>一脸不屑(￣_,￣ )的是--“平安”大叔。</p>
              <p>每天就知道讨小鱼干，出去浪！这让我很惆帐。但我也甘愿一辈子做它们的铲屎君。</p>
            </div>
          </div>

          <div className={styles.listsItem}>
            <div className={styles.itemTitle}>
              我的碎言碎语
              <Link className={styles.itemMore} to="/say">more</Link>
            </div>
            <div className={styles.itemMain}>
              <ul className={styles.say}>
                <li>上班吐槽领导，</li>
                <li>下班谈谈人生。</li>
                <li>游玩晒晒美景，</li>
                <li>还不是美滋滋。</li>
              </ul>
            </div>

          </div>

          <div className={styles.listsItem}>
            <div className={styles.itemTitle}>
              其他
            </div>
            <div className={styles.itemMain}>
              <ul className={styles.other}>
                <li><a href="http://fenav.com/jianli" target="_blank">简历（旧）</a></li>
                <li><a href="http://lengziyu.com/games" target="_blank">HTML5游戏</a></li>
                <li><a href="https://github.com/CreateJS-demos" target="_blank">CreateJS-demos</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {

};

export default Home;
