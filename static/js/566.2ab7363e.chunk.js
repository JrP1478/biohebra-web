"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[566],{6566:(e,i,t)=>{t.r(i),t.d(i,{default:()=>y});var r=t(4647),n=t(1319),a=t(3614),o=t(9281),d=t(5639),s=t(2646),c=t(9);const x=(0,c.Ay)("section")`
  position: relative;
  padding: 8rem 0 6rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0;
  }
`,p=(0,c.Ay)("h6")`
  text-align: center;
`,h=(0,c.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 18px;
  color: #5a5a5a;
  max-width: 600px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,l=(0,c.Ay)("p")`
  margin: 1.5rem 0 2rem 0 ;
  font-size: 18px;
  color: #5a5a5a;
  text-align: center; 
`,g=(0,c.Ay)(n.A)`
  flex-direction: ${e=>{let{direction:i}=e;return"left"===i?"row":"row-reverse"}};
`,m=(0,c.Ay)("div")`
  position: relative;
  max-width: 100%;

  @media (max-width: 768px) {
  width: 100% !important;
}
`,b=(0,c.Ay)("div")`
  margin-top: 20px;
  width: 100%;

  .service-card {
    background: white;
    border-radius: 24px;
    padding: 40px 25px 35px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-align: center;
    height: 100%;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(10, 92, 54, 0.08);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, #0a5c36, #1e7b4c, #2e9a64);
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }

    &:hover {
      transform: translateY(-12px);
      box-shadow: 0 30px 60px rgba(10, 92, 54, 0.15);
      border-color: rgba(10, 92, 54, 0.15);

      &::before {
        transform: scaleX(1);
      }
    }
  }

  .icon-wrapper {
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #0a5c36 0%, #1e7b4c 60%, #2e9a64 100%);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    box-shadow: 0 15px 25px rgba(10, 92, 54, 0.25);
    transition: all 0.3s ease;
    padding: 18px;

    .service-card:hover & {
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
      transform: scale(1.05) rotate(5deg);
    }
    
    img {
      width: 85px;
      height: 85px;
      object-fit: contain;
      display: block;
    }

    img.icon-white {
      filter: brightness(0) invert(1);
    }

    span, i {
      color: white;
      font-size: 52px;
      line-height: 1;
    }
  }

  @media (max-width: 1024px) {
    .service-card {
      padding: 35px 20px 30px;
      min-height: 300px;
    }
    
    .icon-wrapper {
      width: 100px;
      height: 100px;
      padding: 14px;
      
      img {
        width: 60px;
        height: 60px;
      }

      span, i {
        font-size: 45px;
      }
    }
  }

  @media (max-width: 600px) {
    .service-card {
      padding: 30px 15px 25px;
      min-height: 280px;
    }
    
    .icon-wrapper {
      width: 90px;
      height: 90px;
      padding: 12px;
      
      img {
        width: 55px;
        height: 55px;
      }

      span, i {
        font-size: 40px;
      }
    }
  }
`,w=(0,c.Ay)("h6")`
  font-size: 22px; 
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 14px;
  line-height: 1.4;
`,f=(0,c.Ay)("p")`
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 0;
  max-width: 260px;
  margin-left: auto;
  margin-right: auto;
`,j=(0,c.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;var u=t(579);const y=(0,o.C)()((e=>{let{icon:i,title:t,content:o,section:c,button:y,t:v,id:A,direction:k}=e;return(0,u.jsx)(x,{children:(0,u.jsx)(a.zW,{direction:k,triggerOnce:!0,children:(0,u.jsxs)(g,{justify:"space-between",align:"middle",id:A,direction:k,children:[i&&(0,u.jsx)(r.A,{lg:11,md:11,sm:12,xs:24,children:(0,u.jsx)(s.A,{src:i,width:"100%",height:"100%"})}),(0,u.jsx)(r.A,{lg:i?11:24,md:i?11:24,sm:24,xs:24,children:(0,u.jsxs)(m,{children:["intro"!==A?(0,u.jsx)(p,{children:v(t)}):(0,u.jsx)("h6",{children:v(t)}),"intro"!==A?(0,u.jsx)(l,{children:v(o)}):(0,u.jsx)(h,{children:v(o)}),"right"===k?(0,u.jsx)(j,{children:"object"===typeof y&&y.map(((e,i)=>(0,u.jsx)(d.$,{color:e.color,href:e.href,onClick:e.scroll?()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})(e.scroll):void 0,children:v(e.title)},i)))}):(0,u.jsx)(b,{children:(0,u.jsx)(n.A,{gutter:[25,25],justify:"center",children:"object"===typeof c&&c.map(((e,i)=>(0,u.jsx)(r.A,{xs:24,sm:12,md:8,lg:6,children:(0,u.jsxs)("div",{className:"service-card",children:[(0,u.jsx)("div",{className:"icon-wrapper",children:(0,u.jsx)(s.A,{src:e.icon,width:"100%",height:"100%"})}),(0,u.jsx)(w,{children:v(e.title)}),(0,u.jsx)(f,{children:v(e.content)})]})},i)))})})]})})]})})})}))}}]);
//# sourceMappingURL=566.2ab7363e.chunk.js.map