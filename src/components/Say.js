import React from 'react'
import styles from './Say.less'
import Navbar from './commons/Navbar'
import SayItem from './commons/SayItem'


const Say = () =>{
  const sayData = [
    {
      id: "1",
      name: "lengziyu",
      msg: "还有我的相册还没完成，有什么建议吗？兄台",
      date: "2017.02.13"
    },
    {
      id: "2",
      name: "admin",
      msg: "明天情人节了哦，没人陪~",
      date: "2017.02.13"
    },
    {
      id: "3",
      name: "admin",
      msg: "明天又要上班啦~还没玩够呢。早上不想起床，太困了。",
      date: "2017.02.12"
    },
    {
      id: "4",
      name: "admin",
      msg: "周末陪猫猫玩~",
      date: "2017.02.11"
    },
    {
      id: "5",
      name: "猜猜我是谁",
      msg: "你猜猜看呀~~~~",
      date: "2017.02.10"
    },
    {
      id: "6",
      name: "陈广达",
      msg: "今天天气不错呀，去哪玩呢？",
      date: "2017.02.10"
    }
  ];
  return(
    <div className={styles.wrap}>
      <Navbar title="闲言碎语"></Navbar>
      {sayData.map(item =>
        <SayItem key={ item.id } data={ item }></SayItem>
      )}
    </div>
  )
}
export default Say;
