import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import Collapsible from 'react-collapsible';

class ChatSite extends React.Component{

    showSettings = (event) => {
        event.preventDefault();
    }

    render(){
        return(
            <Menu width={"320px"} right burgerButtonClassName={"far fa-comments chat"} customBurgerIcon={ <i className="far fa-comments"></i> }>
                <div className={"menu-header"}>
                    채팅 <dim>(8,255)</dim>
                </div>
                <div className={"content"}>
                    <div className={"search-bar"}>
                        <i className={"icon fa fa-search"}></i>
                        <input className={"input-text"} type={"text"} name={"eingabe"} placeholder={"종목명 또는 키워드를 검색하세요"}/>
                    </div>
                </div>
                <Collapsible open trigger={<div><span>인기 채팅</span><i className="fas fa-angle-down"></i></div>} triggerWhenOpen ={<div><span>인기 채팅</span><i className="fas fa-angle-up"></i></div>}>
                    <ul>
                        <li>네오위즈홀딩스 <span class="dim">(1,293)</span></li>
                        <li>NAVER <span className="dim">(1,081)</span></li>
                        <li>삼성전자 <span className="dim">(723)</span></li>
                        <li>시멘트 관련주 <span className="dim">(661)</span></li>
                        <li>통일 관련주 <span className="dim">(620)</span></li>
                        <li>한국철강 <span className="dim">(491)</span></li>
                    </ul>
                </Collapsible>
                <Collapsible open trigger={<div><span>종목 채팅</span><i className="fas fa-angle-down"></i></div>} triggerWhenOpen ={<div><span>종목 채팅</span><i className="fas fa-angle-up"></i></div>}>
                    <ul>
                        <li>종목이름 <span className="dim">(접속자수)</span></li>
                        <li>종목이름 <span className="dim">(접속자수)</span></li>
                        <li>종목이름 <span className="dim">(접속자수)</span></li>
                        <li>종목이름 <span className="dim">(접속자수)</span></li>
                        <li>종목이름 <span className="dim">(접속자수)</span></li>
                        <li>종목이름 <span className="dim">(접속자수)</span></li>
                    </ul>
                </Collapsible>
                <Collapsible open trigger={<div><span>키워드 채팅</span><i className="fas fa-angle-down"></i></div>} triggerWhenOpen ={<div><span>키워드 채팅</span><i className="fas fa-angle-up"></i></div>}>
                    <ul>
                        <li>키워드이름 <span className="dim">(1,293)</span></li>
                        <li>키워드이름 <span className="dim">(1,081)</span></li>
                        <li>키워드이름 <span className="dim">(723)</span></li>
                        <li>키워드이름 <span className="dim">(661)</span></li>
                        <li>키워드이름 <span className="dim">(620)</span></li>
                        <li>키워드이름 <span className="dim">(491)</span></li>
                    </ul>
                </Collapsible>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        )
    }
}

export default ChatSite;
