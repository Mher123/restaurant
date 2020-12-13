import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import './LeftBar.scss';
import React from 'react';

class LeftBar extends React.Component {

  render() {
    return (
      <div className="left__bar">
        <Menu
          style={{ width: 87 }}
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          <img className="logo" src="./assets/images/logo_symbol.png" alt=""/>
          <Menu.Item key="1">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 3.07129V17.5883" stroke="black" strokeWidth="1.1" strokeMiterlimit="10"/>
              <path d="M10.5001 3.07125C10.5001 1.8188 9.47533 0.794067 8.22287 0.794067H3.09921C1.84675 0.794067 0.822021 1.8188 0.822021 3.07125V14.4572C0.822021 15.7096 1.84675 16.7344 3.09921 16.7344H8.22287C9.47533 16.7344 10.5001 17.7591 10.5001 19.0115V19.5808" stroke="black" strokeWidth="1.1" strokeMiterlimit="10"/>
              <path d="M10.5 3.07125C10.5 1.8188 11.5247 0.794067 12.7772 0.794067H17.9009C19.1533 0.794067 20.178 1.8188 20.178 3.07125V14.4572C20.178 15.7096 19.1533 16.7344 17.9009 16.7344H12.7772C11.5247 16.7344 10.5 17.7591 10.5 19.0115V19.5808" stroke="black" strokeWidth="1.1" strokeMiterlimit="10"/>
            </svg>
          </Menu.Item>
          <Menu.Item key="2">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 9.6875H1.5C1.22614 9.6875 1 9.46136 1 9.1875V1.1875C1 0.913642 1.22614 0.6875 1.5 0.6875H7.5C7.77386 0.6875 8 0.913642 8 1.1875V9.1875C8 9.46136 7.77386 9.6875 7.5 9.6875ZM7.5 17.6875H1.5C1.22614 17.6875 1 17.4614 1 17.1875V13.1875C1 12.9136 1.22614 12.6875 1.5 12.6875H7.5C7.77386 12.6875 8 12.9136 8 13.1875V17.1875C8 17.4614 7.77386 17.6875 7.5 17.6875ZM17.5 17.6875H11.5C11.2261 17.6875 11 17.4614 11 17.1875V9.1875C11 8.91364 11.2261 8.6875 11.5 8.6875H17.5C17.7739 8.6875 18 8.91364 18 9.1875V17.1875C18 17.4614 17.7739 17.6875 17.5 17.6875ZM11 5.1875V1.1875C11 0.913642 11.2261 0.6875 11.5 0.6875H17.5C17.7739 0.6875 18 0.913643 18 1.1875V5.1875C18 5.46136 17.7739 5.6875 17.5 5.6875H11.5C11.2261 5.6875 11 5.46136 11 5.1875Z" stroke="black"/>
            </svg>
          </Menu.Item>
          <Menu.Item key="3">
            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.99 4.6875C16.99 5.79397 16.1012 6.6875 15 6.6875C14.4696 6.6875 13.9609 6.47679 13.5858 6.10171C13.2107 5.72664 13 5.21793 13 4.6875C13 4.15707 13.2107 3.64836 13.5858 3.27329C13.9609 2.89821 14.4696 2.6875 15 2.6875C16.1012 2.6875 16.99 3.58103 16.99 4.6875ZM9.99 3.1875C9.99 4.57354 8.88168 5.6875 7.5 5.6875C6.11614 5.6875 5 4.57136 5 3.1875C5 1.80364 6.11614 0.6875 7.5 0.6875C8.88168 0.6875 9.99 1.80146 9.99 3.1875ZM10 11.9375C10 11.6638 10.1332 11.3871 10.441 11.1034C10.7521 10.8165 11.2069 10.5576 11.7495 10.3405C12.8357 9.90577 14.1475 9.6875 15 9.6875C15.8525 9.6875 17.1643 9.90577 18.2505 10.3405C18.7931 10.5576 19.2479 10.8165 19.559 11.1034C19.8668 11.3871 20 11.6638 20 11.9375V13.6875H10V11.9375ZM1 11.6875C1 11.2887 1.19583 10.9026 1.60507 10.5252C2.01773 10.1446 2.61313 9.80764 3.31201 9.52796C4.71059 8.96829 6.39745 8.6875 7.5 8.6875C7.81248 8.6875 8.17343 8.71173 8.56391 8.75849C7.26875 9.86187 7 11.1204 7 11.9375V13.6875H1V11.6875Z" stroke="black"/>
            </svg>
          </Menu.Item>
          <Menu.Item key="4">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3914 3.15618H12.882V1.99126C12.882 1.66558 12.8086 1.36495 12.6618 1.08938C12.5151 0.813805 12.3096 0.594598 12.0453 0.431759C11.7811 0.26892 11.4963 0.1875 11.191 0.1875H7.80897C7.33924 0.1875 6.93997 0.365997 6.61116 0.722991C6.28235 1.07998 6.11794 1.50274 6.11794 1.99126V3.15618H1.60855C1.30323 3.15618 1.039 3.27518 0.815883 3.51318C0.592762 3.75117 0.481201 4.03301 0.481201 4.35869V16.985C0.481201 17.3107 0.592762 17.5925 0.815883 17.8305C1.039 18.0685 1.30323 18.1875 1.60855 18.1875H17.3914C17.6968 18.1875 17.961 18.0685 18.1841 17.8305C18.4072 17.5925 18.5188 17.3107 18.5188 16.985V4.35869C18.5188 4.14575 18.4689 3.94846 18.369 3.76683C18.2692 3.5852 18.1313 3.43802 17.9551 3.32529C17.779 3.21255 17.5911 3.15618 17.3914 3.15618ZM7.24529 1.99126C7.24529 1.82842 7.30107 1.6875 7.41263 1.5685C7.52419 1.4495 7.6563 1.39001 7.80897 1.39001H11.191C11.3554 1.39001 11.4905 1.4495 11.5962 1.5685C11.7018 1.6875 11.7547 1.82842 11.7547 1.99126V3.15618H7.24529V1.99126ZM1.60855 4.35869H17.3914V8.58625H11.191V7.96621C11.191 7.75326 11.1382 7.55284 11.0325 7.36495C10.9268 7.17706 10.7888 7.02988 10.6185 6.92341C10.4483 6.81694 10.2633 6.7637 10.0637 6.7637H8.93631C8.61925 6.7637 8.35209 6.8827 8.13484 7.12069C7.91759 7.35869 7.80897 7.64053 7.80897 7.96621V8.58625H1.60855V4.35869ZM10.0637 10.9913H8.93631V7.96621H10.0637V10.9913ZM1.60855 16.985V9.78875H7.80897V10.9913C7.80897 11.3295 7.91759 11.6144 8.13484 11.8462C8.35209 12.0779 8.61925 12.1938 8.93631 12.1938H10.0637C10.2633 12.1938 10.4483 12.1405 10.6185 12.0341C10.7888 11.9276 10.9268 11.7804 11.0325 11.5925C11.1382 11.4046 11.191 11.2042 11.191 10.9913V9.78875H17.3914V16.985H1.60855Z" fill="black"/>
            </svg>
          </Menu.Item>
          <Menu.Item key="5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.1257 0H0.925716C0.41143 0 0 0.409739 0 0.921911V12.5994C0 13.1116 0.41143 13.5213 0.925716 13.5213H6.78857L4.57714 17.3114C4.47429 17.5163 4.52571 17.8236 4.73143 17.926C4.93714 18.0285 5.24572 17.9772 5.34857 17.7724L7.81714 13.5213H10.1829L12.6514 17.7724C12.7543 17.9772 13.0629 18.0797 13.2686 17.926C13.4743 17.8236 13.5771 17.5163 13.4229 17.3114L11.2114 13.5213H17.0743C17.5886 13.5213 18 13.1116 18 12.5994V0.921911C18 0.409739 17.5886 0 17.1257 0ZM17.1257 12.5482H0.925716V0.870695H17.1257V12.5482Z" fill="black"/>
              <path d="M3.59985 10.2946C3.75414 10.2946 3.90842 10.2434 3.95985 10.0897L7.30271 5.12168L11.417 8.39957C11.5199 8.50201 11.6741 8.50201 11.777 8.50201C11.8799 8.50201 12.0341 8.39957 12.0856 8.29714L14.8113 3.79003C14.9141 3.58516 14.8627 3.27785 14.657 3.17542C14.4513 3.02177 14.1427 3.1242 14.0399 3.32907L11.6227 7.37523L7.50843 4.09733C7.40557 3.9949 7.30271 3.99489 7.14843 3.99489C7.04557 3.99489 6.89128 4.09733 6.83986 4.19976L3.23986 9.57757C3.08557 9.78244 3.137 10.0385 3.34271 10.1922C3.44557 10.2946 3.497 10.2946 3.59985 10.2946Z" fill="black"/>
            </svg>
          </Menu.Item>
          <Menu.Item key="6">
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4999 15.1535C12.706 15.1535 14.4943 13.3651 14.4943 11.1591C14.4943 8.95303 12.706 7.16467 10.4999 7.16467C8.29385 7.16467 6.50549 8.95303 6.50549 11.1591C6.50549 13.3651 8.29385 15.1535 10.4999 15.1535Z" stroke="black" strokeMiterlimit="10" strokeLinejoin="round"/>
              <path d="M2.51113 5.22447L9.35869 1.28713C10.0434 0.887689 10.9565 0.887689 11.6412 1.28713L18.4888 5.22447C19.1735 5.62391 19.63 6.36573 19.63 7.22168V15.1534C19.63 15.9523 19.1735 16.6941 18.4888 17.1506L11.6412 21.088C10.9565 21.4874 10.0434 21.4874 9.35869 21.088L2.51113 17.1506C1.82638 16.7512 1.36987 16.0094 1.36987 15.1534V7.22168C1.36987 6.36573 1.82638 5.62391 2.51113 5.22447Z" stroke="black" strokeMiterlimit="10" strokeLinejoin="round"/>
            </svg>
          </Menu.Item>
          <Menu.Item key="7">
            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="4.1875" r="3.5" stroke="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.5 16.1875H14.5C14.5 12.3215 11.366 9.1875 7.5 9.1875C3.63401 9.1875 0.5 12.3215 0.5 16.1875H1.5C1.5 12.8738 4.18629 10.1875 7.5 10.1875C10.8137 10.1875 13.5 12.8738 13.5 16.1875Z" fill="black"/>
            </svg>
          </Menu.Item>
          <Menu.Item key="8">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.96472 5.29419L7.31768 9.64714" stroke="black" strokeMiterlimit="10"/>
              <path d="M15.0823 12.353L19.4352 16.706" stroke="black" strokeMiterlimit="10"/>
              <path d="M12.5529 14.8823L16.9058 19.2353" stroke="black" strokeMiterlimit="10"/>
              <path d="M9.8471 7.11759L5.49414 2.76465" stroke="black" strokeMiterlimit="10"/>
              <path d="M11.2 21C16.7228 21 21.2 16.5228 21.2 11C21.2 5.47715 16.7228 1 11.2 1C5.6771 1 1.19995 5.47715 1.19995 11C1.19995 16.5228 5.6771 21 11.2 21Z" stroke="black" strokeMiterlimit="10"/>
              <path d="M11.1999 15.1177C13.474 15.1177 15.3176 13.2742 15.3176 11.0001C15.3176 8.72598 13.474 6.88245 11.1999 6.88245C8.92581 6.88245 7.08228 8.72598 7.08228 11.0001C7.08228 13.2742 8.92581 15.1177 11.1999 15.1177Z" stroke="black" strokeMiterlimit="10"/>
              <path d="M5.49414 19.2353L9.8471 14.8823" stroke="black" strokeMiterlimit="10"/>
              <path d="M12.5529 7.11759L16.9058 2.76465" stroke="black" strokeMiterlimit="10"/>
              <path d="M15.0823 9.64714L19.4352 5.29419" stroke="black" strokeMiterlimit="10"/>
              <path d="M7.31768 12.353L2.96472 16.706" stroke="black" strokeMiterlimit="10"/>
            </svg>
          </Menu.Item>
          <span className="exit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1364 8.25V6.375C15.1364 5.87772 14.9371 5.40081 14.5823 5.04917C14.2274 4.69754 13.7462 4.5 13.2444 4.5H4.16255C3.66075 4.5 3.1795 4.69754 2.82468 5.04917C2.46985 5.40081 2.27051 5.87772 2.27051 6.375V17.625C2.27051 18.1223 2.46985 18.5992 2.82468 18.9508C3.1795 19.3025 3.66075 19.5 4.16255 19.5H13.2444C13.7462 19.5 14.2274 19.3025 14.5823 18.9508C14.9371 18.5992 15.1364 18.1223 15.1364 17.625V15.75" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.1636 8.25L21.9477 12L18.1636 15.75" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.03455 12H21.9478" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Menu>
      </div>
    );
  }
}

export default LeftBar;