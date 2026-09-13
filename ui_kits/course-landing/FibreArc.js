(()=>{const{useEffect:te,useRef:E}=React,re=1.5,ne=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,oe=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;
uniform float uHover;

float sat(float x){ return clamp(x, 0.0, 1.0); }
float pw(float x, float e){ return pow(max(x, 1e-5), e); }
float hash21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 34.56); return fract(p.x * p.y); }

uniform vec3 uBg, uBase, uAccent, uHigh;
uniform float uStrands, uCurve, uSpread, uThin, uComb, uReach, uDir;

void main(){
  float ar = uRes.x / max(uRes.y, 1.0);
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = (uv - 0.5) * vec2(ar, 1.0);
  float t = uTime;
  vec2 apex = vec2(0.34, 0.20);

  float cs = cos(uDir), sn = sin(uDir);
  mat2 rot = mat2(cs, sn, -sn, cs);
  vec2 q  = rot * p;
  vec2 pm = q - rot * ((uMouse - 0.5) * vec2(ar, 1.0));
  vec2 ps = q - normalize(pm + vec2(1e-5)) * uComb * 0.10 * sat(uHover)
            * exp(-dot(pm, pm) / max(uReach * uReach, 1e-4));
  float core = 0.0, halo = 0.0;
  for(int i = 0; i < 26; i++){
    float fi = float(i);
    float f = fi / 25.0;
    float on = sat(uStrands - fi);
    float jit = hash21(vec2(fi, 1.7));
    float k = uCurve * (0.55 + 1.30 * f + 0.10 * jit);
    float ax = apex.x + (f - 0.5) * uSpread * 0.18;
    float ay = apex.y + (f - 0.5) * uSpread * 0.14 + 0.012 * sin(t * 0.5 + fi);
    float dx = ps.x - ax;
    float yc = ay - k * dx * dx;
    float sl = -2.0 * k * dx;
    float dd = abs(ps.y - yc) / sqrt(1.0 + sl * sl);
    float w = uThin * (0.0016 + 0.0032 * jit);
    core += on * pw(w / (w + dd), 3.2);
    halo += on * pw(w * 11.0 / (w * 11.0 + dd), 1.9) * 0.085;
  }
  float env = mix(0.20, 1.0, sat((ps.x + 0.52) / 0.95));
  core *= env; halo *= env;
  vec3 col = uBg;
  col += uBase * halo * 1.5;
  col += mix(uAccent, uHigh, sat(core * 0.75)) * core * 1.4;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;function z(t,s,f){const n=t.createShader(s);return n?(t.shaderSource(n,f),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:(console.error("FibreArc shader:",t.getShaderInfoLog(n)),t.deleteShader(n),null)):null}function C(t,s){if(!t)return s;const f=String(t).trim();if(f.charAt(0)==="#"){let o=f.slice(1);if((o.length===3||o.length===4)&&(o=o[0]+o[0]+o[1]+o[1]+o[2]+o[2]),o.length>=6){const g=parseInt(o.slice(0,2),16),b=parseInt(o.slice(2,4),16),F=parseInt(o.slice(4,6),16);if(!isNaN(g)&&!isNaN(b)&&!isNaN(F))return[g/255,b/255,F/255]}return s}const n=f.match(/[\d.]+/g);return n&&n.length>=3?[Math.min(255,parseFloat(n[0]))/255,Math.min(255,parseFloat(n[1]))/255,Math.min(255,parseFloat(n[2]))/255]:s}function h(t,s){return typeof t=="number"&&isFinite(t)?t:s}function m(t,s,f){return t<s?s:t>f?f:t}const ae={curve:150,spread:100,thickness:100,comb:170};function ie(t){const{style:s,background:f="#01030A",baseColor:n="#1B4FD8",accentColor:o="#6FC8FF",highlight:g="#FFFFFF",density:b=26,speed:F=100,direction:X=0,hover:K=200,reach:J=23,bundle:Q,width:x,height:A}=t,w={...ae,...Q||{}},G=E(null),_=E({w:0,h:0});_.current={w:h(x,0),h:h(A,0)};const O=E({});O.current={background:f,baseColor:n,accentColor:o,highlight:g,density:m(h(b,26),4,26),speed:m(h(F,50),0,100)/50,direction:m(h(X,0),0,360)*Math.PI/180,hover:m(h(K,100),0,200)/100,reach:m(h(J,30),5,100)/100,curve:m(h(w.curve,150),20,400)/100,spread:m(h(w.spread,100),0,300)/100,thickness:m(h(w.thickness,100),20,400)/100,comb:m(h(w.comb,170),0,400)/100};const v=E({x:.5,y:.5,tx:.5,ty:.5,on:0,onTarget:0});return te(()=>{const r=G.current;if(!r)return;const e=r.getContext("webgl",{antialias:!1,alpha:!1,depth:!1});if(!e){console.error("FibreArc: WebGL unavailable");return}const U=z(e,e.VERTEX_SHADER,ne),j=z(e,e.FRAGMENT_SHADER,oe);if(!U||!j)return;const d=e.createProgram();if(!d)return;if(e.attachShader(d,U),e.attachShader(d,j),e.linkProgram(d),!e.getProgramParameter(d,e.LINK_STATUS)){console.error("FibreArc link:",e.getProgramInfoLog(d));return}e.useProgram(d);const Z=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,Z),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const V=e.getAttribLocation(d,"a_pos");e.enableVertexAttribArray(V),e.vertexAttribPointer(V,2,e.FLOAT,!1,0,0);const M={},a=u=>(u in M||(M[u]=e.getUniformLocation(d,u)),M[u]);let p=0,L=performance.now(),k=0,B=!0;const I=u=>{if(!B){p=0;return}const l=Math.min(.05,(u-L)/1e3);L=u;const c=O.current;k=(k+l*c.speed)%3600;const i=v.current,P=1-Math.exp(-6*l);i.on+=(i.onTarget-i.on)*P,i.x+=((i.onTarget>0?i.tx:.5)-i.x)*P,i.y+=((i.onTarget>0?i.ty:.5)-i.y)*P;const Y=Math.min(window.devicePixelRatio||1,re),$=_.current.w||r.clientWidth||1200,ee=_.current.h||r.clientHeight||800,S=Math.max(1,Math.round($*Y)),T=Math.max(1,Math.round(ee*Y));(r.width!==S||r.height!==T)&&(r.width=S,r.height=T),e.viewport(0,0,S,T),e.uniform2f(a("uRes"),S,T),e.uniform1f(a("uTime"),k),e.uniform2f(a("uMouse"),i.x,1-i.y),e.uniform1f(a("uHover"),Math.min(1,i.on)*c.hover);const H=C(c.background,[.004,.012,.039]);e.uniform3f(a("uBg"),H[0],H[1],H[2]);const N=C(c.baseColor,[.106,.31,.847]);e.uniform3f(a("uBase"),N[0],N[1],N[2]);const D=C(c.accentColor,[.435,.784,1]);e.uniform3f(a("uAccent"),D[0],D[1],D[2]);const q=C(c.highlight,[1,1,1]);e.uniform3f(a("uHigh"),q[0],q[1],q[2]),e.uniform1f(a("uStrands"),c.density),e.uniform1f(a("uReach"),c.reach),e.uniform1f(a("uDir"),c.direction),e.uniform1f(a("uCurve"),c.curve),e.uniform1f(a("uSpread"),c.spread),e.uniform1f(a("uThin"),c.thickness),e.uniform1f(a("uComb"),c.comb),e.drawArrays(e.TRIANGLES,0,3),p=requestAnimationFrame(I)},R=u=>{const l=r.getBoundingClientRect();l.width<=0||l.height<=0||(v.current.tx=m((u.clientX-l.left)/l.width,0,1),v.current.ty=m((u.clientY-l.top)/l.height,0,1),v.current.onTarget=1)},W=()=>{v.current.onTarget=0};r.addEventListener("pointermove",R),r.addEventListener("pointerenter",R),r.addEventListener("pointerleave",W),p=requestAnimationFrame(I);let y=null;return"IntersectionObserver"in window&&(y=new IntersectionObserver(u=>{u.forEach(l=>{B=l.isIntersecting,B&&!p&&(L=performance.now(),p=requestAnimationFrame(I))})},{threshold:0}),y.observe(r)),()=>{cancelAnimationFrame(p),y&&y.disconnect(),r.removeEventListener("pointermove",R),r.removeEventListener("pointerenter",R),r.removeEventListener("pointerleave",W)}},[]),React.createElement("div",{style:{position:"relative",overflow:"hidden",background:f,width:typeof x=="number"&&x>0?x:"100%",height:typeof A=="number"&&A>0?A:"100%",...s}},React.createElement("canvas",{ref:G,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}))}function ce(t){return React.createElement(ie,{bundle:{comb:170,curve:20,spread:100,thickness:100},...t})}window.FibreArc=ce;})();
