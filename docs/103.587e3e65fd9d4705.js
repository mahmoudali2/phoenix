"use strict";(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[103],{6103:(O,D,h)=>{h.r(D),h.d(D,{TRatioPlotPainter:()=>m});var E=h(4882),p=h(8872),L=h(1922),w=h(4483),X=h(801);class m extends L.JW{setGridsRange(a,i){const d=this.getObject();if(a===i){const o=this.getPadPainter()?.findPainterFor(d.fLowerPad,"lower_pad",p.clTPad)?.getFramePainter()?.x_handle;if(!o)return;a=o.full_min,i=o.full_max}d.fGridlines.forEach(o=>{o.fX1=a,o.fX2=i})}redraw(){var a=this;return(0,E.A)(function*(){const i=a.getObject(),d=a.getPadPainter(),o=d.findPainterFor(i.fTopPad,"top_pad",p.clTPad);o&&o.disablePadDrawing();const f=d.findPainterFor(i.fUpperPad,"upper_pad",p.clTPad),P=f?.getMainPainter(),e=f?.getFramePainter(),u=d.findPainterFor(i.fLowerPad,"lower_pad",p.clTPad),z=u?.getMainPainter(),n=u?.getFramePainter();let s=20,x=Promise.resolve(!0);if(f&&P&&e&&n&&!f._ratio_configured){f._ratio_configured=!0,P.options.Axis=0,s=P.getHisto().fYaxis.fLabelSize,s<1&&(s=Math.round(s*Math.min(f.getPadWidth(),f.getPadHeight())));const _=P.getHisto();_.fXaxis.fLabelSize=0,_.fXaxis.fTitle="",_.fYaxis.fLabelSize=s,_.fYaxis.fTitleSize=s,f.getRootPad().fTicky=1,x=f.redrawPad().then(()=>(e.o_zoom=e.zoom,e._ratio_low_fp=n,e._ratio_painter=a,e.zoom=function(c,g,r,l,t,C){return this.o_zoom(c,g,r,l,t,C).then(T=>(this._ratio_painter.setGridsRange(e.scale_xmin,e.scale_xmax),this._ratio_low_fp.o_zoom(e.scale_xmin,e.scale_xmax),T))},e.o_sizeChanged=e.sizeChanged,e.sizeChanged=function(){this.o_sizeChanged(),this._ratio_low_fp.fX1NDC=this.fX1NDC,this._ratio_low_fp.fX2NDC=this.fX2NDC,this._ratio_low_fp.o_sizeChanged()},!0))}return x.then(()=>{if(!u||!z||!n||!e||u._ratio_configured)return a;u._ratio_configured=!0,z.options.Axis=0;const _=z.getHisto();_.fXaxis.fTitle="x",_.fXaxis.fLabelSize=s,_.fXaxis.fTitleSize=s,_.fYaxis.fLabelSize=s,_.fYaxis.fTitleSize=s,u.getRootPad().fTicky=1,u.forEachPainterInPad(r=>{(0,p.isFunc)(r?.testEditable)&&r.testEditable(!1)});const c=[];let g;return i.fGridlinePositions.length>0&&i.fGridlines.length<i.fGridlinePositions.length&&i.fGridlinePositions.forEach(r=>{let l=!1;if(i.fGridlines.forEach(t=>{t.fY1===t.fY2&&Math.abs(t.fY1-r)<1e-6&&(l=!0)}),!l){const t=(0,p.create)(p.clTLine);t.fX1=e.scale_xmin,t.fX2=e.scale_xmax,t.fY1=t.fY2=r,t.fLineStyle=2,i.fGridlines.push(t),void 0===g&&(g=a.selectCurrentPad(i.fLowerPad.fName)),c.push(X.TLinePainter.draw(a.getDom(),t))}}),Promise.all(c).then(()=>n.zoom(e.scale_xmin,e.scale_xmax)).then(()=>(n.o_zoom=n.zoom,n._ratio_up_fp=e,n._ratio_painter=a,n.zoom=function(r,l,t,C,T,M){return this._ratio_painter.setGridsRange(r,l),this._ratio_up_fp.o_zoom(r,l),this.o_zoom(r,l,t,C,T,M)},n.o_sizeChanged=n.sizeChanged,n.sizeChanged=function(){this.o_sizeChanged(),this._ratio_up_fp.fX1NDC=this.fX1NDC,this._ratio_up_fp.fX2NDC=this.fX2NDC,this._ratio_up_fp.o_sizeChanged()},a))})})()}static draw(a,i,d){return(0,E.A)(function*(){const o=new m(a,i,d);return(0,w.ensureTCanvas)(o,!1).then(()=>o.redraw())})()}}}}]);
//# sourceMappingURL=103.587e3e65fd9d4705.js.map